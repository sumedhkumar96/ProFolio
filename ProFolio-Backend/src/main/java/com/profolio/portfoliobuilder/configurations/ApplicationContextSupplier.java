package com.profolio.portfoliobuilder.configurations;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * The type Application context supplier.
 */
@Component
public class ApplicationContextSupplier implements ApplicationContextAware {

    private static ApplicationContext context;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) {
        context = applicationContext;
    }

    /**
     * Gets context.
     *
     * @return the context
     */
    public static ApplicationContext getContext() {
        return context;
    }
}