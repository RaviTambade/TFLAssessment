package com.tap.repo.Repository;

import java.util.*;

import com.tap.repo.Entity.*;
//import com.tap.repo.Repository.IStudentResult;


public class StudentRepository implements IStudentRepository{
    private Scanner input=new Scanner(System.in);
    Student student=new Student();
    ArrayList<Student> students=new ArrayList<Student>();

    public void insertMarks(){
        System.out.println("Enter the name of the student : ");
        student.setName(input.nextLine());
        System.out.println("Enter the roll number : ");
        student.setNumber(input.nextInt());
        System.out.println("Enter the percentage : ");
        student.setPercentage(input.nextFloat());

        students.add(student);
    }

    public void updateMarks(int rollno){
        for(Student s:students){
            if(s.getNumber()==rollno){
                students.remove(s);
                s.setNumber(rollno);
                s.setName(student.getName());

            System.out.println("Enter the marks : ");
            s.setPercentage(input.nextFloat());

            students.add(s);
        }
        }
        
    }
    public void deleteMarks(int rollno){
        for(Student s:students){
            if(s.getNumber()==rollno){
                students.remove(s);
            }
        }
    }

    public ArrayList<Student> displayAllResult(){ 
                return students;
    }

    public void displayOneResult(int rollno){
        for(Student s:students){
            if(s.getNumber()==rollno){
                System.out.println(s);
            }
        }   
    }
}