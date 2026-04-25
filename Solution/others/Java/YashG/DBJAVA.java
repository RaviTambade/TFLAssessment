This is a simple basic java program to connnect to the database and execute a query to display data from the table


import java.sql.*;

public class DBJAVA {
    public static void main(String[] args) throws Exception {
        String URL = "jdbc:mysql://localhost:3306/tflmentoringdb";
        String USERNAME = "root";
        String PASSWORD = "yash0925";
        Connection connection = null;

        connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        System.out.println("Connection established successfully...");

        System.out.println();
        System.out.println();
        System.out.println();
        Statement smt = connection.createStatement();
        ResultSet rs = smt.executeQuery("select * from topics");

        ResultSetMetaData rmd = rs.getMetaData();
        int columncount = rmd.getColumnCount();
        System.out.println("Topics");
        for (int i = 1; i <= columncount; i++) {
            System.out.print(rmd.getColumnName(i) + "\t");
        }
        System.out.println("\n*");
        while (rs.next()) {
            System.out.println(rs.getInt(1) + "  " + rs.getString(2) + "  " + rs.getString(3)+"  "+rs.getInt(4));
            System.out.println();
            System.out.println();
        }
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println("topics display successfully....");
        connection.close();
    }
}

/*javac DBJAVA.java
java -cp ".;C:\Users\91902\OneDrive\Desktop\TFL\new tfl\database connectivity\mysql-connector-j-9.3.0.jar" DBJAVA

 */
