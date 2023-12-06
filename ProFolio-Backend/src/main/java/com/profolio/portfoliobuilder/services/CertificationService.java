package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.Certification;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.CertificationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * The type Certification service.
 */
@Service
public class CertificationService {

    @Autowired
    private CertificationRepository certificationRepository;

    /**
     * Modify certifications set.
     *
     * @param user           the user
     * @param certifications the certifications
     * @return the set
     */
    @Transactional
    public Set<Certification> modifyCertifications(User user, Set<Certification> certifications) {
        certificationRepository.deleteAllByUser(user);
        if (certifications == null || certifications.isEmpty()) {
            return new HashSet<>();
        }
        user.setCertifications(null);
        certifications.forEach(c -> c.setUser(user));
        return new HashSet<>(certificationRepository.saveAll(certifications));
    }
}
