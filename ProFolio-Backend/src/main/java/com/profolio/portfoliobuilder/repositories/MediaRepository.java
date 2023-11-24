package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository extends JpaRepository<Media, String> {
}
