package com.transflower.tflassessment.repositories;

import java.io.InputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.*;
@Repository
public class AuthRepositoryImpl implements AuthRepository {
  private static Connection connection;
  static {
        try {
            Properties props = new Properties();
            try (InputStream input = AuthRepositoryImpl.class.getClassLoader().getResourceAsStream("application.properties")) {
                props.load(input);
            }

            String url = props.getProperty("db.url");
            String user = props.getProperty("db.username");
            String encPass = props.getProperty("db.password"); // this
            AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
            textEncryptor.setPassword("TransFlower"); // your secret key
            String pass = textEncryptor.decrypt(encPass.replace("ENC(", "").replace(")", ""));

            String driver = props.getProperty("db.driver");

            Class.forName(driver);
            connection = DriverManager.getConnection(url, user, pass);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error in connecting to database");
        }
    }
  
  @Override
  public User getUserWithRolesByEmail(String email, String password) {
    User user = new User();
    List<UserRole> userRoles=new ArrayList<UserRole>();
    try {
      String selectQuery = "SELECT u.id AS UserId, u.aadharid, u.firstname, u.lastname, u.email, u.contactnumber, u.password, "
          +
          "ur.id AS UserRoleId, ur.roleid, r.name AS RoleName, r.lob " +
          "FROM users u " +
          "LEFT JOIN userroles ur ON u.id = ur.userid " +
          "LEFT JOIN roles r ON ur.roleid = r.id " +
          "WHERE u.email = '" + email + "'";

     Statement statement = connection.createStatement();
      ResultSet resultSet = statement.executeQuery(selectQuery);
    
      while (resultSet.next()) {
        user.setId(resultSet.getInt("UserId"));
        user.setAadharId(resultSet.getString("aadharid"));
        user.setFirstName(resultSet.getString("firstName"));
        user.setLastname(resultSet.getString("lastName"));
        user.setEmail(resultSet.getString("email"));
        user.setContactNumber(resultSet.getString("contactnumber"));
        user.setPassword(resultSet.getString("password"));

        UserRole userRole = new UserRole();
        userRole.setId(resultSet.getInt("UserRoleId"));
        userRole.setUserId(resultSet.getInt("UserId"));
        userRole.setRoleId(resultSet.getInt("roleid"));

        
        Role role=new Role(resultSet.getInt("roleid"), resultSet.getString("RoleName"), resultSet.getString("lob"));

        userRole.setRole(role);

        userRoles.add(userRole);
       

        // ResultSetMetaData columnResult = resultSet.getMetaData();
        //     int columnCount = columnResult.getColumnCount();
        //     for(int i = 1; i <= columnCount; i++) {
        //         System.out.printf("%-20s",columnResult.getColumnName(i));
        //     }
        //     System.out.println();
        //     while (resultSet.next()) {
        //         for (int coloum = 1; coloum <= columnCount; coloum++) {
        //             System.out.printf("%-20s",resultSet.getString(coloum));
        //         }
        //         System.out.println();
        //     }

      }

    } catch (Exception e) {
      System.out.println(e);
    }
    user.addUserRole(userRoles);
       

    return user;
  }


}

  
