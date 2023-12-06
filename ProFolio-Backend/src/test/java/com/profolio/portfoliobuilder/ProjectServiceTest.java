package com.profolio.portfoliobuilder;

import com.profolio.portfoliobuilder.models.entities.Project;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.ProjectRepository;
import com.profolio.portfoliobuilder.services.ProjectService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ProjectServiceTest {

    @Spy
    @InjectMocks
    private ProjectService projectService;

    @Mock
    private ProjectRepository projectRepository;

    @Test
    public void testModifyProjects() {
        User user = new User(); // Create a mock User object if needed
        Project project = new Project(); // Create a mock Project object
        Set<Project> projects = new HashSet<>(Collections.singletonList(project));

        // Mock behavior of projectRepository.deleteAllByUser
        doNothing().when(projectRepository).deleteAllByUser(user);

        // Mock behavior of projectRepository.saveAll
        when(projectRepository.saveAll(projects)).thenReturn(projects.stream().toList());

        // Call the method to be tested
        Set<Project> result = projectService.modifyProjects(user, projects);

        // Assertions
        assertEquals(projects, result);
        verify(projectRepository, times(1)).deleteAllByUser(user);
        verify(projectRepository, times(1)).saveAll(projects);
    }
}
