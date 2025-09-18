package com.tap.sahil.demo;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;

public class DbManager {

    private static Connection conn;
    static{
        try{
    String USERNAME = "root";
    String PASSWORD = "password";
    String URL = "jdbc:mysql//localhost:3306/tflassesment";
    conn=DriverManager.getConnection(URL, USERNAME, PASSWORD);
    System.out.println("Connection Established!!");

        }catch(Exception e){
            System.out.println("Connection Failed!!"+e);
        }
    }

    public static  ArrayList<Questions> getAll()throws SQLException{
        ArrayList<Questions> q=new ArrayList<Questions>();
        Statement stmt=conn.createStatement();
        ResultSet rs=stmt.executeQuery("SELECT * FROM questionbank");
        ResultSetMetaData rsmd = rs.getMetaData();
        int columncount=rsmd.getColumnCount();
        for(int i=1;i<=columncount;i++){
            System.out.println(rsmd.getColumnName(i)+"\t");
        }
        while (rs.next()) {
        Questions question=new Question(rs.getString(3), rs.getString(4), 
                rs.getString(5), rs.getString(6), rs.getString(7), 
                rs.getString(8), rs.getInt(9), rs.getInt(1), 
                rs.getInt(2));
                q.add(question);
        }
        return q;
        }
    
    public static boolean insert()throws SQLException{
        boolean status=false;
        PreparedStatement pt=conn.prepareStatement("insert into questionbank values(?,?,?,?,?,?,?)");
        pt.setInt(1, 55);
        pt.setString(2, null);
        
    }
   
    
}
