package com.profolio.portfoliobuilder;

import com.profolio.portfoliobuilder.models.entities.ExternalLink;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.ExternalLinkRepository;
import com.profolio.portfoliobuilder.services.ExternalLinkService;
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
public class ExternalLinkServiceTest {

    @Spy
    @InjectMocks
    private ExternalLinkService externalLinkService;

    @Mock
    private ExternalLinkRepository externalLinkRepository;

    @Test
    public void testModifyExternalLinks() {
        User user = new User(); // Create a mock User object if needed
        ExternalLink externalLink = new ExternalLink(); // Create a mock ExternalLink object
        Set<ExternalLink> externalLinks = new HashSet<>(Collections.singletonList(externalLink));

        // Mock behavior of externalLinkRepository.deleteAllByUser
        doNothing().when(externalLinkRepository).deleteAllByUser(user);

        // Mock behavior of externalLinkRepository.saveAll
        when(externalLinkRepository.saveAll(externalLinks)).thenReturn(externalLinks.stream().toList());

        // Call the method to be tested
        Set<ExternalLink> result = externalLinkService.modifyExternalLinks(user, externalLinks);

        // Assertions
        assertEquals(externalLinks, result);
        verify(externalLinkRepository, times(1)).deleteAllByUser(user);
        verify(externalLinkRepository, times(1)).saveAll(externalLinks);
    }
}
