package com.transflower.tflassessment.demo.repositories;

import java.sql.*;

import com.transflower.tflassessment.demo.entities.*;

public class AuthRepositoryImpl implements AuthRepository {
  Connection connection;
  Statement statement;

  public AuthRepositoryImpl() {
    try {
      String URL = "jdbc:mysql://localhost:3306/assessmentdb";
      String UserName = "root";
      String Password = "password";
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
    try {
      String selectQuery = "SELECT u.id AS UserId, u.aadharid, u.firstname, u.lastname, u.email, u.contactnumber, u.password, "
          +
          "ur.id AS UserRoleId, ur.roleid, r.name AS RoleName, r.lob " +
          "FROM users u " +
          "LEFT JOIN userroles ur ON u.id = ur.userid " +
          "LEFT JOIN roles r ON ur.roleid = r.id " +
          "WHERE u.email = ?";

      statement = connection.createStatement();
      ResultSet resultSet = statement.executeQuery(selectQuery);

      while (resultSet.next()) {
        user.setId(resultSet.getInt("UserId"));
        user.setAadharId(resultSet.getString("aadharid"));
        user.setFirstName(resultSet.getString("name").split(" ")[0]);
        user.setFirstName(resultSet.getString("name").split(" ")[1]);
        user.setEmail(resultSet.getString("email"));
        user.setContactNumber(resultSet.getString("contcatnumber"));
        user.setPassword(resultSet.getString("password"));

        UserRole userRole = new UserRole();
        userRole.setid(resultSet.getInt("UserRoleId"));
        userRole.setroleId(resultSet.getInt("roleid"));
        userRole.setRoleName(resultSet.getString("RoleName"));
        userRole.setLob(resultSet.getString("lob"));

        user.addUserRole(userRole);
      }

    } catch (Exception e) {
      System.out.println(e);
    }

    return user;
  }
}
