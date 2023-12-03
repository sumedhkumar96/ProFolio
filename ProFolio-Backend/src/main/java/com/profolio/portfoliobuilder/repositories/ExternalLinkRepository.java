package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.ExternalLink;
import com.profolio.portfoliobuilder.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalLinkRepository extends JpaRepository<ExternalLink, String> {

    public void deleteAllByUser(User user);
    
}
