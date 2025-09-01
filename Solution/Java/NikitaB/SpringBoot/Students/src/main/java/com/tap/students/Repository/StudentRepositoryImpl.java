package com.tap.students.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.tap.students.Entity.Student;

@Repository
public class StudentRepositoryImpl implements IStudentRepository {

    private static String password;
    private static String name;
    private static String url;
    private static Connection conn;
    private static Statement st;
    List<Student> stu=new ArrayList<>();
    List<String> students=new ArrayList<>();
    static{
        try{
             password="password";
             name="root";
             url="jdbc:mysql://localhost:3306/tap";
             conn= DriverManager.getConnection(url,name,password);
             st=conn.createStatement();
        }catch(Exception e){
            e.printStackTrace();
        }
       
    }

    public StudentRepositoryImpl(){
        Student stu=new Student();
    }

    public StudentRepositoryImpl(Student stu){
        Student student= stu;
    }

    public void create(){
       try{
            st.executeUpdate("insert into students(name,email) values('Anant Ambani','anant@gmail.com')");
       }catch(Exception e){
        System.out.println(e);
       }   
    }

    public void update(){
        try{
            st.executeUpdate("update students set name='Mukesh' where id=4");
        }catch(Exception e){
            System.out.println(e);
        }
        
    } 

    public void delete(){
        try{
            st.executeUpdate("delete from students where id=4");
        }catch(Exception e){
            System.out.println(e);
        }    
    }

    public List<String> display(){
       
        try{
            ResultSet rs=st.executeQuery("select * from students");
            while(rs.next()){
               students.add(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
            }
        }catch(Exception e){
            System.out.println(e);
        }
        return students;
    }

    public Student getById(int id){
        try{
             ResultSet rs=st.executeQuery("select * from students");
        while(rs.next()){
            int id1=rs.getInt(1);
            String name1=rs.getString(2);
            String email=rs.getString(3);   
            stu.add(new Student(id1,name1,email));
        }
        
        for(Student student:stu){
            if(student.getID()==id){
                return student;
            }
        }
        }catch(Exception e){
            System.out.println(e);
        }
       
        return null;
    }

}
