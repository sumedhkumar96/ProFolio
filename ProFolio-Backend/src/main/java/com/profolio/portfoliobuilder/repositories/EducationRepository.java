package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Education, String> {
}
