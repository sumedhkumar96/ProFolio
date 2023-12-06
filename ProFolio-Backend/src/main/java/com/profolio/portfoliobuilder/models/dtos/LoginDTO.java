package com.profolio.portfoliobuilder.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 * The type Login dto.
 */
@Getter
@Setter
public class LoginDTO {
    /**
     * The Id.
     */
    protected String id;
    /**
     * The Email.
     */
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Invalid email format")
    protected String email;
    /**
     * The Password.
     */
    @NotBlank(message = "Password cannot be blank")
    protected String password;
    /**
     * The Auth token.
     */
    protected String authToken;
    /**
     * The Refresh token.
     */
    protected String refreshToken;
}
