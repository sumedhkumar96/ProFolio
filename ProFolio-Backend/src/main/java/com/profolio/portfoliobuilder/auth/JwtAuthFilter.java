package com.profolio.portfoliobuilder.auth;

import com.profolio.portfoliobuilder.models.AuthToken;
import com.profolio.portfoliobuilder.models.User;
import com.profolio.portfoliobuilder.repositories.AuthTokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

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
                || request.getServletPath().contains("/api/user/login")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        jwt = authHeader.split(" ")[1].trim();
        userEmail = jwtService.extractUsername(jwt);
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            User user = customUserDetailService.loadUserByUsername(userEmail);
            boolean isRevoked = authTokenRepository.findByTokenStringAndUser(jwt, user)
                    .map(AuthToken::isRevoked)
                    .orElse(true);
            if (jwtService.isTokenValid(jwt, user) && !isRevoked) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user,
                        null, user.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
