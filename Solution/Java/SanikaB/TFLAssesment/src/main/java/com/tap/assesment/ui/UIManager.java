package com.tap.assesment.ui;
import com.tap.assesment.Entity.Question;

import java.util.List;
import java.util.Scanner;

public class UIManager {
    
    // This class will handle the user interface interactions
    // It will provide methods to display menus, take user input, and show results

    public void displayMenu() {
        System.out.println("Welcome to the Question Bank Management System");
        System.out.println("1. Add Question");
        System.out.println("2. Remove Question");
        System.out.println("3. Update Question");
        System.out.println("4. View All Questions");
        System.out.println("5. Exit");
    }

    public int getUserChoice() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your choice: ");
        return scanner.nextInt();
    }

    public void displayMessage(String message) {
        System.out.println(message);
    }


    public Question getQuestionInput() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter question Id: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter question title: ");
        String title = scanner.nextLine();
        String subject = "Java"; // Default subject, can be modified later
        System.out.print("Enter evaluation criteria (1-5): ");
        int evaluationCriteria = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter option A: ");
        String optionA = scanner.next();
        System.out.print("Enter option B: ");
        String optionB = scanner.next();
        System.out.print("Enter option C: ");
        String optionC = scanner.next();
        System.out.print("Enter option D: ");
        String optionD = scanner.next();
        System.out.print("Enter correct answer (A/B/C/D): ");
        char correctAnswer = scanner.next().charAt(0);
        
        // Assuming subject and evaluation criteria are not required for this example
        return new Question(title, optionA, optionB, optionC, optionD, correctAnswer, subject, evaluationCriteria,id);
    }   

    public void displayQuestions(List<Question> questions) {
        for (Question question : questions) {
            System.out.println("ID: " + question.getId());
            System.out.println("Title: " + question.getTitle());
            System.out.println("Options: ");
            System.out.println("A: " + question.getOptionA());
            System.out.println("B: " + question.getOptionB());
            System.out.println("C: " + question.getOptionC());
            System.out.println("D: " + question.getOptionD());
            System.out.println("Correct Answer: " + question.getCorrectAnswer());
            System.out.println("Subject: " + question.getSubject());
            System.out.println("Evaluation Criteria: " + question.getEvaluationCriteria());
            System.out.println("-----------------------------");
        }
    }

    public void showQuestionDetails(Question question) {
        if (question != null) {
            System.out.println("ID: " + question.getId());
            System.out.println("Title: " + question.getTitle());
            System.out.println("Options: ");
            System.out.println("A: " + question.getOptionA());
            System.out.println("B: " + question.getOptionB());
            System.out.println("C: " + question.getOptionC());
            System.out.println("D: " + question.getOptionD());
            System.out.println("Correct Answer: " + question.getCorrectAnswer());
            System.out.println("Subject: " + question.getSubject());
            System.out.println("Evaluation Criteria: " + question.getEvaluationCriteria());
        } else {
            System.out.println("Question not found.");
        }
    }
    // Additional methods for user input and displaying results can be added here

    public int getQuestionIdInput() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter question ID: ");
        return scanner.nextInt();
    }

}
