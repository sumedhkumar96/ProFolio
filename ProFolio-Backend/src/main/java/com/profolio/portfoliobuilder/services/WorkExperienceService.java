package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.models.entities.WorkExperience;
import com.profolio.portfoliobuilder.repositories.WorkExperienceRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class WorkExperienceService {

    @Autowired
    private WorkExperienceRepository workExperienceRepository;

    @Transactional
    public Set<WorkExperience> modifyWorkExperienceList(User user, Set<WorkExperience> workExperienceList) {
        workExperienceRepository.deleteAllByUser(user);
        if (workExperienceList == null || workExperienceList.isEmpty()) {
            return new HashSet<>();
        }
        user.setWorkExperienceList(null);
        workExperienceList.forEach(w -> w.setUser(user));
        return new HashSet<>(workExperienceRepository.saveAll(workExperienceList));
    }
}
