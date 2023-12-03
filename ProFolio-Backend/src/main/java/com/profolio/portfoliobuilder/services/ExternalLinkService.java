package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.ExternalLink;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.ExternalLinkRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ExternalLinkService {

    @Autowired
    private ExternalLinkRepository externalLinkRepository;

    @Transactional
    public Set<ExternalLink> modifyExternalLinks(User user, Set<ExternalLink> externalLinks) {
        externalLinkRepository.deleteAllByUser(user);
        if (externalLinks == null || externalLinks.isEmpty()) {
            return new HashSet<>();
        }
        user.setExternalLinks(null);
        externalLinks.forEach(e -> e.setUser(user));
        return new HashSet<>(externalLinkRepository.saveAll(externalLinks));
    }
}
