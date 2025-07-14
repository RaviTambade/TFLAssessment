package com.tap.assesment.Store;

import java.sql.*;
import java.util.*;

public class DBManager {

    private String url="jdbc:mysql://localhost:3306/questions";
    private String name="root";
    private String password="Nikita@123";
    Scanner sc=new Scanner(System.in);

   public void display(){
      try{ 
         Connection conn=DriverManager.getConnection(url, name, password);
         Statement st=conn.createStatement();
         ResultSet rs=st.executeQuery("select * from question");
         while(rs.next()){
            System.out.println("Id : "+rs.getInt(1));
            System.out.println("Question : "+rs.getString(2));
            System.out.println("Option A : "+rs.getString(3));
            System.out.println("Option B : "+rs.getString(4));
            System.out.println("Option C : "+rs.getString(5));
            System.out.println("Option D : "+rs.getString(6));
            System.out.println("Correct Option : "+rs.getString(7));
            System.out.println("Subject : "+rs.getString(8));
            System.out.println("Evaluation Criteria : "+rs.getInt(9));
         }
      }catch(Exception e){
         e.printStackTrace();
      }
   }

   public void update(){
     

      try{
          Connection conn=DriverManager.getConnection(url, name, password);
            System.out.println("Enter the id where you want to update the data : ");
            int id=sc.nextInt();
            sc.nextLine();
            System.out.println("Enter the title : ");
            String title=sc.nextLine();
            sc.nextLine();
            System.out.println("Enter the option A : ");
            String optionA=sc.nextLine();
            System.out.println("Enter the option B : ");
            String optionB=sc.nextLine();
            System.out.println("Enter the option C : ");
            String optionC=sc.nextLine();
            System.out.println("Enter the option D : ");
            String optionD=sc.nextLine();
            System.out.println("Enter the correct option : ");
            char correctOption=sc.next().charAt(0);
            System.out.println("Enter the subject : ");
            String subject=sc.nextLine();
            System.out.println("Enter the evaluation criteria : ");
            int marks=sc.nextInt();

            
          PreparedStatement ps=conn.prepareStatement("update question set title=?,optionA=?,optionB=?,optionC=?,optionD=?,subject=?,evaluationCriteria=? where id=? ");
          ps.setString(1, title);
          ps.setString(2, optionA);
          ps.setString(3, optionB);
          ps.setString(4, optionC);
          ps.setString(5, optionD);
          ps.setString(6, String.valueOf(correctOption));
          ps.setString(7, subject);
          ps.setInt(8, marks);
          ps.setInt(9,id);

          ps.executeUpdate();
      }catch(Exception e){
         e.printStackTrace();
      }
   }

   public void delete(){
      try{
          Connection conn=DriverManager.getConnection(url, name, password);
          System.out.println("Enter the id where you want to delete the data : ");
          int id=sc.nextInt();

          PreparedStatement ps=conn.prepareStatement("delete from question where id=?");
          ps.setInt(1, id);
          ps.executeUpdate();
      }catch(Exception e){
         e.printStackTrace();
      }
     
   }

   public void insert(){
      try{
            Connection conn=DriverManager.getConnection(url, name, password);
            System.out.println("Enter the id : ");
            int id=sc.nextInt();
            sc.nextLine();
            System.out.println("Enter the title : ");
            String title=sc.nextLine();
            sc.nextLine();
            System.out.println("Enter the option A : ");
            String optionA=sc.nextLine();
            System.out.println("Enter the option B : ");
            String optionB=sc.nextLine();
            System.out.println("Enter the option C : ");
            String optionC=sc.nextLine();
            System.out.println("Enter the option D : ");
            String optionD=sc.nextLine();
            System.out.println("Enter the correct option : ");
            char correctOption=sc.next().charAt(0);
            System.out.println("Enter the subject : ");
            String subject=sc.nextLine();
            sc.nextLine();
            System.out.println("Enter the evaluation criteria : ");
            int marks=sc.nextInt();

            PreparedStatement ps=conn.prepareStatement("insert into question(id,title,optionA,optionB,optionC,optionD,correctOption,subject,evaluationCriteria) values(?,?,?,?,?,?,?,?,?)");
            ps.setInt(1, id);
            ps.setString(2,title);
            ps.setString(3, optionA);
            ps.setString(4, optionB);
            ps.setString(5, optionC);
            ps.setString(6,optionD);
            ps.setString(7,String.valueOf(correctOption));
            ps.setString(8, subject);
            ps.setInt(9, marks);
           
            ps.executeUpdate();
      }catch(Exception e){
         e.printStackTrace();
      }

   }
}
