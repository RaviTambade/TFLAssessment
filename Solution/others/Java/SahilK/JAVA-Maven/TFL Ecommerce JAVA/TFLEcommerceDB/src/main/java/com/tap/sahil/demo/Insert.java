package com.tap.sahil.demo;

import java.sql.*;
import java.util.Scanner; 

public class Insert {

    String URL="jdbc:mysql://localhost:3306/tflecommerce";
    String USERNAME="root";
    String PASSWORD ="password";
    Connection conn;

    
public void connDB(){
            try {
            conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            System.out.println("Connection Established!");
        } catch (SQLException e) {
            System.out.println("Connection Failed: " + e.getMessage());
        }

}

    public void insert(){
     if (conn == null) {
            System.out.println("Database not connected.");
            return;
        }
       Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter product name: ");
            String name = sc.nextLine();

            System.out.print("Enter description: ");
            String description = sc.nextLine();

            System.out.print("Enter price: ");
            double price = sc.nextDouble();

            System.out.print("Enter stock: ");
            int stock = sc.nextInt();

            System.out.print("Enter category ID: ");
            int categoryId = sc.nextInt();

            Timestamp now = new Timestamp(System.currentTimeMillis());

            String query = "INSERT INTO products (name, description, price, stock, category_id, created_at, last_modified) " +
                           "VALUES (?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement pstmt = conn.prepareStatement(query);
            pstmt.setString(1, name);
            pstmt.setString(2, description);
            pstmt.setDouble(3, price);
            pstmt.setInt(4, stock);
            pstmt.setInt(5, categoryId);
            pstmt.setTimestamp(6, now);
            pstmt.setTimestamp(7, now);

            int rowsInserted = pstmt.executeUpdate();
            System.out.println(rowsInserted + " product(s) inserted successfully.");

        }
        catch(SQLException e){
            System.out.println("SQLException occurred :"+e);
        }

   }


    public static void main(String[] args) {

        Insert in=new Insert();
        in.connDB();
        in.insert();
    }
}