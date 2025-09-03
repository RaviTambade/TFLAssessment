package com.tap.nirjala.demo;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;

public class App {
 private static Connection connection;
 private static Statement statement;
 static{
    try
    {
     String URL="jdbc:mysql://localhost:3306/account_db";
     String USERNAME="root";
     String PASSWORD="password";
     connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
     statement=connection.createStatement();
     System.out.println("connection established successfully");
     
    }
    catch(Exception e)
    {
        System.out.println(e);
        System.out.println("Connection failed.");
    }
                     
 }

public void select() {
        try {
        String selectQuery = "SELECT * FROM account_info;";
        ResultSet result = statement.executeQuery(selectQuery);
        ResultSetMetaData resultcount=result.getMetaData();
        int columncount=resultcount.getColumnCount();
        for(int i=1; i<=columncount;i++)
        {
             System.out.printf("%-25s",resultcount.getColumnName(i));
        }
        System.out.println();
        while (result.next()) { 
            for(int column=1;column <= 4;column++) {
                System.out.printf("%-25s",result.getString(column));
            }
            System.out.println();
        } 
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    public static void main( String[] args )
    {
      
        App a1=new App();
        a1.select();
    }
}

