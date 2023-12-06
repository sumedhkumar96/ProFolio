package com.profolio.portfoliobuilder.auth;

import com.profolio.portfoliobuilder.models.entities.AuthToken;
import com.profolio.portfoliobuilder.repositories.AuthTokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * The type Logout service.
 */
@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    @Autowired
    private AuthTokenRepository authTokenRepository;

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        jwt = authHeader.split(" ")[1].trim();
        Optional<AuthToken> optionalAuthToken = authTokenRepository.findByTokenString(jwt);
        if (optionalAuthToken.isPresent()) {
            AuthToken authToken = optionalAuthToken.get();
            authToken.setRevoked(true);
            authTokenRepository.save(authToken);
            SecurityContextHolder.clearContext();
        }
    }
}