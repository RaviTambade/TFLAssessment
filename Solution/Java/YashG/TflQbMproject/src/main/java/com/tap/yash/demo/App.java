package com.tap.yash.demo;

import java.util.*;
import com.tap.yash.repository.*;
import com.tap.yash.ui.*;
import com.tap.yash.entity.*;

public class App {
    public static void main( String[] args ){
        QuestionBank questionBank = new QuestionBank();

        Question q=new Question();
        q.setid(1);
        int id=q.getid();
        q.toString();

        Scanner scanner = new Scanner (System.in);
        boolean running = true;

        int choice;
        UImanager uimanager = new UImanager();
    
        while (running) {

            uimanager.displayMenu();

            choice = uimanager.getuserChoice();

            switch (choice) {
                case 1:
                    Question newQuestion = uimanager.getQuestionInput();
                    questionBank.add(newQuestion);
                    break;
               case 2:
                
                    int questionIdToRemove = uimanager.getQuestionIdInput();
                    questionBank.remove(questionIdToRemove);

                    break;
              case 3:
                  
                   int questionIDtoUpdate = uimanager.getQuestionIdInput();
                   Question updatedQuestion = uimanager.getQuestionInput();
                   questionBank.UpdateQuestion( questionIDtoUpdate, updatedQuestion);
                   break;
              case 4:
                    List<Question> allQuestions = questionBank.getAllQuestions();
                    uimanager.displayQuestions(allQuestions);
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
//mvn clean compile exec:java
