package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.models.entities.UserSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface User skill repository.
 */
@Repository
public interface UserSkillRepository extends JpaRepository<UserSkill, String> {

    /**
     * Delete all by user.
     *
     * @param user the user
     */
    public void deleteAllByUser(User user);

}
