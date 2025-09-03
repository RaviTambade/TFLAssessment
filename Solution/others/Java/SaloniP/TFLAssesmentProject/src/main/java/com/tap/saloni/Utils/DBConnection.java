package com.tap.saloni.Utils;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

    private  Connection connection=null;
    public  Connection getConnectionDB() throws Exception {
       try {
           connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/assessmentdb","root","password");
       } catch (Exception e) {
           e.printStackTrace();
       }
       return connection;
   }

}