import com.profolio.portfoliobuilder.models.entities.Certification;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.CertificationRepository;
import com.profolio.portfoliobuilder.services.CertificationService;
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
public class CertificationServiceTest {

    @Autowired
    private CertificationService certificationService;

    @MockBean
    private CertificationRepository certificationRepository;

    @Test
    public void testModifyCertifications() {
        User user = new User(); // Create a mock User object if needed
        Certification certification = new Certification(); // Create a mock Certification object
        Set<Certification> certifications = new HashSet<>(Collections.singletonList(certification));

        // Mock behavior of certificationRepository.deleteAllByUser
        doNothing().when(certificationRepository).deleteAllByUser(user);

        // Mock behavior of certificationRepository.saveAll
        when(certificationRepository.saveAll(certifications)).thenReturn(certifications);

        // Call the method to be tested
        Set<Certification> result = certificationService.modifyCertifications(user, certifications);

        // Assertions
        assertEquals(certifications, result);
        verify(certificationRepository, times(1)).deleteAllByUser(user);
        verify(certificationRepository, times(1)).saveAll(certifications);
    }
}
