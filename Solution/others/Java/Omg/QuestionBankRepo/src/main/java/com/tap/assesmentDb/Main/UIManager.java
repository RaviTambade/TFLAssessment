
package com.tap.assesmentDb.Main;

public class UIManager {


    public void showMenu(){
            System.out.println("Welcome to the Assessment Database Management System");
            System.out.println("You can perform the following operations:");
            System.out.println("1. View all questions");
            System.out.println("2. Insert a new question");
            System.out.println("3. Update an existing question");
            System.out.println("4. Delete a question");
            System.out.println("5. Exit");
    }


    public int  getChoice(){
        int choice;
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        choice = scanner.nextInt();
        return choice;
    }




}
    

