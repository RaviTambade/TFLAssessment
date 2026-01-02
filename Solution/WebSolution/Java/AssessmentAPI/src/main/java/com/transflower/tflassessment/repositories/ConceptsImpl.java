 package com.transflower.tflassessment.repositories;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.concurrent.CompletableFuture;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.*;



 @Repository
 public class ConceptsImpl implements Concepts {

    private static Connection connection;   

    static {
        try{
             Properties props = new Properties();
       
        try (InputStream input = ConceptsImpl.class.getClassLoader().getResourceAsStream("application.properties")) { 
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
   
    public CompletableFuture<Boolean> updateSubject(int id, int subjectId) {
    return CompletableFuture.supplyAsync(() -> {
        String query = "UPDATE concepts SET subjectId = ? WHERE id = ?";

        try (PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, subjectId);
            statement.setInt(2, id);
            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    });
}


    @Override
    public CompletableFuture<Boolean> insertConcept(Concepts criteria) {
        return CompletableFuture.supplyAsync(()->{
        String query = "INSERT INTO concepts(title, subjectId) VALUES (?, ?)";
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

        });
    }

    @Override
    public CompletableFuture<Boolean> updateConcept(int id, int evaluationCriteriaId) {
        return CompletableFuture.supplyAsync(()->{
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
        });
    }

    @Override
    public CompletableFuture<List<Concepts>> getConceptBySubjectId(int subjectId) {
    return CompletableFuture.supplyAsync(() -> {
        List<Concepts> concepts = new ArrayList<>();
        String query = "SELECT * FROM concepts WHERE subjectId = ?";

        try (PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, subjectId);

            try (ResultSet rs = statement.executeQuery()) {
                while (rs.next()) {
                    Concepts concept = new Concepts();
                    concept.setId(rs.getInt("id"));
                    concept.setTitle(rs.getString("title"));
                    concept.setSubjectId(rs.getInt("subjectId"));
                    concepts.add(concept);
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return concepts;
    });
}

    // @Override
    // public CompletableFuture<List<ConceptQuestionCount>> getConceptQuestionCount(int subjectId){
    //     return null;
    // }

   
}
