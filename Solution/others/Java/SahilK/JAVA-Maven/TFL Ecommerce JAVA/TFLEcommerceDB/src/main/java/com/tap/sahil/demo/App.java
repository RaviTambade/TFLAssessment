package com.tap.sahil.demo;

import java.sql.*;
import java.util.UnknownFormatConversionException;

public class App 
{
       
        public int id=0;
        String URL = "jdbc:mysql://localhost:3306/TFLEcommerce";
        String USERNAME = "root";
        String PASSWORD = "password";
        Connection conn;

    public void connectionDB() 
    {
        try{
       conn= DriverManager.getConnection(URL, USERNAME, PASSWORD);
        System.out.println("Connection Established!!!");

       
        }catch(SQLException e)
        {System.out.println("Connection failed :"+e.getMessage());}
    }

    public void disp() throws SQLException 
    {
        try
        {
         Statement stmt = conn.createStatement();
         String query = ("INSERT INTO products WHERE id = ? "+ id);
         ResultSet rs = stmt.executeQuery(query);
         ResultSetMetaData rsmd=rs.getMetaData();
         int columncount=rsmd.getColumnCount();

         System.out.println("Products Information\n");

         for(int i=1;i<=columncount;i++)
         {
            System.out.printf("%-25s",rsmd.getColumnName(i));
         }
         System.out.println();
         while (rs.next()) 
         {
            for(int column=1;column<=5;column++)
            {
          System.out.printf("%-25s",rs.getString(column));
         }
        System.out.println();
    }}
       catch (SQLException e){
        System.out.println("SQL Error"+e.getMessage());
       }
    }
   
    public static void main( String[] args ) throws SQLException,UnknownFormatConversionException
    {
        App a =new App();
        a.connectionDB();
        a.disp();

    }
};




// package com.tap.sahil.demo;

// import java.sql.*;

// public class App {

//     String URL = "jdbc:mysql://localhost:3306/TFLEcommerce";
//     String USERNAME = "root";
//     String PASSWORD = "password";
//     Connection conn; // class-level connection

//     // Connect to database
//     public void connectionDB() {
//         try {
//             conn = DriverManager.getConnection(URL, USERNAME, PASSWORD); // assign to class-level conn
//             System.out.println("Connection Established!!!");
//         } catch (SQLException e) {
//             System.out.println("Connection failed: " + e.getMessage());
//         }
//     }

//     // Display product info
//     public void disp() {
//         if (conn == null) {
//             System.out.println("No DB connection available.");
//             return;
//         }

//         try {
//             Statement stmt = conn.createStatement();
//             String query = "SELECT * FROM products;";
//             ResultSet rs = stmt.executeQuery(query);
//             ResultSetMetaData rsmd = rs.getMetaData();
//             int columnCount = rsmd.getColumnCount();

//             System.out.println("Products Information:\n");

//             // Print column headers
//             for (int i = 1; i <= columnCount; i++) {
//                 System.out.printf("%-23s", rsmd.getColumnName(i));
//             }
//             System.out.println();

//             // Print data rows
//             while (rs.next()) {
//                 for (int column = 1; column <= columnCount; column++) {
//                     System.out.printf("%-23s", rs.getString(column));
//                 }
//                 System.out.println();
//             }

//         } catch (SQLException e) {
//             System.out.println("SQL error: " + e.getMessage());
//         }
//     }

//     // Main
//     public static void main(String[] args) {
//         App a = new App();
//         a.connectionDB(); // establishes and stores connection
//         a.disp();          // uses that connection
//     }
// }

