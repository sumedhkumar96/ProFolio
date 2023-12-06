package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Media repository.
 */
@Repository
public interface MediaRepository extends JpaRepository<Media, String> {
}
