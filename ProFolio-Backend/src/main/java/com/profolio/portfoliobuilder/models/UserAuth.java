package com.profolio.portfoliobuilder.models;

import lombok.Data;

@Data
public class UserAuth {
    private String id;
    private String name;
    private String email;
    private String password;
    private String otp;
    private String authToken;
    private String refreshToken;
}
