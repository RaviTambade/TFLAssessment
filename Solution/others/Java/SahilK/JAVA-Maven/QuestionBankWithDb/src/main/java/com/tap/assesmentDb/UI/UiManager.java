package com.tap.assesmentDb.UI;

import java.util.Scanner;

import com.tap.assesmentDb.Entity.Question;

public class UiManager {
    public static Question getInputQuestion()
    {
        Scanner sc=new Scanner(System.in);
        Question question=new Question();
        System.out.println("Enter New Question id");
        question.setId(sc.nextInt());

        System.out.println("Enter New Question Subject id");
        question.setSubjectId(sc.nextInt());

        sc.nextLine();
        System.out.println("Enter New Question Title");
        question.setTitle(sc.nextLine());

        System.out.println("Enter New Question Option A");
        question.setOptionA(sc.nextLine());

        System.out.println("Enter New Question Option B");
        question.setOptionB(sc.nextLine());

        System.out.println("Enter New Question Option C");
        question.setOptionC(sc.nextLine());

        System.out.println("Enter New Question Option D");
        question.setOptionD(sc.nextLine());

        System.out.println("Enter New Question correct Answer");
        question.setCorrectAnswer(sc.nextLine());

        System.out.println("Enter New Question Evaluation Criteria");
        question.setEvaluationCriteria(sc.nextInt());
        
        return question;
    }

    public static void successful()
    {
        System.out.println("Operation Performed Successfully");
    }

    public static void failed() {
        System.out.println("Operation  failed");
    }
    public static int getInputId()
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter  Question id");
        int id=sc.nextInt();
        return id;
    }

    public static void displayMenu()
    {
        System.out.println("------------MENU--------------");
        System.out.println("1.Get All Question");
        System.out.println("2.Insert New Question");
        System.out.println("3.Update Existing Question");
        System.out.println("4.Delete Existing Question");
        System.out.println("5.Exit");
    }

    public static int getUserChoice()
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("\nEnter your choice");
        int choice = sc.nextInt();
        return choice;
    }
    public static void wrongChoice()
    {
        System.out.println("invalid choice try again!!!");
    }
    public static void thankyoumsg()
    {
        System.out.println("thank you for using our software!!!!");
    }
}
