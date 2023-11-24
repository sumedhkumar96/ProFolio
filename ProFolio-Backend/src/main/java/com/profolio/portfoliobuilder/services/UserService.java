package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.auth.JwtService;
import com.profolio.portfoliobuilder.auth.OneTimePasswordService;
import com.profolio.portfoliobuilder.models.*;
import com.profolio.portfoliobuilder.models.dtos.FileUploadDTO;
import com.profolio.portfoliobuilder.models.enums.MediaCategory;
import com.profolio.portfoliobuilder.repositories.AuthTokenRepository;
import com.profolio.portfoliobuilder.repositories.MediaRepository;
import com.profolio.portfoliobuilder.repositories.OneTimePasswordRepository;
import com.profolio.portfoliobuilder.repositories.UserRepository;
import com.profolio.portfoliobuilder.utils.FileUtils;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private OneTimePasswordService oneTimePasswordService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private OneTimePasswordRepository oneTimePasswordRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthTokenRepository authTokenRepository;
    @Autowired
    private MediaRepository mediaRepository;
    @Autowired
    private FileUtils fileUtils;

    @Transactional
    public UserAuth signup(UserAuth userAuth) {
        Optional<User> optionalUser = userRepository.findByEmail(userAuth.getEmail());
        if (optionalUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "User with provided email already exists.");
        }
        User user = new User();
        user.setEmail(userAuth.getEmail());
        user.setName(userAuth.getName());
        user.setPasswordHash(passwordEncoder.encode(userAuth.getPassword()));
        user.setRole(Role.USER);
        OneTimePassword oneTimePassword = oneTimePasswordService.createOneTimePassword(user);
        emailService.sendSignupOtp(user.getEmail(), oneTimePassword.getOtpString());
        userAuth.setPassword(null);
        userAuth.setId(user.getId());
        return userAuth;
    }

    public Boolean verifySignupOtp(String userId, String otp) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found."));
        boolean isVerified = oneTimePasswordService.isOtpValid(otp, user);
        user.setVerified(isVerified);
        userRepository.save(user);
        return isVerified;
    }

    public void resendSignupOtp(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found."));
        OneTimePassword oneTimePassword = oneTimePasswordService.createOneTimePassword(user);
        emailService.sendSignupOtp(user.getEmail(), oneTimePassword.getOtpString());
    }

    public UserAuth login(UserAuth userAuth) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(userAuth.getEmail(), userAuth.getPassword()));
        User user = userRepository.findByEmail(userAuth.getEmail())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found."));
        if (!user.isVerified()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "User not verified.");
        }

        String jwtToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        AuthToken authToken = new AuthToken();
        authToken.setTokenString(jwtToken);
        authToken.setUser(user);
        authToken.setRevoked(false);
        authTokenRepository.save(authToken);

        userAuth.setId(user.getId());
        userAuth.setPassword(null);
        userAuth.setName(user.getName());
        userAuth.setAuthToken(jwtToken);
        userAuth.setRefreshToken(refreshToken);
        return userAuth;
    }

    public String uploadProfilePicture(String userId, MultipartFile file) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        Optional<Media> optionalMedia = user.getMediaList()
                .stream()
                .filter(m -> m.getCategory() == MediaCategory.PROFILE_PICTURE)
                .findFirst();
        Media media = optionalMedia.orElse(new Media());
        FileUploadDTO fileUploadDTO = fileUtils.uploadImageFile(userId, file, media.getFileName());
        media.setUser(user);
        media.setCategory(MediaCategory.PROFILE_PICTURE);
        media.setUrl(fileUploadDTO.getUrl());
        media.setFileName(fileUploadDTO.getName());
        mediaRepository.save(media);
        return media.getUrl();
    }

    public void deleteProfilePicture(String userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        Optional<Media> optionalMedia = user.getMediaList()
                .stream()
                .filter(m -> m.getCategory() == MediaCategory.PROFILE_PICTURE)
                .findFirst();
        if (optionalMedia.isEmpty()) {
            return;
        }
        Media media = optionalMedia.get();
        fileUtils.deleteFileFromStorage(media.getFileName());
        mediaRepository.delete(media);
    }
}
