package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.AuthToken;
import com.profolio.portfoliobuilder.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * The interface Auth token repository.
 */
@Repository
public interface AuthTokenRepository extends JpaRepository<AuthToken, String> {
    /**
     * Find by token string and user optional.
     *
     * @param tokenString the token string
     * @param user        the user
     * @return the optional
     */
    Optional<AuthToken> findByTokenStringAndUser(String tokenString, User user);

    /**
     * Find by token string optional.
     *
     * @param tokenString the token string
     * @return the optional
     */
    Optional<AuthToken> findByTokenString(String tokenString);
}
