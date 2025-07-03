package com.tap.assesment.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.tap.assesment.Entity.Question;
import com.tap.assesment.Repository.QuestionBank;
import com.tap.assesment.Store.FileIOManager;
import com.tap.assesment.ui.UIManager;

public class App {
    public static void main(String[] args) {
        QuestionBank questionBank = new QuestionBank();

        FileIOManager fileIOManager = new FileIOManager();

        Question q = new Question();
        q.setId(1);
        int id = q.getId();
        q.toString();

        Scanner scanner = new Scanner(System.in);
        boolean running = true;

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
                    List<Question> questions=new ArrayList<Question>();
                    questions=questionBank.getAllQuestions();

                    fileIOManager.saveQuestionsToFile(questions);
                    break;
                case 2:

                    // Remove Question
                    int questionIdToRemove = uiManager.getQuestionIdInput();
                    questionBank.removeQuestion(questionIdToRemove);
                    break;
                case 3:

                    // Update Question
                    int questionIdToUpdate = uiManager.getQuestionIdInput();
                    Question updatedQuestion = uiManager.getQuestionInput();
                    questionBank.updateQuestion(questionIdToUpdate, updatedQuestion);
                    break;
                case 4:
                    // View All Questions
                    List<Question> allQuestions = fileIOManager.loadQuestionsFromFile();
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
