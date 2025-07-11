package com.tap.pankaj.UI;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.tap.pankaj.demo.App;
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

    public static int displaySelectResult(ResultSet result) {
        int count = 0;                                                                          
        try {
            while (result.next()) {
                for (int i = 1; i <= 2; i++) {                                  
                    System.out.printf("%-20s", result.getString(i));
                }
                count++;
                System.out.println();
            }
            return count;
        }catch(SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static void displayMessage(int rows) {
        switch (App.choice) {
            case 1:{
                System.out.println("Table Created successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 2:{
                System.out.println("Data inserted successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 3:{
                System.out.println("Data Updated successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 4:{
                System.out.println("Data Deleted successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 5:{
                System.out.println("Data Displayed Successfully");
                System.out.println("Rows Returned: "+rows);
                break;
            }
            case 6:{
                System.out.println("Table Truncated successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 7:{
                System.out.println("Table Altered successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 8:{
                System.out.println("Table Dropped successfully");
                System.out.println("Rows Affected: "+rows);
                break;
            }
            case 9:{
                System.out.println("Your changes are reflected in the database");
                break;
            }
            default:
            System.out.println("Invalid Choice");
        }
    }
}
