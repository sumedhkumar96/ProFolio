package com.profolio.portfoliobuilder.repositories;

import com.profolio.portfoliobuilder.models.entities.Certification;
import com.profolio.portfoliobuilder.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificationRepository extends JpaRepository<Certification, String> {

    public void deleteAllByUser(User user);

}
