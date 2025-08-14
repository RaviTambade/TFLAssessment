package com.transflower.tflassessment.demo.repositories;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.*;

public class AuthRepositoryImpl implements AuthRepository {
  Connection connection;
  Statement statement;

  public AuthRepositoryImpl() {
    try {
      String URL = "jdbc:mysql://localhost:3306/assessmentdb";
      String UserName = "root";
      String Password = "password";
      // Class.forName("com.mysql.cj.jdbc.Driver");
      // System.out.println("Driver Loaded");
      connection = DriverManager.getConnection(URL, UserName, Password);
      System.out.println("Connection Established");
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("Connection Failed");
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

      statement = connection.createStatement();
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
        userRole.setid(resultSet.getInt("UserRoleId"));
        userRole.setuserId(resultSet.getInt("UserId"));
        userRole.setroleId(resultSet.getInt("roleid"));

        
        Role role=new Role(resultSet.getInt("roleid"), resultSet.getString("RoleName"), resultSet.getString("lob"));

        userRole.setrole(role);

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

  public static void main(String [] args)
   {
//      // ================= AuthRepository =================
         AuthRepositoryImpl authRepo = new AuthRepositoryImpl();
         User user = authRepo.getUserWithRolesByEmail("kajal.ghule@example.com", "12345");
         for (UserRole role : user.getUserRoles()) {
         System.out.println("User Email: " + role.getEmail() + " User Password: " + role.getPassword());
      }
    }
}
