package com.tap.assesmentDb.Main;
import com.tap.assesmentDb.Main.DBManager.DBManager;
public class App {
    public static void main(String[] args)  {
     
    DBManager dbManager = new DBManager();

    System.out.println("Welcome to the Assessment Database Management System");
    System.out.println("You can perform the following operations:");
    System.out.println("1. View all questions");
    System.out.println("2. Insert a new question");
    System.out.println("3. Update an existing question");
    System.out.println("4. Delete a question");
    System.out.println("5. Exit");

    java.util.Scanner scanner = new java.util.Scanner(System.in);
    int choice;
    choice = scanner.nextInt();

    switch (choice) {
        case 1:
            dbManager.getallQuestions();
            System.out.println("All questions displayed successfully.");
            
            break;

        case 2:
            System.out.println("Inserting a new question...");
            System.out.println("Enter Subject ID:");
            String subjectId = scanner.next();
            System.out.println("Enter Question:");
            String question = scanner.next();
            System.out.println("Enter Option A:");
            String optionA = scanner.next();
            System.out.println("Enter Option B:");
            String optionB = scanner.next();
            System.out.println("Enter Option C:");
            String optionC = scanner.next();
            System.out.println("Enter Option D:");
            String optionD = scanner.next();
            System.out.println("Enter Answer Key:");
            String answerKey = scanner.next();
            System.out.println("Enter Evaluation Criteria (1-5):");
            int evaluationCriteria = scanner.nextInt();

            dbManager.insertQuestion(subjectId, question, optionA, optionB, optionC, optionD, answerKey, evaluationCriteria);
            break; 
            
        case 3:
            System.out.println("Enter Question ID to update:");
            int questionId = scanner.nextInt();
            System.out.println("Enter new Subject ID:");
            String newSubjectId = scanner.next();
            System.out.println("Enter new Question:");
            String newQuestion = scanner.next();
            System.out.println("Enter new Option A:");
            String newOptionA = scanner.next();

            System.out.println("Enter new Option B:");
            String newOptionB = scanner.next();
            System.out.println("Enter new Option C:");
            String newOptionC = scanner.next();
            System.out.println("Enter new Option D:");
            String newOptionD = scanner.next();
            System.out.println("Enter new Answer Key:");
            String newAnswerKey = scanner.next();
            System.out.println("Enter new Evaluation Criteria");
            int newEvaluationCriteria = scanner.nextInt();
            dbManager.updateQuestion(questionId, newSubjectId, newQuestion, newOptionA, newOptionB, newOptionC, newOptionD, newAnswerKey, newEvaluationCriteria);
            break;
    
        case 4:
            System.out.println("Enter Question ID to delete:");
            int deleteQuestionId = scanner.nextInt();
            dbManager.deleteQuestion(deleteQuestionId);
            break;
        case 5:
            System.out.println("Exiting the tfl question bank ");
            scanner.close();
            return;
        default:
            break;
    }




    }
}