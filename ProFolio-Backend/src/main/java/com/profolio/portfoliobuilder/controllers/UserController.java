package com.profolio.portfoliobuilder.controllers;

import com.profolio.portfoliobuilder.models.dtos.LoginDTO;
import com.profolio.portfoliobuilder.models.dtos.SignupDTO;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.services.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * The type User controller.
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
@Validated
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Signup response entity.
     *
     * @param signupDTO the signup dto
     * @return the response entity
     */
    @PostMapping("/signup")
    public ResponseEntity<SignupDTO> signup(@NotNull @Valid @RequestBody SignupDTO signupDTO) {
        return new ResponseEntity<>(userService.signup(signupDTO), HttpStatus.CREATED);
    }

    /**
     * Verify signup otp response entity.
     *
     * @param userId the user id
     * @param otp    the otp
     * @return the response entity
     */
    @GetMapping("/verify-signup-otp")
    public ResponseEntity<Boolean> verifySignupOtp(@NotBlank @Valid @RequestParam("userId") String userId,
                                                   @NotBlank @Valid @RequestParam("otp") String otp) {
        return new ResponseEntity<>(userService.verifySignupOtp(userId, otp), HttpStatus.OK);
    }

    /**
     * Resend signup otp response entity.
     *
     * @param userId the user id
     * @return the response entity
     */
    @GetMapping("/resend-signup-otp")
    public ResponseEntity<String> resendSignupOtp(@NotBlank @Valid @RequestParam("userId") String userId) {
        return new ResponseEntity<>(userService.resendSignupOtp(userId), HttpStatus.OK);
    }

    /**
     * Login response entity.
     *
     * @param loginDTO the login dto
     * @return the response entity
     */
    @PostMapping("/login")
    public ResponseEntity<LoginDTO> login(@NotNull @Valid @RequestBody LoginDTO loginDTO) {
        return new ResponseEntity<>(userService.login(loginDTO), HttpStatus.OK);
    }

    /**
     * Upload profile picture response entity.
     *
     * @param userId the user id
     * @param file   the file
     * @return the response entity
     */
    @PostMapping(value = "/{id}/profile-picture", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadProfilePicture(@NotNull @Valid @PathVariable("id") String userId,
                                                       @NotNull @Valid @RequestParam MultipartFile file) {
        return new ResponseEntity<>(userService.uploadProfilePicture(userId, file), HttpStatus.OK);
    }

    /**
     * Delete profile picture response entity.
     *
     * @param userId the user id
     * @return the response entity
     */
    @DeleteMapping(value = "/{id}/profile-picture")
    public ResponseEntity<HttpStatus> deleteProfilePicture(@NotNull @Valid @PathVariable("id") String userId) {
        userService.deleteProfilePicture(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Gets user profile.
     *
     * @param userId the user id
     * @return the user profile
     */
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserProfile(@NotNull @Valid @PathVariable("id") String userId) {
        return new ResponseEntity<>(userService.getUserProfile(userId), HttpStatus.OK);
    }

    /**
     * Gets public user profile.
     *
     * @param userId the user id
     * @return the public user profile
     */
    @GetMapping("/public/{id}")
    public ResponseEntity<User> getPublicUserProfile(@NotNull @Valid @PathVariable("id") String userId) {
        return new ResponseEntity<>(userService.getUserProfile(userId), HttpStatus.OK);
    }

    /**
     * Modify user profile response entity.
     *
     * @param userId the user id
     * @param user   the user
     * @return the response entity
     */
    @PatchMapping("/{id}")
    public ResponseEntity<User> modifyUserProfile(@NotNull @Valid @PathVariable("id") String userId,
                                                  @NotNull @Valid @RequestBody User user) {
        return new ResponseEntity<>(userService.modifyUserProfile(userId, user), HttpStatus.ACCEPTED);
    }

    /**
     * Modify user template preference response entity.
     *
     * @param userId         the user id
     * @param templateNumber the template number
     * @return the response entity
     */
    @PatchMapping("/{id}/template-preference/{templateNumber}")
    public ResponseEntity<User> modifyUserTemplatePreference(@NotNull @Valid @PathVariable("id") String userId,
                                                             @NotNull @Valid @PathVariable("templateNumber") Integer templateNumber) {
        return new ResponseEntity<>(userService.modifyUserTemplatePreference(userId, templateNumber), HttpStatus.ACCEPTED);
    }

}
