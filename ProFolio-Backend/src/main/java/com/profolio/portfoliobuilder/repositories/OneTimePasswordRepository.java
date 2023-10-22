package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.OneTimePassword;
import com.profolio.portfoliobuilder.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OneTimePasswordRepository extends JpaRepository<OneTimePassword, String> {

    Optional<OneTimePassword> findByOtpStringAndUser(String otpString, User user);
}
