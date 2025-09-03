package com.transflower.tflassessment.demo.repositories;

import java.util.*;

import java.sql.*;
import com.transflower.tflassessment.demo.entities.AnnualCandidateResult;
import com.transflower.tflassessment.demo.entities.Question;

public class AssessmentIntelligenceRepositoryImpl implements AssessmentIntelligenceRepository {

    private List<AnnualCandidateResult> annualCandidateResults;
    Connection connection;
    public AssessmentIntelligenceRepositoryImpl() {
            
        try {
            String URL = "jdbc:mysql://localhost:3306/assessmentdb";
            String Username = "root";
            String Password = "password";
            connection = DriverManager.getConnection(URL, Username, Password);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Connection Falied");
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
                    results.add(obj);
                }
            }
            catch(Exception e){
                    System.out.println(e);
            }
            return results;
    }


    public static void main(String [] args)
    {
         // ================= AssessmentIntelligenceRepository =================
        AssessmentIntelligenceRepositoryImpl intelligenceRepo = new AssessmentIntelligenceRepositoryImpl();
        List<AnnualCandidateResult> results = intelligenceRepo.getCandidateResults(2, 2015);
        for (AnnualCandidateResult result : results)
         {
            System.out.println("Candidate ID: " + result.getCandidateId() + " Score: " + result.getScore());
        }
    }
}



