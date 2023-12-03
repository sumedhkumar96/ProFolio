package com.profolio.portfoliobuilder.models.constants;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GeneralConstants {
    private GeneralConstants() {

    }

    public static final String UNEXPECTED_ERROR_MESSAGE = "Unexpected error occurred";
    public static final String TRY_AGAIN_REMEDIATION_MESSAGE = "Try again";
    public static final String USER_NOT_FOUND = "User not found";
    public static final String TRY_AGAIN_WITH_VALID_USER = "Try again with valid user";
    public static final String TRY_AGAIN_WITH_VALID_DATA = "Try again with valid data";
}
