package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.OneTimePassword;
import com.profolio.portfoliobuilder.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * The interface One time password repository.
 */
@Repository
public interface OneTimePasswordRepository extends JpaRepository<OneTimePassword, String> {

    /**
     * Find by otp string and user optional.
     *
     * @param otpString the otp string
     * @param user      the user
     * @return the optional
     */
    Optional<OneTimePassword> findByOtpStringAndUser(String otpString, User user);
}
