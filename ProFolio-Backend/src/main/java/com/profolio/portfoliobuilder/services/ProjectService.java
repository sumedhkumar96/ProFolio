package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.Project;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.ProjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Transactional
    public Set<Project> modifyProjects(User user, Set<Project> projects) {
        projectRepository.deleteAllByUser(user);
        if (projects == null || projects.isEmpty()) {
            return new HashSet<>();
        }
        user.setProjects(null);
        projects.forEach(p -> p.setUser(user));
        return new HashSet<>(projectRepository.saveAll(projects));
    }
}