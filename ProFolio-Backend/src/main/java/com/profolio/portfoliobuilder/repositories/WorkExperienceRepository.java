package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, String> {
    
}
