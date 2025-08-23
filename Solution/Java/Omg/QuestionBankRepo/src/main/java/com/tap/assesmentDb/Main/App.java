package com.tap.assesmentDb.Main;
import java.util.Scanner;
import com.tap.assesmentDb.Main.DBManager;

public class App {
    public static void main(String[] args) {

        DBManager dbManager = new DBManager();
        Scanner scanner = new Scanner(System.in);
        UIManager mgr=new UIManager()   ;

        while (true) {
            mgr.showMenu();
           int choice=mgr.getChoice() ;
            switch (choice) {
                case 1:
                    dbManager.getallQuestions();
                    System.out.println("All questions displayed successfully.");

                    break;

                case 2:
                    System.out.println("Inserting a new question...");
                    System.out.println("Enter Subject ID:");
                    String subjectId = scanner.next();
                    scanner.nextLine();
                    System.out.println("Enter Question:");
                    String question = scanner.next();
                    scanner.nextLine();
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

                    dbManager.insertQuestion(subjectId, question, optionA, optionB, optionC, optionD, answerKey,
                            evaluationCriteria);
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
                    dbManager.updateQuestion(questionId, newSubjectId, newQuestion, newOptionA, newOptionB, newOptionC,
                            newOptionD, newAnswerKey, newEvaluationCriteria);
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
}