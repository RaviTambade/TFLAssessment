package com.transflower.tflcomentor.configuration;

import java.sql.Connection;
import java.sql.DriverManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

@Configuration
@PropertySource("classpath:application.properties")
public class DBConfig {

    private static String URL;
    private static String USERNAME;
    private static String PASSWORD;
    private static String DRIVER;

    @Autowired
    public DBConfig(Environment environment) {
        URL = environment.getProperty("spring.datasource.url");
        USERNAME = environment.getProperty("spring.datasource.username");
        PASSWORD = environment.getProperty("spring.datasource.password");
        DRIVER = environment.getProperty("spring.datasource.driver-class-name");
    }

    public static Connection getConnection() {
        try {
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (Exception e) {
            throw new IllegalStateException("Unable to connect to the database using URL=" + URL, e);
        }
    }
}
