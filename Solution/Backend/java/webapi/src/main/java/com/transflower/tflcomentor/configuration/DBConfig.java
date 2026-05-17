package com.transflower.tflcomentor.configuration;
 
import java.sql.Connection;
import java.sql.DriverManager;
 
import org.springframework.context.annotation.Configuration;
 
@Configuration
public class DBConfig {
 
<<<<<<< HEAD:Solution/java/webapi/src/main/java/com/transflower/tflcomentor/configuration/DBConfig.java
    private static final String URL ="jdbc:mysql://localhost:3306/tflcomentor_db";
=======
    private static final String URL = "jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
>>>>>>> be2383c30a022673790a9dffb27d1d931403249a:Solution/Backend/java/webapi/src/main/java/com/transflower/tflcomentor/configuration/DBConfig.java
    private static final String USERNAME = "root";
    private static final String PASSWORD = "2991";
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
 