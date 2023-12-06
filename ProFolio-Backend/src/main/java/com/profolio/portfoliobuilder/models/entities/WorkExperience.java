package com.profolio.portfoliobuilder.models.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * The type Work experience.
 */
@Getter
@Setter
@Entity(name = "tbl_work_experience")
public class WorkExperience {

    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private String id;

    @JsonIgnore
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @JsonIgnore
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @NotBlank(message = "Organization name cannot be blank")
    private String organizationName;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "Work experience from date cannot be blank")
    private LocalDate fromDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate toDate;

    private String description;

    @NotBlank(message = "Role cannot be blank")
    private String role;

    @NotBlank(message = "Work location cannot be blank")
    private String location;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private User user;
}
