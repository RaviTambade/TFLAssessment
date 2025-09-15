 package com.transflower.tflassessment.repositories;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Properties;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.EvaluationCriteria;



 @Repository
 public class EvaluationCriteriaRepositoryImpl implements EvaluationCriteriaRepository {

    private static Connection connection;   

    static {
        try{
             Properties props = new Properties();
       
        try (InputStream input = EvaluationCriteriaRepositoryImpl.class.getClassLoader().getResourceAsStream("application.properties")) { 
            props.load(input);
        }
            String url = props.getProperty("db.url");
            String username = props.getProperty("db.username");
            String encPass = props.getProperty("db.password");

            AES256TextEncryptor textEncryptor= new AES256TextEncryptor();
            textEncryptor.setPassword("TransFlower");
            String pass = textEncryptor.decrypt(encPass.replace("ENC(", "").replace(")", ""));

            String driver = props.getProperty("db.driver");
            Class.forName(driver);
            connection=DriverManager.getConnection(url,username,pass);
            
            
        } catch (Exception e) {
            System.out.println(e);
            
        }
    }
    
    @Override
    public boolean updateSubject(int id, int subjectId)  {
        String query = "UPDATE evaluationcriterias SET subjectId = ? WHERE id = ?";
        try (
            PreparedStatement statement = connection.prepareStatement(query)
        ) {
            statement.setInt(1, subjectId);
            statement.setInt(2, id);
            statement.executeUpdate();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean insertCriteria(EvaluationCriteria criteria) {
        String query = "INSERT INTO evaluationcriterias(title, subjectId) VALUES (?, ?)";
        try (
            PreparedStatement statement = connection.prepareStatement(query)
        ) {
            statement.setString(1, criteria.getTitle());
            statement.setInt(2, criteria.getSubjectId());
            statement.executeUpdate();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateCriteria(int id, int evaluationCriteriaId) {
        String query = "UPDATE questionbank SET evaluationcriteriaid = ? WHERE id = ?";
        try (
                PreparedStatement statement = connection.prepareStatement(query)
        ) {
            statement.setInt(1, evaluationCriteriaId);
            statement.setInt(2, id);
            statement.executeUpdate();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

   
}
