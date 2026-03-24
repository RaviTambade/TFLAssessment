package com.transflower.tflcomentor.Backend.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/concepts/**")
                .allowedOrigins("http://localhost:8080") // React frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}