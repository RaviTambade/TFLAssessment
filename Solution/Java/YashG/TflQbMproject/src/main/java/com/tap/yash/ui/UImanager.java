package com.tap.yash.ui;

import com.tap.yash.entity.*;
import java.util.*;

public class UImanager {

 
    Scanner scanner = new Scanner(System.in);

public void displayMenu(){
    System.out.println("Welcome to QuestionBank Management System");
    System.out.println("1. Add Question");
    System.out.println("2. Remove Question");
    System.out.println("3. update Question");
    System.out.println("4. View all Question");
    System.out.println("5. Exit");
}

public int getuserChoice(){

     System.out.println("Enter your choice");
     return scanner.nextInt();
}

public void dislayMessage(String message) {
        System.out.println(message);
    }

public Question getQuestionInput() {
    System.out.println("Enter ID for new Question");
    int id= scanner.nextInt();
    scanner.nextLine();
    System.out.println("Enter the title for this question");
    String title = scanner.nextLine();
    String Subject= "java";
    
    System.out.println("enter the evaluation criteria for this question (1-5):");
    int evaluationCriteria = scanner.nextInt();
    scanner.nextLine();
    System.out.println("Enter option A");
    String optionA = scanner.nextLine();
    System.out.println("Enter option B");
    String optionB = scanner.nextLine();
    System.out.println("Enter option C");
    String optionC=scanner.nextLine();
    System.out.println("Enter option D");
    String optionD = scanner.nextLine();
    System.out.println("Enter correct answer (A/B/C/D): ");
    char CorrectAnswer = scanner.next().charAt(0);


   return new Question( title,id, optionA, optionB, optionC, optionD, CorrectAnswer, Subject, evaluationCriteria);
}

public void displayQuestions(List<Question> questions) {
     for (Question question : questions) {
            System.out.println("Title: " + question.gettitle());
            System.out.println("ID: " + question.getid());
            System.out.println("Options: ");
            System.out.println("A: " + question.getoptionA());
            System.out.println("B: " + question.getoptionB());
            System.out.println("C: " + question.getoptionC());
            System.out.println("D: " + question.getoptionD());
            System.out.println("Correct Answer: " + question.getCorrectAnswer());
          //  System.out.println("Subject: " + question.getsubject());
            System.out.println("Evaluation Criteria: " + question.getevaluationCriteria());
            System.out.println("-----------------------------");
        }
    }
        
         
     public int getQuestionIdInput() {
         System.out.print("Enter question ID: ");
         return scanner.nextInt();
     }


}



