package com.profolio.portfoliobuilder.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Data
@Entity(name = "tbl_auth_token")
public class AuthToken {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private String id;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    private String tokenString;
    private boolean revoked;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
}
