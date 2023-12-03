package com.profolio.portfoliobuilder.models.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
public class SignupDTO extends LoginDTO {
    @NotBlank(message = "Name cannot be blank")
    protected String name;
}
