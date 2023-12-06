package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * The interface Skill repository.
 */
@Repository
public interface SkillRepository extends JpaRepository<Skill, String> {

    /**
     * Find by name optional.
     *
     * @param name the name
     * @return the optional
     */
    public Optional<Skill> findByName(String name);

}
