package com.tap.assesmentDb.Main;


import java.util.ArrayList;

import com.tap.assesmentDb.Entity.Question;
import com.tap.assesmentDb.Repository.DbManager;
import com.tap.assesmentDb.UI.UiManager;

public class App {
    public static void main(String[] args) throws Exception {

        int choice = 0;
        do {
            UiManager.displayMenu();
            choice = UiManager.getUserChoice();
            switch (choice) {
                case 1: {
                    ArrayList<Question> questions = new ArrayList<Question>();
                    questions = DbManager.getAll();
                    for (Question q : questions) {
                        System.out.println(q);
                    }
                }
                    break;
                case 2: {
                    Question question = UiManager.getInputQuestion();
                    boolean status = DbManager.insert(question);
                    if (status) {
                        UiManager.successful();
                    } else {
                        UiManager.failed();
                    }
                }
                    break;
                case 3: {
                    int id = UiManager.getInputId();
                    Question question = UiManager.getInputQuestion();
                    boolean status = DbManager.update(id, question);
                    if (status) {
                        UiManager.successful();
                    } else {
                        UiManager.failed();
                    }
                }
                    break;

                case 4: {
                    int id = UiManager.getInputId();
                    boolean status = DbManager.delete(id);
                    if (status) {
                        UiManager.successful();
                    } else {
                        UiManager.failed();
                    }
                }
                    break;
                case 5:
                    UiManager.thankyoumsg();
                    System.exit(0);
                    break;

                default:
                    UiManager.wrongChoice();
                   
                    break;
            }
        } while (choice != 5);

    }
}
