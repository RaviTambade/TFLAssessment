package com.tap.sahil.demo;
import java.sql.*;
import java.sql.Connection;

public class App 
{

            private static Connection connection;
            private static Statement stmt;

            static{
        try{

        String URL="jdbc:mysql://localhost:3306/assessmentdb";
        String USERNAME="root";
        String PASSWORD="password";

        connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        stmt=connection.createStatement();
        System.out.println("Connection Established Sucessfully!!");  
        System.out.println();
        }
        catch(Exception e)
        {
            System.out.println(e);
            System.out.println("Connection failed!!");
        }
}
        
    public void select()
    {
        try{
            String query="SELECT * FROM employees;";
            ResultSet rs=stmt.executeQuery(query);
            ResultSetMetaData rsmd=rs.getMetaData();
            int columncount=rsmd.getColumnCount();

            for(int i=1;i<=columncount;i++)
            {
                System.out.printf("%-25s",rsmd.getColumnName(i));
            }
            System.out.println();

            while (rs.next()) 
            {
                for(int column =1;column <=6;column++)
                {
                    System.out.printf("%-25s",rs.getString(column));
                }
                System.out.println();
            }
        }
        catch(Exception e)
        {
            System.out.println("Failed to Display columns!!!");
        }
    }
    public static void main(String[] args) {
        App a1=new App();
        a1.select();
    }
}

