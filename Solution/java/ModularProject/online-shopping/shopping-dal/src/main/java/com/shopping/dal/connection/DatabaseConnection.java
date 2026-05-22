package com.shopping.dal.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    private static final String URL      = "jdbc:mysql://localhost:3306/online_shopping";
    private static final String USER     = "root";
    private static final String PASSWORD = "password";

    private static DatabaseConnection instance;
    private Connection connection;

    private DatabaseConnection() throws SQLException {
        this.connection = DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // Singleton — one connection for the app
    public static DatabaseConnection getInstance() throws SQLException {
        if (instance == null || instance.connection.isClosed()) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    public Connection getConnection() {
        return connection;
    }
}