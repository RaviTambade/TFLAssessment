package com.tap.pankaj.DBManagement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

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
            System.out.println("Connection successfull");
        } catch (SQLException e) {
            System.out.println("Failed to connect to database.");
        }
    }

    public static int getAll() {

        String querySelect = "SELECT * FROM tflstud;";

        try {
            Statement statement = connection.createStatement();
            ResultSet resultEmployees = statement.executeQuery(querySelect);
            //ResultSetMetaData restultEmployeesMetadata = resultEmployees.getMetaData();
            //int columnCount = restultEmployeesMetadata.getColumnCount();

            int rows = UIManager.displaySelectResult(resultEmployees);
            resultEmployees.close();
            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static int insert() {
        String queryInsert = "INSERT INTO tflstud(Id, Name) VALUES(1,'Pankaj_Bhor');";
        try {
            int rows = statement.executeUpdate(queryInsert);

            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static int update() {
        String queryupdate = "UPDATE tflstud SET Name='Ram' WHERE Id=1;";
        try {
            int rows = statement.executeUpdate(queryupdate);
            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static int delete() {
        String querydelete = "DELETE FROM tflstud WHERE Id=1;";
        try {
            int rows = statement.executeUpdate(querydelete);
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
        String queryalter = "ALTER TABLE tflstud ADD COLUMN City VARCHAR(20);";
        try {
            statement.execute(queryalter);
            return true;
        } catch (SQLException e) {
            System.out.println(e);
            return false;
        }
    }

    public static boolean create() {
        String querycreate = "CREATE TABLE tflstud(Id INT(5),Name VARCHAR(20));";
        try {
            statement.execute(querycreate);
            return true;
        } catch (SQLException e) {
            System.out.println(e);
            return false;
        }
    }

    public static int truncate() {
        String querytruncate = "TRUNCATE TABLE tflstud;";
        try {
            int rows = statement.executeUpdate(querytruncate);
            return rows;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    public static boolean drop() {
        String querydrop = "DROP TABLE tflstud;";
        try {
            statement.execute(querydrop);
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
