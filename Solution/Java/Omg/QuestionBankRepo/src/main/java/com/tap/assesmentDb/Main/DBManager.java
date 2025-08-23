package com.tap.assesmentDb.Main;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBManager {

    private static Connection connection;

    static {

        try {

            String URL = "jdbc:mysql://localhost:3306/assessmentdb";
            String USERNAME = "root";
            String PASSWORD = "password";
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public List<Question> getallQuestions() {
        try {

            List<Question> quesstions=new ArrayList<Question>();
            Statement smt = connection.createStatement();
            ResultSet rs = smt.executeQuery("select * from questionbank");
            System.out.println("\n***********************");
            while (rs.next()) {
                System.out.println(" { " + "id: " + rs.getInt(1) + " , SubjectId: " + rs.getString(2)
                        + " , Question: " + rs.getString(3)
                        + " , Option A: " + rs.getString(4)
                        + " , Option B: " + rs.getString(5)
                        + " , Option C: " + rs.getString(6)
                        + " , Option D: " + rs.getString(7)
                        + " , Answer Key: " + rs.getString(8)
                        + " , Evaluation Criteria: " + rs.getInt(9) + " } ");
                System.out.println();
            }

            System.out.println("topics display successfully....");

        }

        catch (Exception e)

        {
            System.out.println("the eception is: " + e.getMessage());
        }
    }

    public void insertQuestion(String subjectId, String question, String optionA, String optionB, String optionC,
            String optionD, String answerKey, int evaluationCriteria) {
        try {
            PreparedStatement pstmt = connection.prepareStatement(
                    "INSERT INTO questionbank (SubjectId, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES (?,? , ?, ?, ?, ?, ?, ?)");
            pstmt.setString(1, subjectId);
            pstmt.setString(2, question);
            pstmt.setString(3, optionA);
            pstmt.setString(4, optionB);
            pstmt.setString(5, optionC);
            pstmt.setString(6, optionD);
            pstmt.setString(7, answerKey);
            pstmt.setInt(8, evaluationCriteria);
            int rowsAffected = pstmt.executeUpdate();
            System.out.println(rowsAffected + " row(s) inserted successfully.");
        } catch (SQLException e) {
            System.out.println("Error inserting question: " + e.getMessage());
        }
    }

    public void deleteQuestion(int questionId) {
        try {
            PreparedStatement pstmt = connection.prepareStatement("DELETE FROM questionbank WHERE id = ?");
            pstmt.setInt(1, questionId);
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Question with ID " + questionId + " deleted successfully.");
            } else {
                System.out.println("No question found with ID " + questionId + ".");
            }
        } catch (SQLException e) {
            System.out.println("Error deleting question: " + e.getMessage());
        }
    }

    public void updateQuestion(int questionId, String subjectId, String question, String optionA, String optionB,
            String optionC, String optionD, String answerKey, int evaluationCriteria) {
        try {
            PreparedStatement pstmt = connection.prepareStatement(
                    "UPDATE questionbank SET SubjectId = ?, title = ?, a = ?, b = ?, c = ?,d = ?, answerkey = ?, evaluationcriteriaid = ? WHERE id = ?");
            pstmt.setString(1, subjectId);
            pstmt.setString(2, question);
            pstmt.setString(3, optionA);
            pstmt.setString(4, optionB);
            pstmt.setString(5, optionC);
            pstmt.setString(6, optionD);
            pstmt.setString(7, answerKey);
            pstmt.setInt(8, evaluationCriteria);
            pstmt.setInt(9, questionId);
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Question with ID " + questionId + " updated successfully.");
            } else {
                System.out.println("No question found with ID " + questionId + ".");
            }
        } catch (SQLException e) {
            System.out.println("Error updating question: " + e.getMessage());
        }
    }

}