package com.tap.sarthak.UI;

import java.util.*;

import com.tap.sarthak.Entity.Question;

public class UiManager {
    public static Question getInputquestion() {
        Scanner sc = new Scanner(System.in);
        Question question = new Question();
        System.out.println("Enter the New Question Id");
        question.setId(sc.nextInt());

        System.out.println("Enter the new  Question SubjectId");
        question.setSubjectId(sc.nextInt());

        sc.nextLine();
        System.out.println("Enter the new Question Title");
        question.setTitle(sc.nextLine());

        System.out.println("Enter the new Question OptionA");
        question.settOptionA(sc.nextLine());

        System.out.println("Enter the new Question OptionB");
        question.setOptionB(sc.nextLine());

        System.out.println("Enter the new Question OptionC");
        question.setOptionC(sc.nextLine());

        System.out.println("Enter the new Question OptionD");
        question.setOptionD(sc.nextLine());

        System.out.println("Enter the new Question Correct Answer");
        question.setCorrectAAnswer(sc.next());

        System.out.println("Enter the new Question Evaluation Critera");
        question.setEvaluationCritera(sc.nextInt());
        return question;
    }

    public static void successful() {
        System.out.println("Opertion Performed Successfully");
    }

    public static void failed() {
        System.out.println("Opertion Failed");
    }

    public static int getInputId() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter  Question id");
        int id = sc.nextInt();
        return id;
    }

    public static void displayMenu() {
        System.out.println("------------MENU--------------");
        System.out.println("1.Get All Question");
        System.out.println("2.Insert New Question");
        System.out.println("3.Update Existing Question");
        System.out.println("4.Delete Existing Question");
        System.out.println("5.Exit");
    }

    public static int getUserChoice() {
        Scanner sc = new Scanner(System.in);
        System.out.println("\nEnter your choice");
        int choice = sc.nextInt();
        return choice;
    }

    public static void wrongChoice() {
        System.out.println("invalid choice try again!!!");
    }

    public static void thankyoumsg() {
        System.out.println("thank you for using our software!!!!");
    }

}
