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

@RestController
@RequestMapping("/api/user")
@Validated
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<SignupDTO> signup(@NotNull @Valid @RequestBody SignupDTO signupDTO) {
        return new ResponseEntity<>(userService.signup(signupDTO), HttpStatus.CREATED);
    }

    @GetMapping("/verify-signup-otp")
    public ResponseEntity<Boolean> verifySignupOtp(@NotBlank @Valid @RequestParam("userId") String userId,
                                                   @NotBlank @Valid @RequestParam("otp") String otp) {
        return new ResponseEntity<>(userService.verifySignupOtp(userId, otp), HttpStatus.OK);
    }

    @GetMapping("/resend-signup-otp")
    public ResponseEntity<String> resendSignupOtp(@NotBlank @Valid @RequestParam("userId") String userId) {
        return new ResponseEntity<>(userService.resendSignupOtp(userId), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginDTO> login(@NotNull @Valid @RequestBody LoginDTO loginDTO) {
        return new ResponseEntity<>(userService.login(loginDTO), HttpStatus.OK);
    }

    @PostMapping(value = "/{id}/profile-picture", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadProfilePicture(@NotNull @Valid @PathVariable("id") String userId,
                                                       @NotNull @Valid @RequestParam MultipartFile file) {
        return new ResponseEntity<>(userService.uploadProfilePicture(userId, file), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}/profile-picture")
    public ResponseEntity<HttpStatus> deleteProfilePicture(@NotNull @Valid @PathVariable("id") String userId) {
        userService.deleteProfilePicture(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserProfile(@NotNull @Valid @PathVariable("id") String userId) {
        return new ResponseEntity<>(userService.getUserProfile(userId), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> modifyUserProfile(@NotNull @Valid @PathVariable("id") String userId,
                                                  @NotNull @Valid @RequestBody User user) {
        return new ResponseEntity<>(userService.modifyUserProfile(userId, user), HttpStatus.ACCEPTED);
    }
    
}
