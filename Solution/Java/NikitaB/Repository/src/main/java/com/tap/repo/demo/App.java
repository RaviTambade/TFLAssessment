package com.tap.repo.demo;

import com.tap.repo.Controllers.*;
import com.tap.repo.Entity.*;
import com.tap.repo.Repository.*;
import com.tap.repo.Services.*;
import com.tap.repo.UI.*;
import java.util.*;

public class App 
{
    public static void main( String[] args )
    {
        // Student student=new Student();
        StudentRepository studentRepository = new StudentRepository();
        StudentService studentService = new StudentService();
        StudentController studentController = new StudentController();
        StudentMenu ui=new StudentMenu();
        int choice;

        do{
            choice=ui.displayMenu();
           
            switch(choice){
                case 1:
                studentController.insert(studentService, studentRepository);
                break;

                case 2:
                int num=ui.getNumber();
                studentController.update(studentService, studentRepository, num);
                break;

                case 3:
                num=ui.getNumber();
                studentController.delete(studentService, studentRepository, num);
                break;

                case 4:{
                    ArrayList<Student> students=new ArrayList<Student>();
                    students=studentController.showAll(studentService, studentRepository);
                    System.out.println(students);
                }
                
                break;

                case 5:
                num=ui.getNumber();
                studentController.showById(studentService, studentRepository, num);
                break;

                default:
                System.out.println("******************* THAKS FOR VISITING *******************");
                break;
            }
            

        }while(choice!=6);
       
    }
}
