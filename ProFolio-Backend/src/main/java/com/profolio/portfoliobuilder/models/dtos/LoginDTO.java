package com.profolio.portfoliobuilder.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {
    protected String id;
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Invalid email format")
    protected String email;
    @NotBlank(message = "Password cannot be blank")
    protected String password;
    protected String authToken;
    protected String refreshToken;
}
