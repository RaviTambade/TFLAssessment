package com.transflower.tflassessment.demo.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public class EvaluationCriteriaRepositoryImpl implements EvaluationCriteriaRepository {

    private String Url = "jdbc:mysql://localhost:3306/assessmentdb";
    private String Username = "root";
    private String Password = "password";

    @Override

    public boolean updateSubject(int id, int subjectId) {
        String query = "UPDATE evaluationcriterias SET subjectId = " + subjectId + " WHERE id = " + id;

    public boolean updateSubject(int id,int subjectId) {
       String query = "UPDATE evaluationcriterias SET subjectId = " + subjectId + " WHERE id = " + id;
       try {
          Connection connection = DriverManager.getConnection(Url,Username,Password);
          Statement statement = connection.createStatement();
           statement.executeUpdate(query);
            return true;
        } catch (SQLException e) {
          e.printStackTrace();
            return false;
        }
    
    }
           

    @Override
    public boolean insertCriteria(EvaluationCriteria criteria) {
       String query = "UPDATE EvaluationCriteria SET subjectId = " + subjectId + " WHERE id = " + id;
        try {
            Connection connection = DriverManager.getConnection(Url,Username,Password);
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            String query = "INSERT INTO evaluationcriterias (title, subjectId) VALUES ('"
            + criteria.getTitle() + "','" + criteria.getSubjectId() + "')";
        
        try{
                Connection connection = DriverManager.getConnection(Url, Username, Password);
                Statement statement = connection.createStatement();
                statement.executeUpdate(query);
                return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        
    }
    @Override
    public boolean updateCriteria(int evaluationCriteriaId, int id) {
        
     String query = "UPDATE questionbank SET evaluationcriteriaid = "+evaluationCriteriaId + " WHERE id = "+ id+";";

        try {
                Connection connection = DriverManager.getConnection(Url, Username, Password);
                 Statement statement = connection.createStatement(); 
                 statement.executeUpdate(query);
                 return true;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

    }
}
