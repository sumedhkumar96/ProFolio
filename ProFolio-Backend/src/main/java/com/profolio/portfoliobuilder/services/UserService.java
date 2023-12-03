package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.auth.JwtService;
import com.profolio.portfoliobuilder.auth.OneTimePasswordService;
import com.profolio.portfoliobuilder.exceptions.CustomException;
import com.profolio.portfoliobuilder.models.constants.GeneralConstants;
import com.profolio.portfoliobuilder.models.dtos.FileUploadDTO;
import com.profolio.portfoliobuilder.models.dtos.LoginDTO;
import com.profolio.portfoliobuilder.models.dtos.SignupDTO;
import com.profolio.portfoliobuilder.models.entities.AuthToken;
import com.profolio.portfoliobuilder.models.entities.Media;
import com.profolio.portfoliobuilder.models.entities.OneTimePassword;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.models.enums.MediaCategory;
import com.profolio.portfoliobuilder.models.enums.Role;
import com.profolio.portfoliobuilder.repositories.AuthTokenRepository;
import com.profolio.portfoliobuilder.repositories.MediaRepository;
import com.profolio.portfoliobuilder.repositories.OneTimePasswordRepository;
import com.profolio.portfoliobuilder.repositories.UserRepository;
import com.profolio.portfoliobuilder.utils.EmailUtil;
import com.profolio.portfoliobuilder.utils.FileUtil;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
    private EmailUtil emailUtil;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthTokenRepository authTokenRepository;
    @Autowired
    private MediaRepository mediaRepository;
    @Autowired
    private FileUtil fileUtil;
    @Autowired
    private EducationService educationService;
    @Autowired
    private WorkExperienceService workExperienceService;
    @Autowired
    private SkillService skillService;
    @Autowired
    private ExternalLinkService externalLinkService;
    @Autowired
    private CertificationService certificationService;
    @Autowired
    private ProjectService projectService;

    @Transactional
    public SignupDTO signup(SignupDTO signupDTO) {
        Optional<User> optionalUser = userRepository.findByEmail(signupDTO.getEmail());
        if (optionalUser.isPresent()) {
            throw new CustomException(
                    "User with provided email already exists",
                    "Try again with a new email id or login with the existing email id",
                    HttpStatus.CONFLICT);
        }
        User user = new User();
        user.setEmail(signupDTO.getEmail());
        user.setName(signupDTO.getName());
        user.setPasswordHash(passwordEncoder.encode(signupDTO.getPassword()));
        user.setRole(Role.USER);
        user.setTemplatePreference(1);
        user = userRepository.save(user);
        OneTimePassword oneTimePassword = oneTimePasswordService.createOneTimePassword(user);
        emailUtil.sendSignupOtp(user.getEmail(), oneTimePassword.getOtpString());
        signupDTO.setPassword(null);
        signupDTO.setId(user.getId());
        return signupDTO;
    }

    public Boolean verifySignupOtp(String userId, String otp) {
        User user = getUserById(userId);
        boolean isVerified = oneTimePasswordService.isOtpValid(otp, user);
        user.setVerified(isVerified);
        userRepository.save(user);
        return isVerified;
    }

    public String resendSignupOtp(String userId) {
        User user = getUserById(userId);
        if (user.isVerified()) {
            return "User already verified";
        }
        OneTimePassword oneTimePassword = oneTimePasswordService.createOneTimePassword(user);
        emailUtil.sendSignupOtp(user.getEmail(), oneTimePassword.getOtpString());
        return "OTP sent to the registered email ID";
    }

    public LoginDTO login(LoginDTO loginDTO) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
        User user = getUserByEmailId(loginDTO.getEmail());
        if (!user.isVerified()) {
            throw new CustomException(
                    "User not verified",
                    "Verify using the OTP",
                    HttpStatus.FORBIDDEN);
        }

        String jwtToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        AuthToken authToken = new AuthToken();
        authToken.setTokenString(jwtToken);
        authToken.setUser(user);
        authToken.setRevoked(false);
        authTokenRepository.save(authToken);

        loginDTO.setId(user.getId());
        loginDTO.setPassword(null);
        loginDTO.setAuthToken(jwtToken);
        loginDTO.setRefreshToken(refreshToken);
        return loginDTO;
    }

    public String uploadProfilePicture(String userId, MultipartFile file) {
        User user = getUserById(userId);
        Optional<Media> optionalMedia = user.getMediaList()
                .stream()
                .filter(m -> m.getCategory() == MediaCategory.PROFILE_PICTURE)
                .findFirst();
        Media media = optionalMedia.orElse(new Media());
        FileUploadDTO fileUploadDTO = fileUtil.uploadImageFile(userId, file, media.getFileName());
        media.setUser(user);
        media.setCategory(MediaCategory.PROFILE_PICTURE);
        media.setUrl(fileUploadDTO.getUrl());
        media.setFileName(fileUploadDTO.getName());
        mediaRepository.save(media);
        return media.getUrl();
    }

    public void deleteProfilePicture(String userId) {
        User user = getUserById(userId);
        Optional<Media> optionalMedia = user.getMediaList()
                .stream()
                .filter(m -> m.getCategory() == MediaCategory.PROFILE_PICTURE)
                .findFirst();
        if (optionalMedia.isEmpty()) {
            return;
        }
        Media media = optionalMedia.get();
        fileUtil.deleteFileFromStorage(media.getFileName());
        mediaRepository.delete(media);
    }

    public User getUserById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new CustomException(
                        GeneralConstants.USER_NOT_FOUND,
                        GeneralConstants.TRY_AGAIN_WITH_VALID_USER,
                        HttpStatus.NOT_FOUND));
    }

    public User getUserByEmailId(String emailId) {
        return userRepository.findByEmail(emailId)
                .orElseThrow(() -> new CustomException(
                        GeneralConstants.USER_NOT_FOUND,
                        GeneralConstants.TRY_AGAIN_WITH_VALID_USER,
                        HttpStatus.NOT_FOUND));
    }

    public User getUserProfile(String userId) {
        return getUserById(userId);
    }

    public User modifyUserProfile(String userId, User user) {
        User userInDb = getUserById(userId);
        userInDb.setName(user.getName());
        userInDb.setHomeLocation(user.getHomeLocation());
        userInDb.setCurrentLocation(user.getCurrentLocation());
        userInDb.setAbout(user.getAbout());
        userInDb.setPhone(user.getPhone());
        userInDb.setTitle(user.getTitle());
        userInDb.setSkills(skillService.modifySkillList(userInDb, user.getSkills()));
        // saving basic details
        userInDb = userRepository.save(userInDb);

        userInDb.setEducationList(educationService.modifyEducationList(userInDb, user.getEducationList()));
        userInDb.setWorkExperienceList(workExperienceService.modifyWorkExperienceList(userInDb, user.getWorkExperienceList()));
        userInDb.setExternalLinks(externalLinkService.modifyExternalLinks(userInDb, user.getExternalLinks()));
        userInDb.setProjects(projectService.modifyProjects(userInDb, user.getProjects()));
        userInDb.setCertifications(certificationService.modifyCertifications(userInDb, user.getCertifications()));
        return userInDb;
    }

}
