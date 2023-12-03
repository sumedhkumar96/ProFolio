package com.profolio.portfoliobuilder.auth;

import com.profolio.portfoliobuilder.models.entities.OneTimePassword;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.OneTimePasswordRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Optional;

@Component
public class OneTimePasswordService {
    @Value("${otp.length}")
    private int otpLength;
    @Value("${otp.expiration}")
    private int otpExpirationInMinutes;

    @Autowired
    private OneTimePasswordRepository oneTimePasswordRepository;

    public OneTimePassword createOneTimePassword(User user) {
        OneTimePassword oneTimePassword = new OneTimePassword();
        oneTimePassword.setUser(user);
        oneTimePassword.setOtpString(generateOtpString());
        return oneTimePasswordRepository.save(oneTimePassword);
    }

    private String generateOtpString() {
        return RandomStringUtils.randomAlphanumeric(otpLength);
    }

    public boolean isOtpValid(String otpString, User user) {
        Optional<OneTimePassword> optionalOneTimePassword = oneTimePasswordRepository.findByOtpStringAndUser(otpString, user);
        return optionalOneTimePassword
                .map(oneTimePassword -> oneTimePassword.getCreatedAt()
                        .isAfter(LocalDateTime.now().minusMinutes(otpExpirationInMinutes)))
                .orElse(false);
    }
}
