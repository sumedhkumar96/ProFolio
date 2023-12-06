package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.Education;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.EducationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * The type Education service.
 */
@Service
public class EducationService {

    @Autowired
    private EducationRepository educationRepository;

    /**
     * Modify education list set.
     *
     * @param user          the user
     * @param educationList the education list
     * @return the set
     */
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
