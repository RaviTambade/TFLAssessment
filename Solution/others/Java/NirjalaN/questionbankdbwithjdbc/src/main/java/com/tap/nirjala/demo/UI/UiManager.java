package com.tap.nirjala.demo.UI;

import java.util.Scanner;

import com.tap.nirjala.demo.Entity.Question;


public class UiManager {
    public static Question getInputQuestion()
    {
        Scanner scanner=new Scanner(System.in);
        Question question=new Question();
        System.out.println("Enter new Question id: ");
        question.setId(scanner.nextInt());

        System.out.println("Enter new question subject Id: ");
        question.setSubjectId(scanner.nextInt());

        System.out.println("Enter new question Title: ");
        question.setTitle(scanner.nextLine());
        
        System.out.println("Enter new question OptionA: ");
        question.setOptionA(scanner.nextLine());

        System.out.println("Enter new question OptionB: ");
        question.setOptionB(scanner.nextLine());

        System.out.println("Enter new question OptionC: ");
        question.setOptionC(scanner.nextLine());

        System.out.println("Enter new question OptionD: ");
        question.setOptionD(scanner.nextLine());

        System.out.println("Enter new question correct answer: ");
        question.setCorrectAnswer(scanner.nextLine());

        System.out.println("Enter new qution evaluation criteria: ");
        question.setEvaluationCriteria(scanner.nextInt());
        return question;
    }

    public static void successsful()
    {
        System.out.println("operation performed successfully");
    }

    public static void failed()
    {
        System.out.println("Operation failed");
    }

    public static int getInputId()
    {
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter your id ");
        int id=scanner.nextInt();
        return id;
    }

    public static void displayMenu()
    {
        System.out.println("-------------------MENU-------------------");
        System.out.println("Get all Questions");
        System.out.println("Insert new question");
        System.out.println("Update exiting question");
        System.out.println("Delete existing question");
        System.out.println("Exit");
    }
    public static int  getUserChoice()
    {
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter your choice : ");
        int choice=scanner.nextInt();
        return choice;
    }

    public static void wrongChoice()
    {
        System.out.println("You enter the wrong choice dear");
    }
    public static void thankyoumsg()
    {
        System.out.println();
    }
}
