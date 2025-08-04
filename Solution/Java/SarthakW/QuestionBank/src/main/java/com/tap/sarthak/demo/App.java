package com.tap.sarthak.demo;

import java.util.ArrayList;
import java.sql.*;
import com.tap.sarthak.Entity.Question;
import com.tap.sarthak.Reporistory.DBManager;
import com.tap.sarthak.UI.UiManager;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) throws Exception
    {
         int choice = 0;
        do {
            UiManager.displayMenu();
            choice = UiManager.getUserChoice();
            switch (choice) {
                case 1: {
                    ArrayList<Question> questions = new ArrayList<Question>();
                    questions = DBManager.getAll();
                    for (Question q : questions) {
                        System.out.println(q);
                    }
                }
                    break;
                case 2: {
                    Question question = UiManager.getInputquestion();
                    boolean status = DBManager.insert(question);
                    if (status) {
                        UiManager.successful();
                    } else {
                        UiManager.failed();
                    }
                }
                    break;
                case 3: {
                    int id = UiManager.getInputId();
                    Question question = UiManager.getInputquestion();
                    boolean status =DBManager.update(id, question);
                    if (status) {
                        UiManager.successful();
                    } else {
                        UiManager.failed();
                    }
                }
                    break;

                case 4: {
                    int id = UiManager.getInputId();
                    boolean status = DBManager.delete(id);
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

