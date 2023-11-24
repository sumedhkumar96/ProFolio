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

@Configuration
public class StorageConfiguration {
    @Value("${gcp.config.file}")
    private String gcpConfigFile;
    @Value("${gcp.project.id}")
    private String gcpProjectId;
    @Value("${gcp.bucket.id}")
    private String gcpBucketId;

    @Bean
    public GoogleCredentials getGoogleCredentials() throws IOException {
        InputStream inputStream = new ClassPathResource(gcpConfigFile).getInputStream();
        return GoogleCredentials.fromStream(inputStream);
    }

    @Bean
    public Storage getStorage(GoogleCredentials googleCredentials) {
        return StorageOptions.newBuilder()
                .setProjectId(gcpProjectId)
                .setCredentials(googleCredentials)
                .build()
                .getService();
    }

    @Bean
    public Bucket getBucket(Storage storage) {
        return storage.get(gcpBucketId);
    }

}
