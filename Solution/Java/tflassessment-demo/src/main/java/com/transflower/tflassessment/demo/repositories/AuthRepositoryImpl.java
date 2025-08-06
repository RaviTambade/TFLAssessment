package com.transflower.tflassessment.demo.repositories;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;

import com.transflower.tflassessment.demo.entities.*;


public class AuthRepositoryImpl implements AuthRepository {
  
               private static Connection connection;
               private static Statement statement;
               static{
                try{
                  String URL="jdbc:mysql://localhost:3306/assessmentdb";
                String UserName="root";
                String Password="password";
                connection=DriverManager.getConnection(URL, UserName, Password);
                statement=connection.createStatement();
                System.out.println("Connection Establsihed");

                }
                  catch(Exception e)
                  {
                    System.out.println(e);
                    System.out.println("Connection Failed");
                  }
              }
  
            @Override 
            public User getUserWithRolesByEmail(String email, String password) {
                User user = new User();  
                try{
                String selectQuery = "SELECT u.id as UserId, u.aadharid, CONCAT(u.firstname, ' ', u.lastname) as name, u.email u.contcatnumber, u.password, ur.id as UserRoleId, ur.roleid, r.name as RoleName, r.lob FROM users u LEFT JOIN userroles ur ON u.id = ur.userid EFT JOIN roles r ON ur.roleid = r.id WHERE u.email = Email";
                ResultSet resultSet=statement.executeQuery(selectQuery);
                ResultSetMetaData resultSetMetaData=resultSet.getMetaData();
                int coloumnCount=resultSetMetaData.getColumnCount();
                for(int i=1;i<=coloumnCount;i++)
                {
                  System.out.printf("%-20f",resultSetMetaData.getColumnName(i));
                  
                }
                System.out.println();
                
                while (resultSet.next()) {
                  for(int i=1;i<=coloumnCount;i++)
                  {
                    System.out.printf("%-20f",resultSet.getString(i));
                  }
                  // Example of initializing user object from resultSet (update as needed)
                  // user = new User(resultSet.getInt("UserId"), resultSet.getString("name"), ...);
                }
              }catch(Exception e)
              {
                System.out.println(e);
              }
            
               //database code to fetch user based on email id and password
               
                // TODO: Implement database logic here
  
                return user;
            }
        }
    
    

