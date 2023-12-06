package com.profolio.portfoliobuilder.models.constants;

import lombok.Getter;
import lombok.Setter;

/**
 * The type General constants.
 */
@Getter
@Setter
public class GeneralConstants {
    private GeneralConstants() {

    }

    /**
     * The constant UNEXPECTED_ERROR_MESSAGE.
     */
    public static final String UNEXPECTED_ERROR_MESSAGE = "Unexpected error occurred";
    /**
     * The constant TRY_AGAIN_REMEDIATION_MESSAGE.
     */
    public static final String TRY_AGAIN_REMEDIATION_MESSAGE = "Try again";
    /**
     * The constant USER_NOT_FOUND.
     */
    public static final String USER_NOT_FOUND = "User not found";
    /**
     * The constant TRY_AGAIN_WITH_VALID_USER.
     */
    public static final String TRY_AGAIN_WITH_VALID_USER = "Try again with valid user";
    /**
     * The constant TRY_AGAIN_WITH_VALID_DATA.
     */
    public static final String TRY_AGAIN_WITH_VALID_DATA = "Try again with valid data";
}
