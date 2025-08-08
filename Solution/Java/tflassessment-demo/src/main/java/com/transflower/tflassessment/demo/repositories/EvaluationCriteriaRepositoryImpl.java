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
<<<<<<< HEAD
    public boolean updateSubject(int id, int subjectId) {
        String query = "UPDATE evaluationcriterias SET subjectId = " + subjectId + " WHERE id = " + id;
=======
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
<<<<<<< HEAD
       String query = "UPDATE EvaluationCriteria SET subjectId = " + subjectId + " WHERE id = " + id;
>>>>>>> 948a715bb6906672a0aa84a6064efbd114d6fc51
        try {
            Connection connection = DriverManager.getConnection(Url,Username,Password);
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
<<<<<<< HEAD
             return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
       

    }

    @Override
    public boolean insertCriteria(EvaluationCriteria ec) {
        String query = "INSERT INTO evaluationcriterias (title, subjectId) VALUES ('"
                +ec.getTitle() + "'," + ec.getSubjectId() + ")";
=======
=======
            String query = "INSERT INTO evaluationcriterias (title, subjectId) VALUES ('"
            + criteria.getTitle() + "','" + criteria.getSubjectId() + "')";
        
>>>>>>> 948a715bb6906672a0aa84a6064efbd114d6fc51
        try{
                Connection connection = DriverManager.getConnection(Url, Username, Password);
                Statement statement = connection.createStatement();
                statement.executeUpdate(query);
                return true;
<<<<<<< HEAD
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        
=======
>>>>>>> 2167425a6f4a8e4a0bbe89fa2f5171429ea9dc0f
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
<<<<<<< HEAD
        }
        return true;
=======
        
>>>>>>> 2167425a6f4a8e4a0bbe89fa2f5171429ea9dc0f
>>>>>>> 948a715bb6906672a0aa84a6064efbd114d6fc51
    }
    @Override
    public boolean updateCriteria(int evaluationCriteriaId, int id) {
        
     String query = "UPDATE questionbank SET evaluationcriteriaid = "+evaluationCriteriaId + " WHERE id = "+ id+";";

<<<<<<< HEAD
        String query = "UPDATE evaluationcriterias SET subjectId = " + subjectId + " WHERE id = " + EvaluationCriteriaId;
=======
>>>>>>> 948a715bb6906672a0aa84a6064efbd114d6fc51
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
