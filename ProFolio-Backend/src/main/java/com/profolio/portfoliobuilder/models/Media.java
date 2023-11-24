package com.profolio.portfoliobuilder.models;

import com.profolio.portfoliobuilder.models.enums.MediaCategory;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Data
@Entity(name = "tbl_media")
public class Media {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private String id;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    private String url;
    private String fileName;
    @Enumerated(EnumType.STRING)
    private MediaCategory category;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
}
