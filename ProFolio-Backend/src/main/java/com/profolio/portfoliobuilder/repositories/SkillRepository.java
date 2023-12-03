package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SkillRepository extends JpaRepository<Skill, String> {

    public Optional<Skill> findByName(String name);

}
