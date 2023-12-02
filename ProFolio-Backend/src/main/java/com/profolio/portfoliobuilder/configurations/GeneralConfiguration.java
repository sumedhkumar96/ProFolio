package com.profolio.portfoliobuilder.configurations;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
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
        objectMapper.setDefaultPropertyInclusion(JsonInclude.Include.NON_NULL);
        return objectMapper;
    }

}


