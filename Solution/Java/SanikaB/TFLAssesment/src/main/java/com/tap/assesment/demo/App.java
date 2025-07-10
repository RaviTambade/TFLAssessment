package com.tap.assesment.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.tap.assesment.Entity.Question;
import com.tap.assesment.FileManager.FileIOManager;
import com.tap.assesment.Repository.QuestionBank;
import com.tap.assesment.ui.UIManager;

public class App {
    public static void main(String[] args) {
        QuestionBank questionBank = new QuestionBank();
        FileIOManager fileIOManager=new FileIOManager();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;
        List<Question> questions;

        int choice;
        UIManager uiManager = new UIManager();
        
        while (running) {

            uiManager.displayMenu();

            choice = uiManager.getUserChoice();

            switch (choice) {
                case 1:
                    // Add Question
                    Question newQuestion = uiManager.getQuestionInput();
                    questionBank.addQuestion(newQuestion);
                    questions=questionBank.getAllQuestions();
                    fileIOManager.saveToFile(questions);
                    break;
                case 2:
 
                    // Remove Question
                    int questionIdToRemove = uiManager.getQuestionIdInput();
                    questionBank.removeQuestion(questionIdToRemove);
                    questions = questionBank.getAllQuestions();
                    fileIOManager.saveToFile(questions);
                    break;
                case 3:
                
                    // Update Question
                    int questionIdToUpdate = uiManager.getQuestionIdInput();
                    Question updatedQuestion = uiManager.getQuestionInput();
                    questionBank.updateQuestion(questionIdToUpdate, updatedQuestion);
                    questions = questionBank.getAllQuestions();
                    fileIOManager.saveToFile(questions);
                    break;
                case 4:
                    // View All Questions
                    List<Question> allQuestions = fileIOManager.loadFromFile();
                    uiManager.displayQuestions(allQuestions);
                    break;
                case 5:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
