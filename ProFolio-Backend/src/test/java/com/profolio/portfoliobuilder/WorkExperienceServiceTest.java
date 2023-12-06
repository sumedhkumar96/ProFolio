package com.profolio.portfoliobuilder;

import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.models.entities.WorkExperience;
import com.profolio.portfoliobuilder.repositories.WorkExperienceRepository;
import com.profolio.portfoliobuilder.services.WorkExperienceService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@SpringBootTest
public class WorkExperienceServiceTest {

    @Mock
    private WorkExperienceRepository workExperienceRepository;

    @InjectMocks
    private WorkExperienceService workExperienceService;

    @Test
    public void testModifyWorkExperienceList_EmptyNewWorkExperiences() {
        User user = new User();
        user.setId("user123");

        // Create a set with existing work experiences
        Set<WorkExperience> existingWorkExperiences = new HashSet<>();
        WorkExperience workExperience = new WorkExperience();
        workExperience.setId("id");
        existingWorkExperiences.add(workExperience);
        user.setWorkExperienceList(existingWorkExperiences);

        // Call the method with an empty set of new work experiences
        Set<WorkExperience> result = workExperienceService.modifyWorkExperienceList(user, Collections.emptySet());

        // Verify that deleteAllByUser() was called and result matches the existing set of experiences
        verify(workExperienceRepository, times(1)).deleteAllByUser(user);
        assertEquals(0, result.size());
    }

    @Test
    public void testModifyWorkExperienceList_NullExistingWorkExperiences() {
        User user = new User();
        user.setId("user123");

        // Call the method with null existing work experiences
        Set<WorkExperience> result = workExperienceService.modifyWorkExperienceList(user, new HashSet<>());

        // Verify that deleteAllByUser() was called and result is an empty set
        verify(workExperienceRepository, times(1)).deleteAllByUser(user);
        assertTrue(result.isEmpty());
    }

}
