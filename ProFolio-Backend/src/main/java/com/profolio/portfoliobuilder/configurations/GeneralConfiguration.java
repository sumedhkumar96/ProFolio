package com.profolio.portfoliobuilder.configurations;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.apache.tika.Tika;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Component
public class GeneralConfiguration {

    @Bean
    public Tika getTika() {
        return new Tika();
    }

    @Bean(destroyMethod = "shutdown")
    public ExecutorService getExecutorService() {
        int availableProcessors = Runtime.getRuntime().availableProcessors();
        int idealThreadCount = availableProcessors + 1;
        return Executors.newFixedThreadPool(idealThreadCount);
    }

    @Bean
    public ObjectMapper getObjectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        return objectMapper;
    }

}


