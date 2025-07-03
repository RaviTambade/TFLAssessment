package com.tap.assesment.Utils;

import java.sql.*;

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