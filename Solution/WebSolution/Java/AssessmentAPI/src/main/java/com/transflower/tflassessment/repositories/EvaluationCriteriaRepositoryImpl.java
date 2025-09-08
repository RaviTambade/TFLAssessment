 package com.transflower.tflassessment.repositories;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.EvaluationCriteria;

// import com.transflower.tflassessment.entities.EvaluationCriteria;

 @Repository
 public class EvaluationCriteriaRepositoryImpl implements EvaluationCriteriaRepository {

  private String Url = "jdbc:mysql://localhost:3306/assessmentdb";
   private String Username = "root";
    private String Password = "password";

    @Override
    public boolean updateSubject(int id, int subjectId) {
        String query = "UPDATE evaluationcriterias SET subjectId = ? WHERE id = ?";
        try (
            Connection connection = DriverManager.getConnection(Url, Username, Password);
            PreparedStatement statement = connection.prepareStatement(query)
        ) {
            statement.setInt(1, subjectId);
            statement.setInt(2, id);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean insertCriteria(EvaluationCriteria criteria) {
        String query = "INSERT INTO evaluationcriterias (title, subjectId) VALUES (?, ?)";
        try (
            Connection connection = DriverManager.getConnection(Url, Username, Password);
            PreparedStatement statement = connection.prepareStatement(query)
        ) {
            statement.setString(1, criteria.getTitle());
            statement.setInt(2, criteria.getSubjectId());
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateCriteria(int id, int evaluationCriteriaId) {
        String query = "UPDATE questionbank SET evaluationcriteriaid = ? WHERE id = ?";
        try (
            Connection connection = DriverManager.getConnection(Url, Username, Password);
            PreparedStatement statement = connection.prepareStatement(query)
        ) {
            statement.setInt(1, evaluationCriteriaId);
            statement.setInt(2, id);
            statement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

   
}
