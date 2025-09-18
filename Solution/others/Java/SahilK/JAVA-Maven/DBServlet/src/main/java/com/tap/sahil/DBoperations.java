package com.tap.sahil;

import java.sql.Statement;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/simple")
public class DBoperations extends HttpServlet {
    @Override
   protected void doGet(HttpServletRequest request, HttpServletResponse response )throws IOException,ServletException{
    
      try{
        String URL="jdbc:mysql://localhost:3306/tflecommerce";
        String USERNAME="root";
        String PASSWORD="password";
        Connection conn;

        PrintWriter pw = response.getWriter();
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn=DriverManager.getConnection(URL, USERNAME, PASSWORD);
        Statement stmt = conn.createStatement();
        
        // stmt.executeQuery("DELETE FROM products WHERE id=21");
        stmt.executeUpdate("INSERT INTO products(name,description,price,stock,category_id) VALUES ('Tablet','Best tablet in world',5000.00,50,2)");
        stmt.executeUpdate("UPDATE products SET name='Earbuds',description='Best earbuds in universe' WHERE id = 4");
        
        ResultSet rs1=stmt.executeQuery("SELECT * FROM products WHERE id=20; ");
        rs1.next();
        for(int i=1;i<=8;i++){
            pw.println(rs1.getString(i));
        }
        // ResultSet rs = stmt.executeQuery("SELECT * FROM products");
        // while (rs.next()) {
        //     pw.println(rs.getInt(1)+"    "+rs.getString(2)+
        //     "    "+rs.getDouble(3)+"    "+rs.getInt(4)+"    "+rs.getInt(4)+"    ");   
        // }
           }
        catch(Exception e)
        {
            e.printStackTrace();
        }

    }
    }


    

