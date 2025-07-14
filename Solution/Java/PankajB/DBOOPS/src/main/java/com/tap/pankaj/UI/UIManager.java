package com.tap.pankaj.UI;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Scanner;

import com.tap.pankaj.demo.App;
import com.tap.pankaj.entity.data;
public class UIManager {
    
    public Scanner scanner = new Scanner(System.in);
    public void displayMenu() {
        System.out.println();
        System.out.println("****Menu for Database Connectivity Operations****");
        System.out.println();
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
    public data getData() {
        data data1 = new data();
        switch(App.choice) {

            case 2: {
                System.out.println( "Enter Name: ");
                data1.setName(scanner.nextLine());
                System.out.println();
                break;
            }

            case 3: {
                System.out.println( "Enter ID: ");
                data1.setId(scanner.nextInt());
                scanner.nextLine();
                System.out.println( "Enter Name: ");
                data1.setName(scanner.nextLine());
                System.out.println();                
                break;
            }

            case 4: {
                System.out.println( "Enter ID: ");
                data1.setId(scanner.nextInt());
                scanner.nextLine();
                break;
            }
        }
        return data1;
    }

    public int getChoice() {
            System.out.println();
            System.out.print("Enter your choice: ");
            return scanner.nextInt();
    }

    public static void displaySelectResult(ResultSetMetaData metadata, ResultSet result, int columnCount) {
        try {
            System.out.println("");
            System.out.println("----------------------------------------");
            for (int i=1; i<=columnCount; i++) {
                System.out.printf("%-20s", metadata.getColumnName(i));
            }
            System.out.println();
            while (result.next()) {
                for (int i = 1; i <= columnCount; i++) {                                  
                    System.out.printf("%-20s", result.getString(i));
                }
                System.out.println();
            }
            System.out.println("----------------------------------------");
            System.out.println();
        }catch(SQLException e) {
            System.out.println(e);
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
