package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Education;
import com.profolio.portfoliobuilder.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Education repository.
 */
@Repository
public interface EducationRepository extends JpaRepository<Education, String> {

    /**
     * Delete all by user.
     *
     * @param user the user
     */
    public void deleteAllByUser(User user);

}
