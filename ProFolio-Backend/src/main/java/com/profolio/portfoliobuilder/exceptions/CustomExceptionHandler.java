package com.profolio.portfoliobuilder.exceptions;

import com.profolio.portfoliobuilder.models.constants.GeneralConstants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.time.LocalDateTime;
import java.util.Optional;

/**
 * The type Custom exception handler.
 */
@ControllerAdvice
public class CustomExceptionHandler {

    @Value("${spring.servlet.multipart.max-file-size}")
    private String maxFileUploadSize;

    /**
     * Handle custom exception response entity.
     *
     * @param ex the ex
     * @return the response entity
     */
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<CustomErrorResponse> handleCustomException(CustomException ex) {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                ex.getHttpStatus(),
                ex.getMessage(),
                ex.getRemediation(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, ex.getHttpStatus());
    }

    /**
     * Handle exception response entity.
     *
     * @param ex the ex
     * @return the response entity
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<CustomErrorResponse> handleException(Exception ex) {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                ex.getMessage(),
                GeneralConstants.TRY_AGAIN_REMEDIATION_MESSAGE,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Handle internal authentication service exception response entity.
     *
     * @param ex the ex
     * @return the response entity
     */
    @ExceptionHandler(InternalAuthenticationServiceException.class)
    public ResponseEntity<CustomErrorResponse> handleInternalAuthenticationServiceException(InternalAuthenticationServiceException ex) {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                HttpStatus.UNAUTHORIZED,
                ex.getMessage(),
                "Authentication required",
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }

    /**
     * Handle bad credentials exception response entity.
     *
     * @param ex the ex
     * @return the response entity
     */
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<CustomErrorResponse> handleBadCredentialsException(BadCredentialsException ex) {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                HttpStatus.UNAUTHORIZED,
                "Incorrect password",
                "Try again with valid credentials",
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }

    /**
     * Handle upload file size exception response entity.
     *
     * @param ex the ex
     * @return the response entity
     */
    @ExceptionHandler({MaxUploadSizeExceededException.class})
    public ResponseEntity<CustomErrorResponse> handleUploadFileSizeException(Exception ex) {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                HttpStatus.BAD_REQUEST,
                ex.getMessage(),
                "The upload file size has to be less than " + maxFileUploadSize,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Handle validation exception response entity.
     *
     * @param ex the ex
     * @return the response entity
     */
    @ExceptionHandler({BindException.class})
    public ResponseEntity<CustomErrorResponse> handleValidationException(BindException ex) {
        CustomErrorResponse errorResponse = new CustomErrorResponse(
                HttpStatus.BAD_REQUEST,
                Optional.ofNullable(ex.getFieldError().getDefaultMessage()).orElse("Unknown error occurred."),
                GeneralConstants.TRY_AGAIN_WITH_VALID_DATA,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
