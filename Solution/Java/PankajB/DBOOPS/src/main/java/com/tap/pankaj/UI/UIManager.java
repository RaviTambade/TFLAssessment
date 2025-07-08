package com.tap.pankaj.UI;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;
public class UIManager {
    
    public Scanner scanner = new Scanner(System.in);
    public void displayMenu() {
        System.out.println("****Menu for database connectivity operations****");
            System.out.println("1. Create");
            System.out.println("2. Insert");
            System.out.println("3. Update");
            System.out.println("4. Delete");
            System.out.println("5. Select");
            System.out.println("6. Truncate");
            System.out.println("7. Alter");
            System.out.println("8. Drop");
            System.out.println("9. Exit");
    }

    public int getChoice() {
            System.out.println("Enter your choice");
            return scanner.nextInt();
    }

    public static void displaySelectResult(ResultSet result) {
        try {
            while (result.next()) {
                for (int i = 1; i <= 2; i++) {
                    System.out.printf("%-20s", result.getString(i));
                }
                System.out.println();
            }
        }catch(SQLException e) {
            System.out.println(e);
        }
    }
}
