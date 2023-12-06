package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Certification;
import com.profolio.portfoliobuilder.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Certification repository.
 */
@Repository
public interface CertificationRepository extends JpaRepository<Certification, String> {

    /**
     * Delete all by user.
     *
     * @param user the user
     */
    public void deleteAllByUser(User user);

}
