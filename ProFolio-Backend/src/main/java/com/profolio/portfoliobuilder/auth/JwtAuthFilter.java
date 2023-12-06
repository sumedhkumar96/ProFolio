package com.profolio.portfoliobuilder.auth;

import com.profolio.portfoliobuilder.exceptions.CustomErrorResponse;
import com.profolio.portfoliobuilder.models.entities.AuthToken;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.AuthTokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

/**
 * The type Jwt auth filter.
 */
@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;
    @Autowired
    private CustomUserDetailService customUserDetailService;
    @Autowired
    private AuthTokenRepository authTokenRepository;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {

        if (request.getServletPath().contains("/api/user/signup")
                || request.getServletPath().contains("/api/user/verify-signup-otp")
                || request.getServletPath().contains("/api/user/login")
                || request.getServletPath().contains("/api/user/resend-signup-otp")
                || request.getServletPath().contains("/api/user/public/")
                || request.getMethod().contains(HttpMethod.OPTIONS.name())) {
            filterChain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            handleAuthExceptions("Auth token not found", response);
            return;
        }
        jwt = authHeader.split(" ")[1].trim();
        try {
            userEmail = jwtService.extractUsername(jwt);
        } catch (Exception ex) {
            handleAuthExceptions(ex.getMessage(), response);
            return;
        }
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            User user = customUserDetailService.loadUserByUsername(userEmail);
            boolean isRevoked = authTokenRepository.findByTokenStringAndUser(jwt, user)
                    .map(AuthToken::isRevoked)
                    .orElse(true);
            if (jwtService.isTokenValid(jwt, user) && !isRevoked) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user,
                        null, user.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            } else {
                handleAuthExceptions("Auth token is invalid", response);
                return;
            }
        }
        filterChain.doFilter(request, response);
    }

    private void handleAuthExceptions(String message, @NonNull HttpServletResponse response) throws IOException {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                HttpStatus.UNAUTHORIZED,
                message,
                "Authentication required",
                LocalDateTime.now()
        );
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.getWriter().write(errorResponse.toString());
    }
}
