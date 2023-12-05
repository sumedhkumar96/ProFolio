import com.profolio.portfoliobuilder.models.entities.Project;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.ProjectRepository;
import com.profolio.portfoliobuilder.services.ProjectService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@DataJpaTest
public class ProjectServiceTest {

    @Autowired
    private ProjectService projectService;

    @MockBean
    private ProjectRepository projectRepository;

    @Test
    public void testModifyProjects() {
        User user = new User(); // Create a mock User object if needed
        Project project = new Project(); // Create a mock Project object
        Set<Project> projects = new HashSet<>(Collections.singletonList(project));

        // Mock behavior of projectRepository.deleteAllByUser
        doNothing().when(projectRepository).deleteAllByUser(user);

        // Mock behavior of projectRepository.saveAll
        when(projectRepository.saveAll(projects)).thenReturn(projects);

        // Call the method to be tested
        Set<Project> result = projectService.modifyProjects(user, projects);

        // Assertions
        assertEquals(projects, result);
        verify(projectRepository, times(1)).deleteAllByUser(user);
        verify(projectRepository, times(1)).saveAll(projects);
    }
}
