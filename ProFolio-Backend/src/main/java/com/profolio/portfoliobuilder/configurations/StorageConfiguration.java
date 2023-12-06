package com.profolio.portfoliobuilder.configurations;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;

/**
 * The type Storage configuration.
 */
@Configuration
public class StorageConfiguration {
    @Value("${gcp.config.file}")
    private String gcpConfigFile;
    @Value("${gcp.project.id}")
    private String gcpProjectId;
    @Value("${gcp.bucket.id}")
    private String gcpBucketId;

    /**
     * Gets google credentials.
     *
     * @return the google credentials
     * @throws IOException the io exception
     */
    @Bean
    public GoogleCredentials getGoogleCredentials() throws IOException {
        InputStream inputStream = new ClassPathResource(gcpConfigFile).getInputStream();
        return GoogleCredentials.fromStream(inputStream);
    }

    /**
     * Gets storage.
     *
     * @param googleCredentials the google credentials
     * @return the storage
     */
    @Bean
    public Storage getStorage(GoogleCredentials googleCredentials) {
        return StorageOptions.newBuilder()
                .setProjectId(gcpProjectId)
                .setCredentials(googleCredentials)
                .build()
                .getService();
    }

    /**
     * Gets bucket.
     *
     * @param storage the storage
     * @return the bucket
     */
    @Bean
    public Bucket getBucket(Storage storage) {
        return storage.get(gcpBucketId);
    }

}
