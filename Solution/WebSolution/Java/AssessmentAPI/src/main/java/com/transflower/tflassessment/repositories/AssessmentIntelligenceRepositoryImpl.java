package com.transflower.tflassessment.repositories;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.AnnualCandidateResult;
@Repository
public class AssessmentIntelligenceRepositoryImpl implements AssessmentIntelligenceRepository {

    private static Connection connection;
  static {
        try {
            Properties props = new Properties();
            try (InputStream input = AssessmentIntelligenceRepositoryImpl.class.getClassLoader().getResourceAsStream("application.properties")) {
                props.load(input);
            }

            String url = props.getProperty("db.url");
            String username = props.getProperty("db.username");
            String encPass = props.getProperty("db.password"); 
            AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
            textEncryptor.setPassword("TransFlower"); 
            String pass = textEncryptor.decrypt(encPass.replace("ENC(", "").replace(")", ""));

            String driver = props.getProperty("db.driver");

            Class.forName(driver);
            connection = DriverManager.getConnection(url, username, pass);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error in connecting to database");
        }
    }
  
    @Override
    public List<AnnualCandidateResult> getCandidateResults(int candidateId, int year) {
    
        List<AnnualCandidateResult> results = new ArrayList<AnnualCandidateResult>();
        try{
            
        Statement statement = connection.createStatement();
        String query = "SELECT candidatetestresults.score, subjects.title, tests.id " +
                        "FROM candidatetestresults " +
                        "JOIN tests ON (tests.id = candidatetestresults.testid) " +
                        "JOIN subjects ON (subjects.id = tests.subjectid) " +
                        "WHERE candidatetestresults.candidateid = " + candidateId + 
                        " AND YEAR(teststarttime) = " + year;
                                                        
        ResultSet result = statement.executeQuery(query);

        while(result.next())
                {
                    AnnualCandidateResult  obj= new AnnualCandidateResult();
                    obj.setScore(result.getInt("score"));
                    obj.setCandidateId(result.getInt("id"));
                    obj.setSubjectTitle(result.getString("title"));
                    results.add(obj);
                }
            }
            catch(Exception e){
                    System.out.println(e);
            }
            return results;
    }


    
}



