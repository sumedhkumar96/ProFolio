package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.AuthToken;
import com.profolio.portfoliobuilder.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthTokenRepository extends JpaRepository<AuthToken, String> {
    Optional<AuthToken> findByTokenStringAndUser(String tokenString, User user);

    Optional<AuthToken> findByTokenString(String tokenString);
}
