package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {
}
