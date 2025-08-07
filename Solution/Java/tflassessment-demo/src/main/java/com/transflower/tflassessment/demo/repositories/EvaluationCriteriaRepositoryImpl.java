package com.transflower.tflassessment.demo.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public class EvaluationCriteriaRepositoryImpl implements EvaluationCriteriaRepository {

    private String Url = "jdbc:mysql://localhost:3306/tflassessment";
    private String Username = "root";
    private String Password = "password";

    @Override
    public boolean updateSubject(int id, int subjectId) {
        String query = "UPDATE EvaluationCriteria SET subjectId = " + subjectId + " WHERE id = " + id;
        try {
            Connection connection = DriverManager.getConnection(Url, Username, Password);
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;

    }

    @Override
    public boolean insertCriteria(EvaluationCriteria criteria) {
       String query = "UPDATE EvaluationCriteria SET subjectId = " + subjectId + " WHERE id = " + id;
        try {
            Connection connection = DriverManager.getConnection(Url, Username, Password);
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        }
        return true;
    }

    @Override
    public boolean updateCriteria(int EvaluationCriteriaId, int subjectId) {

        String query = "UPDATE  SET subjectId = " + subjectId + " WHERE id = " + EvaluationCriteriaId;
        try (
                Connection connection = DriverManager.getConnection(Url, Username, Password); Statement statement = connection.createStatement(); ResultSet result = statement.executeQuery(query);) {

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return true;

    }

}
