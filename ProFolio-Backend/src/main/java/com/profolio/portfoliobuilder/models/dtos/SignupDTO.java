package com.profolio.portfoliobuilder.models.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class SignupDTO extends LoginDTO {
    @NotBlank(message = "Name cannot be blank")
    protected String name;
}
