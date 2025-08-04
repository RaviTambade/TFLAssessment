package com.tap.repo.UI;

import java.util.Scanner;

public class StudentMenu {
    private Scanner input=new Scanner(System.in);
    public int displayMenu(){
        System.out.println("*********** Welcome to NEMS ***********");
        System.out.println("1)Enter the student details");
        System.out.println("2)Update the student details");
        System.out.println("3)Delete the entry");
        System.out.println("4)Show all the students details");
        System.out.println("5)Show the detail of student by roll number");
        System.out.println("6)Exit");
        System.out.println("********************************");

        System.out.println("Enter your choice");
        
        int choice=input.nextInt();
        return choice;
    }

    public int getNumber(){
        System.out.println("Enter the roll number : ");
        int id=input.nextInt();
        return id;
    }
}
