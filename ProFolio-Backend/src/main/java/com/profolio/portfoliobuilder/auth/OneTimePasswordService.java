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

/**
 * The type One time password service.
 */
@Component
public class OneTimePasswordService {
    @Value("${otp.length}")
    private int otpLength;
    @Value("${otp.expiration}")
    private int otpExpirationInMinutes;

    @Autowired
    private OneTimePasswordRepository oneTimePasswordRepository;

    /**
     * Create one time password one time password.
     *
     * @param user the user
     * @return the one time password
     */
    public OneTimePassword createOneTimePassword(User user) {
        OneTimePassword oneTimePassword = new OneTimePassword();
        oneTimePassword.setUser(user);
        oneTimePassword.setOtpString(generateOtpString());
        return oneTimePasswordRepository.save(oneTimePassword);
    }

    private String generateOtpString() {
        return RandomStringUtils.randomAlphanumeric(otpLength);
    }

    /**
     * Is otp valid boolean.
     *
     * @param otpString the otp string
     * @param user      the user
     * @return the boolean
     */
    public boolean isOtpValid(String otpString, User user) {
        Optional<OneTimePassword> optionalOneTimePassword = oneTimePasswordRepository.findByOtpStringAndUser(otpString, user);
        return optionalOneTimePassword
                .map(oneTimePassword -> oneTimePassword.getCreatedAt()
                        .isAfter(LocalDateTime.now().minusMinutes(otpExpirationInMinutes)))
                .orElse(false);
    }
}
