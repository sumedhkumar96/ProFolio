package com.profolio.portfoliobuilder.exceptions;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.profolio.portfoliobuilder.configurations.ApplicationContextSupplier;
import lombok.Getter;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Getter
public class CustomErrorResponse {

    private final HttpStatus status;
    private final String message;
    private final String remediation;
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("date")
    private final LocalDateTime timestamp;

    public CustomErrorResponse(HttpStatus status, String message, String remediation, LocalDateTime timestamp) {
        this.status = status;
        this.message = message;
        this.remediation = remediation;
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        try {
            ApplicationContext applicationContext = ApplicationContextSupplier.getContext();
            ObjectMapper objectMapper = applicationContext.getBean(ObjectMapper.class);
            return objectMapper.writeValueAsString(this);
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }
}
