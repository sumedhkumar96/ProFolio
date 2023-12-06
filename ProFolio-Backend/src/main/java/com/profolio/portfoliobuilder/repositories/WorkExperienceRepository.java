package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.models.entities.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Work experience repository.
 */
@Repository
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, String> {

    /**
     * Delete all by user.
     *
     * @param user the user
     */
    public void deleteAllByUser(User user);

}
