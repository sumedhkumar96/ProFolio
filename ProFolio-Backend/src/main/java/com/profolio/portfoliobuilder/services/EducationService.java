package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.Education;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.EducationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class EducationService {

    @Autowired
    private EducationRepository educationRepository;

    @Transactional
    public Set<Education> modifyEducationList(User user, Set<Education> educationList) {
        educationRepository.deleteAllByUser(user);
        if (educationList == null || educationList.isEmpty()) {
            return new HashSet<>();
        }
        user.setEducationList(null);
        educationList.forEach(e -> e.setUser(user));
        return new HashSet<>(educationRepository.saveAll(educationList));
    }

}
