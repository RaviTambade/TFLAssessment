package com.tap.tfl.ui;

import java.util.Scanner;

import com.tap.tfl.Entity.question;
import com.tap.tfl.demo.App;

public class UIManager {

    // question q1 = new question();
    Scanner scanner = new Scanner(System.in);

    public question setData() {
        question q1 = new question();
        if (App.ch == 1) {
            System.out.println("Enter Question ID: ");
            q1.setQuestionId(scanner.nextInt());
            scanner.nextLine();
        }
        System.out.println("Enter Subject: ");
        q1.setSubject(scanner.nextLine());
        System.out.println("Enter Title: ");
        q1.setTitle(scanner.nextLine());
        System.out.println("Enter Option A: ");
        q1.setOptionA(scanner.nextLine());
        System.out.println("Enter Option B: ");
        q1.setOptionB(scanner.nextLine());
        System.out.println("Enter Option C: ");
        q1.setOptionC(scanner.nextLine());
        System.out.println("Enter Option D: ");
        q1.setOptionD(scanner.nextLine());
        System.out.println("Enter Correct Option: ");
        q1.setCorrectAnswer(scanner.next().charAt(0));
        System.out.println("Enter Evaluation Criteria: ");
        q1.setEvaluationCriteria(scanner.nextInt());
        //getData(q1);
        return q1;
    }

    // public question updateData() {
    //     System.out.println("Enter Subject: ");
    //     q1.setSubject(scanner.nextLine());
    //     System.out.println("Enter Title: ");
    //     q1.setTitle(scanner.nextLine());
    //     System.out.println("Enter Option A: ");
    //     q1.setOptionA(scanner.nextLine());
    //     System.out.println("Enter Option B: ");
    //     q1.setOptionB(scanner.nextLine());
    //     System.out.println("Enter Options C: ");
    //     q1.setOptionC(scanner.nextLine());
    //     System.out.println("Enter Options D: ");
    //     q1.setOptionD(scanner.nextLine());
    //     System.out.println("Enter Correct Option: ");
    //     q1.setCorrectAnswer(scanner.next().charAt(0));
    //     System.out.println("Enter Evaluation Criteria: ");
    //     q1.setEvaluationCriteria(scanner.nextInt());
    //     return q1;
    // }
    public void getData(question q) {
        System.out.println();
        System.out.println("-------------------------------");
        System.out.println("Question ID:         " + q.getQuestionId());
        System.out.println("Subject:             " + q.getSubject());
        System.out.println("Title:               " + q.getTitle());
        System.out.println("Option A:            " + q.getOptionA());
        System.out.println("Option B:            " + q.getOptionB());
        System.out.println("Options C:           " + q.getOptionC());
        System.out.println("Options D:           " + q.getOptionD());
        System.out.println("Correct Option:      " + q.getCorrectAnswer());
        System.out.println("Evaluation Criteria: " + q.getEvaluationCriteria());
        System.out.println("-------------------------------");
    }
}
