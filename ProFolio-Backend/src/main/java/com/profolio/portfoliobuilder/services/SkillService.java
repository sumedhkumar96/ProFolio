package com.profolio.portfoliobuilder.services;

import com.profolio.portfoliobuilder.models.entities.Skill;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.SkillRepository;
import com.profolio.portfoliobuilder.repositories.UserSkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private UserSkillRepository userSkillRepository;

    public Set<Skill> modifySkillList(User user, Set<Skill> newSkills) {
        Set<Skill> existingSkills = user.getSkills();

        if (newSkills != null && !newSkills.isEmpty()) {
            Set<Skill> updatedSkills = new HashSet<>();
            for (Skill skill : newSkills) {
                Optional<Skill> optionalSkill = skillRepository.findByName(skill.getName());
                if (optionalSkill.isPresent()) {
                    updatedSkills.add(optionalSkill.get());
                } else {
                    Skill savedSkill = skillRepository.save(skill);
                    updatedSkills.add(savedSkill);
                }
            }
            existingSkills.clear();
            existingSkills.addAll(updatedSkills);
        }
        
        return existingSkills;
    }
}
