package com.profolio.portfoliobuilder;

import com.profolio.portfoliobuilder.models.entities.Education;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.EducationRepository;
import com.profolio.portfoliobuilder.services.EducationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class EducationServiceTest {

    @Autowired
    private EducationService educationService;

    @MockBean
    private EducationRepository educationRepository;

    @Test
    public void testModifyEducationList() {
        User user = new User(); // Create a mock User object if needed
        Education education = new Education(); // Create a mock Education object
        Set<Education> educationList = new HashSet<>(Collections.singletonList(education));

        // Mock behavior of educationRepository.deleteAllByUser
        doNothing().when(educationRepository).deleteAllByUser(user);

        // Mock behavior of educationRepository.saveAll
        when(educationRepository.saveAll(educationList)).thenReturn(educationList.stream().toList());

        // Call the method to be tested
        Set<Education> result = educationService.modifyEducationList(user, educationList);

        // Assertions
        assertEquals(educationList, result);
        verify(educationRepository, times(1)).deleteAllByUser(user);
        verify(educationRepository, times(1)).saveAll(educationList);
    }
}
