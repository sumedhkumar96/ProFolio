package com.profolio.portfoliobuilder;

import com.profolio.portfoliobuilder.models.entities.Skill;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.SkillRepository;
import com.profolio.portfoliobuilder.repositories.UserSkillRepository;
import com.profolio.portfoliobuilder.services.SkillService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class SkillsServiceTest {

    @Spy
    @InjectMocks
    private SkillService skillService;

    @Mock
    private SkillRepository skillRepository;

    @Mock
    private UserSkillRepository userSkillRepository;

    @Test
    public void testModifySkillList() {
        User user = new User(); // Create a mock User object if needed
        user.setSkills(new HashSet<>());
        Skill skill1 = new Skill(); // Create mock Skill objects
        skill1.setName("Java");
        Skill skill2 = new Skill();
        skill2.setName("Python");
        Set<Skill> newSkills = new HashSet<>();
        newSkills.add(skill1);
        newSkills.add(skill2);

        // Mocking findByName method behavior
        when(skillRepository.findByName("Java")).thenReturn(Optional.of(skill1));
        when(skillRepository.findByName("Python")).thenReturn(Optional.empty());
        when(skillRepository.save(skill2)).thenReturn(skill2);

        // Call the method to be tested
        Set<Skill> result = skillService.modifySkillList(user, newSkills);

        // Assertions
        assertEquals(2, result.size());
        verify(skillRepository, times(1)).findByName("Java");
        verify(skillRepository, times(1)).findByName("Python");
        verify(skillRepository, times(1)).save(skill2);
    }
}
