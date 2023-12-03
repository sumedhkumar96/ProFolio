package com.profolio.portfoliobuilder.models.entities.keys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Setter
@Getter
@Embeddable
public class UserSkillId implements Serializable {

    @Column(name = "user_id")
    private String userId;

    @Column(name = "skill_id")
    private String skillId;

}
