package com.profolio.portfoliobuilder.exceptions;

import com.profolio.portfoliobuilder.models.constants.GeneralConstants;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;

/**
 * The type Custom exception.
 */
@Getter
public class CustomException extends RuntimeException {

    private final String remediation;
    private final HttpStatus httpStatus;

    /**
     * Instantiates a new Custom exception.
     */
    public CustomException() {
        super(GeneralConstants.UNEXPECTED_ERROR_MESSAGE);
        this.remediation = GeneralConstants.TRY_AGAIN_REMEDIATION_MESSAGE;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    /**
     * Instantiates a new Custom exception.
     *
     * @param errorMessage the error message
     * @param remediation  the remediation
     * @param httpStatus   the http status
     */
    public CustomException(@NonNull String errorMessage, @NonNull String remediation, @NonNull HttpStatus httpStatus) {
        super(errorMessage);
        this.remediation = remediation;
        this.httpStatus = httpStatus;
    }
}
