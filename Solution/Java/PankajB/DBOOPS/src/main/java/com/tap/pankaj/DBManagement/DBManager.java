package com.tap.pankaj.DBManagement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import com.tap.pankaj.UI.UIManager;
import com.tap.pankaj.entity.data;

public class DBManager {
    
    static data data2 = new data();
    public static Connection connection;
    public static Statement statement;
    static {
        try {
            String url = "jdbc:mysql://localhost:3306/tp";
            String username = "root";
            String password = "password";
            connection = DriverManager.getConnection(url, username, password);
            statement = connection.createStatement();
            System.out.println("Connection successfull");
        } catch (SQLException e) {
            System.out.println("Failed to connect to database.");
        }
    }

    public static int getAll() {
        String querySelect = "SELECT * FROM tflstud;";

        try {
            ResultSet resultEmployees = statement.executeQuery(querySelect);
            ResultSetMetaData resultMetaData = resultEmployees.getMetaData();
            int columnCount = resultMetaData.getColumnCount();
            //System.out.println(columnCount);
            UIManager.displaySelectResult(resultMetaData, resultEmployees, columnCount);
            resultEmployees.close();
            return columnCount;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static int insert() {
        UIManager manager2 = new UIManager();
        data2 = manager2.getData();
        String queryInsert = "INSERT INTO tflstud(Name) VALUES('" +data2.name+ "');";
        try {
            int rows = statement.executeUpdate(queryInsert);

            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static int update() {
        UIManager manager2 = new UIManager();
        data2 = manager2.getData();
        String queryUpdate = "UPDATE tflstud SET Name='" +data2.name+ "' WHERE Id= " +data2.id+ ";";
        try {
            int rows = statement.executeUpdate(queryUpdate);
            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static int delete() {
        UIManager manager2 = new UIManager();
        data2 = manager2.getData();
        String queryDelete = "DELETE FROM tflstud WHERE Id= " +data2.id+ ";";
        try {
            int rows = statement.executeUpdate(queryDelete);
            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static boolean alter() {
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
        String queryAlter = "ALTER TABLE tflstud ADD COLUMN City VARCHAR(20);";
        try {
            statement.execute(queryAlter);
            return true;
        } catch (SQLException e) {
            System.out.println(e);
            return false;
        }
    }

    public static boolean create() {
        String queryCreate = "CREATE TABLE tflstud(Id INT primary key auto_increment, Name VARCHAR(20));";
        try {
            statement.execute(queryCreate);
            return true;
        } catch (SQLException e) {
            System.out.println(e);
            return false;
        }
    }

    public static int truncate() {
        String queryTruncate = "TRUNCATE TABLE tflstud;";
        try {
            int rows = statement.executeUpdate(queryTruncate);
            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static boolean drop() {
        String queryDrop = "DROP TABLE tflstud;";
        try {
            statement.execute(queryDrop);
            return true;
        } catch (SQLException e) {
            System.out.println(e);
            return false;
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
