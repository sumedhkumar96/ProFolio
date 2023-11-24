package com.profolio.portfoliobuilder.controllers;

import com.profolio.portfoliobuilder.models.UserAuth;
import com.profolio.portfoliobuilder.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<UserAuth> signup(@RequestBody UserAuth userAuth) {
        return new ResponseEntity<>(userService.signup(userAuth), HttpStatus.CREATED);
    }

    @GetMapping("/verify-signup-otp")
    public ResponseEntity<Boolean> verifySignupOtp(@RequestParam("userId") String userId, @RequestParam("otp") String otp) {
        return new ResponseEntity<>(userService.verifySignupOtp(userId, otp), HttpStatus.OK);
    }

    @GetMapping("/resend-signup-otp")
    public ResponseEntity<Boolean> resendSignupOtp(@RequestParam("userId") String userId) {
        userService.resendSignupOtp(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<UserAuth> login(@RequestBody UserAuth userAuth) {
        return new ResponseEntity<>(userService.login(userAuth), HttpStatus.OK);
    }

    @PostMapping(value = "/{id}/profile-picture", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadProfilePicture(@PathVariable("id") String userId, @RequestParam MultipartFile file) {
        return new ResponseEntity<>(userService.uploadProfilePicture(userId, file), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}/profile-picture")
    public ResponseEntity<HttpStatus> deleteProfilePicture(@PathVariable("id") String userId) {
        userService.deleteProfilePicture(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
