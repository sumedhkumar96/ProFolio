package com.profolio.portfoliobuilder;

import com.profolio.portfoliobuilder.auth.OneTimePasswordService;
import com.profolio.portfoliobuilder.exceptions.CustomException;
import com.profolio.portfoliobuilder.models.dtos.SignupDTO;
import com.profolio.portfoliobuilder.models.entities.OneTimePassword;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.UserRepository;
import com.profolio.portfoliobuilder.services.UserService;
import com.profolio.portfoliobuilder.utils.EmailUtil;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private OneTimePasswordService oneTimePasswordService;

    @Mock
    private EmailUtil emailUtil;

    @InjectMocks
    @Spy
    private UserService userService;

    @Test
    public void testSignup_Success() {
        SignupDTO signupDTO = new SignupDTO();
        signupDTO.setEmail("test@example.com");
        signupDTO.setName("Test User");
        signupDTO.setPassword("test123");

        OneTimePassword oneTimePassword = new OneTimePassword();
        oneTimePassword.setOtpString("123");

        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.empty());
        when(oneTimePasswordService.createOneTimePassword(any())).thenReturn(oneTimePassword);
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> {
            User user = invocation.getArgument(0);
            user.setId("123");
            return user;
        });

        SignupDTO result = userService.signup(signupDTO);

        assertNotNull(result);
        assertEquals("123", result.getId());
        assertNull(result.getPassword());
        verify(userRepository, times(1)).findByEmail("test@example.com");
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testSignup_Failure_UserExists() {
        SignupDTO signupDTO = new SignupDTO();
        signupDTO.setEmail("test@example.com");
        signupDTO.setName("Test User");
        signupDTO.setPassword("test123");

        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(new User()));

        assertThrows(CustomException.class, () -> userService.signup(signupDTO));

        verify(userRepository, times(1)).findByEmail("test@example.com");
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    public void testVerifySignupOtp_ValidOtp() {
        User user = new User();
        user.setVerified(false);

        when(userRepository.findById("123")).thenReturn(Optional.of(user));
        when(oneTimePasswordService.isOtpValid("123456", user)).thenReturn(true);

        boolean result = userService.verifySignupOtp("123", "123456");

        assertTrue(result);
        assertTrue(user.isVerified());
        verify(userRepository, times(1)).findById("123");
        verify(oneTimePasswordService, times(1)).isOtpValid("123456", user);
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void testResendSignupOtp_NotVerified() {
        User user = new User();
        user.setVerified(false);
        user.setEmail("test@example.com");

        when(userRepository.findById("123")).thenReturn(Optional.of(user));
        OneTimePassword oneTimePassword = new OneTimePassword();
        oneTimePassword.setOtpString("123456");
        when(oneTimePasswordService.createOneTimePassword(user)).thenReturn(oneTimePassword);

        String result = userService.resendSignupOtp("123");

        assertEquals("OTP sent to the registered email ID", result);
        verify(userRepository, times(1)).findById("123");
        verify(oneTimePasswordService, times(1)).createOneTimePassword(user);
        verify(emailUtil, times(1)).sendSignupOtp("test@example.com", "123456");
    }

}
