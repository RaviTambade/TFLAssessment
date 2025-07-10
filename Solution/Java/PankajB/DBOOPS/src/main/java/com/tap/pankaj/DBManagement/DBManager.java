package com.tap.pankaj.DBManagement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.tap.pankaj.UI.UIManager;
public class DBManager {
    
    public static Connection connection;
    public static Statement statement;
    static {
            try {
                String url = "jdbc:mysql://localhost:3306/tp";
                String username = "root";
                String password = "password";
                connection = DriverManager.getConnection(url, username, password);  
                statement = connection.createStatement();
            }catch (SQLException e) {
                System.out.println("Failed to connect to database.");
        }
    }
    
    public static void getAll() {
         
        String querySelect = "SELECT * FROM tflstud;";
       
        try {            
            System.out.println("Connection successfull");
            Statement statement = connection.createStatement();
            ResultSet resultEmployees = statement.executeQuery(querySelect);
            //ResultSetMetaData restultEmployeesMetadata = resultEmployees.getMetaData();
            //int columnCount = restultEmployeesMetadata.getColumnCount();
       
            UIManager.displaySelectResult(resultEmployees);
            resultEmployees.close();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void insert() {
        String queryInsert = "INSERT INTO tflstud(Id, Name) VALUES(1,'Pankaj_Bhor');";
        try {          
            System.out.println("Connection successfull");
            System.out.println("Rows Affected: "+statement.executeUpdate(queryInsert));
            System.out.println("Data inserted successfully");
        } 
        catch (SQLException e) {
            System.out.println(e);
        }
    }
    
    public static void update() { 
        String queryupdate = "UPDATE tflstud SET Name='Ram' WHERE Id=1;";
        try {
            System.out.println("Rows Affected: "+statement.executeUpdate(queryupdate));
            System.out.println("Data updated successfully");
        } 
        catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void delete() {
        String querydelete = "DELETE FROM tflstud WHERE Id=1;";
        try {            
            System.out.println("Connection successfull");
            System.out.println("Rows Affected: "+statement.executeUpdate(querydelete));
            System.out.println("Data Deleted successfully");
        } 
        catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void alter() {
        // Scanner scanner = new Scanner(System.in);
        // System.out.println("Enter the table name:");
        // String tableName = scanner.next();
        // System.out.println("What you want to alter(Add, Modify, Drop column): ");
        // String alterType = scanner.next();
        // System.out.println("Enter the column name: ");
        // String colName = scanner.next();
        // System.out.println("Enter datatype(int, varchar, datetime, etc): ");
        // String dataType= scanner.next();
        // System.out.println("Enter size: ");
        // int size=scanner.nextInt();
        // System.out.println("Selected Database: tp"+"\nTable Name: "+tableName+"\nOperation: "+alterType+"\nColumn Name: "+colName+"\nDatatype: "+dataType+"\nSize: "+size);
        // String queryalter = "ALTER TABLE "+tableName+" "+alterType+" COLUMN "+colName+" "+dataType+"("+size+")"+";";
        String queryalter = "ALTER TABLE tflstud ADD COLUMN City VARCHAR(20);";
        try {
            System.out.println("Rows Affected: "+statement.execute(queryalter));
            System.out.println("Table Altered successfully");
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void create() {
        String querycreate = "CREATE TABLE tflstud(Id INT(5),Name VARCHAR(20));";
        try {
            System.out.println("Rows Affected: "+statement.execute(querycreate));
            System.out.println("Table Created successfully");
        } 
        catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void truncate() {
        String querytruncate = "TRUNCATE TABLE tflstud;";
        try {
            System.out.println("Rows Affected: "+statement.execute(querytruncate));
            System.out.println("Table Truncated successfully");
        } 
        catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void drop() {
        String querydrop = "DROP TABLE tflstud;";
        try {
            System.out.println("Rows Affected: "+statement.execute(querydrop));
            System.out.println("Table Dropped successfully");
        } 
        catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void close() {
        UIManager uimanager = new UIManager();
        try {
            connection.close();   
            statement.close();
            uimanager.scanner.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

