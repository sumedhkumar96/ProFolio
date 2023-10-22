package com.profolio.portfoliobuilder.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Data
@Entity(name = "tbl_user")
public class User implements UserDetails {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private String id;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    @NotBlank
    private String name;
    @NotBlank
    private String email;
    @NotBlank
    private String passwordHash;
    private String profilePictureUrl;
    private String homeLocation;
    private String currentLocation;
    private String about;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Education> educationList;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<WorkExperience> workExperienceList;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "rel_user_skill",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    private List<Skill> skills;
    @Enumerated(EnumType.STRING)
    private Role role;
    private boolean verified;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return passwordHash;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
