package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, String> {
}
