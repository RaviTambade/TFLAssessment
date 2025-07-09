package com.tap.pankaj.demo;

import com.tap.pankaj.DBManagement.DBManager;
import com.tap.pankaj.UI.UIManager;

public class App {

    public static void main(String args[]) {
        int choice;
        UIManager manager = new UIManager();
        do {
            manager.displayMenu();
            choice = manager.getChoice();
            switch (choice) {
                case 1: {
                    DBManager.create();
                    break;
                }
                case 2: {
                    DBManager.insert();
                    break;
                }
                case 3: {
                    DBManager.update();
                    break;
                }
                case 4: {
                    DBManager.delete();
                    break;
                }
                case 5: {
                    DBManager.getAll();
                    break;
                }
                case 6: {
                    DBManager.truncate();
                    break;
                }
                case 7: {
                    DBManager.alter();
                    break;
                }
                case 8: {
                    DBManager.drop();
                    break;
                }
                case 9: {
                    DBManager.close();
                    System.out.println("Your changes are reflected in the database");
                    break;
                }
                default:
                    System.out.println("Invalid Choice");
                    break;
            }

        } while (choice != 9);
    }
}
