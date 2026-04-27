package com.transflower.tflcomentor.configuration;

import java.sql.Connection;
import java.sql.DriverManager;

import org.springframework.context.annotation.Configuration;

@Configuration
public class DBConfig {

    private static final String URL = "jdbc:mysql://localhost:3306/tflcomentor_db";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "password";
    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";

    public static Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName(DRIVER);
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return connection;
    }
}