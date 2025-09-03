package com.transflower.tflassessment.demo.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;

public class CandidateAnswerRepositoryImpl implements CandidateAnswerRepository {

    private String URL = "jdbc:mysql://localhost:3306/assessmentdb";
    private String USERNAME = "root";
    private String PASSWORD = "password";

    @Override
    public boolean insertCandidateAnswer(int candidateId, List<CandidateAnswer> answers) {
        String query = "INSERT INTO candidateanswers (candidateid, testquestionid, answerkey) VALUES (?, ?, ?)";
        boolean status = false;
        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD))

        {

            for (CandidateAnswer ans : answers) {
                PreparedStatement preparedStatement = connection.prepareStatement(query);
                preparedStatement.setInt(1, candidateId);
                preparedStatement.setInt(2, ans.getTestQuestionId());
                preparedStatement.setString(3, ans.getAnswerKey());
                preparedStatement.executeUpdate(); // Add to batch
            }

            status = true; // Execute batch insert
            // return result.length == answers.size(); // Return true if all inserted

        } catch (Exception e) {
            System.out.println(e);

        }
        return status;

    }

    @Override
    public List<CandidateAnswer> getCandidateAnswer(int CandidateId, int TestId) {
        List<CandidateAnswer> candidates = new ArrayList<>();
        String query = "SELECT * FROM candidateanswers WHERE candidateid = ? AND testquestionid IN (SELECT id FROM testquestions WHERE testId = ?)";
        try (
                Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
                PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, CandidateId);
            statement.setInt(2, TestId);
            ResultSet resultset = statement.executeQuery();
            while (resultset.next()) {
                CandidateAnswer answer = new CandidateAnswer();
                answer.setCandidateId(resultset.getInt(CandidateId));
                answer.setTestQuestionId(resultset.getInt(TestId));
                candidates.add(answer);
            }

        } catch (Exception e) {
            System.out.println(e);
            return null;
        }

        return candidates;

    }

    @Override
    public List<CandidateAnswer> getCandidateAnswerResult(int CandidateId, int TestId) {
        List<CandidateAnswer> candidateAnswers = new ArrayList<>();
        String query = "SELECT ca.testquestionid,ca.answerkey As CandidateAnswer, qb.answerkey AS CorrectAnswer" +
                " FROM candidateanswers ca" +
                " JOIN testquestions tq ON ca.testquestionid = tq.id" +
                " JOIN questionbank qb ON tq.questionbankid = qb.id" +
                " WHERE ca.candidateid = ? AND tq.testid = ?";

        try (
                Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
                PreparedStatement statement = conn.prepareStatement(query)) {

            statement.setInt(1, CandidateId);
            statement.setInt(2, TestId);

            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                CandidateAnswer answer = new CandidateAnswer();
                answer.setId(rs.getInt("id")); // assuming you have a primary key column
                answer.setCandidateId(rs.getInt("CandidateId"));
                answer.setTestId(rs.getInt("TestId"));
                answer.setTestQuestionId(rs.getInt("TestQuestionId"));

                candidateAnswers.add(answer);
            }
        }

        catch (Exception e) {
            System.out.println(e); // You can replace this with a logger
        }

        return candidateAnswers;

    }
@Override
    public CandidateTestDetails getCandidateTestDetails(int CandidateId, int TestId) {

        CandidateTestDetails details = new CandidateTestDetails();

        try 
        {
        Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);

            // Query candidate
            String candidateQuery = "SELECT id, firstname FROM employees WHERE id = ?";
            PreparedStatement stmt1 = connection.prepareStatement(candidateQuery);

            stmt1.setInt(1, CandidateId);
            ResultSet rs1 = stmt1.executeQuery();

            if (rs1.next()) {
                details.setCandidateId(rs1.getInt("id"));
                details.setCandidateName(rs1.getString("firstname"));
            }

            // Query test
            String testQuery = "SELECT id, name, passinglevel, scheduleddate FROM tests WHERE id = ?";
            PreparedStatement stmt2 = connection.prepareStatement(testQuery);

            stmt2.setInt(1, TestId);
            ResultSet rs2 = stmt2.executeQuery();

            if (rs2.next()) {
                details.setTestId(rs2.getInt("id"));
                details.setTestName(rs2.getString("name"));
                details.setTestDate(rs2.getTimestamp("scheduleddate").toLocalDateTime());
                details.setTestPassingLevel(rs2.getInt("passinglevel"));
            }

        } catch (Exception e) {
            System.out.println(e);
        }

        return details;

    }

    public static void main(String[] args) 
    {
        System.out.println("-------------- Insert Candidate Answer------------");
        CandidateAnswerRepositoryImpl answer=new CandidateAnswerRepositoryImpl();
        List<CandidateAnswer> answers=answer.getCandidateAnswer(1,1);
         for(CandidateAnswer ans:answers)
         {
            int candidateid=ans.getCandidateId();
            int TestId=ans.getTestQuestionId();
            System.out.println("CandidateId:"+ candidateid + "TestId:"+ TestId);
        }

        System.out.println("-------------Get Candidate Answer-----");
        //CandidateAnswerRepositoryImpl answers=new CandidateAnswerRepositoryImpl();
        List<CandidateAnswer>answ=new ArrayList<CandidateAnswer>();
        answ.add(new CandidateAnswer(101,1,1, "A"));
        answ.add(new CandidateAnswer(102,1,2, "B"));
        boolean success = answer.insertCandidateAnswer(1, answ);
        if (success) 
        {
            
             System.out.println("Candidate answers inserted successfully.");
        } else 
        {
             System.out.println("Failed to insert candidate answers.");
        }

        System.out.println("------------getCandidateAnswerResult---------");
        List<CandidateAnswerResult> ansResult=new ArrayList<CandidateAnswerResult>();
        ansResult.add(new CandidateAnswerResult(1,"C","A",true));
         ansResult.add(new CandidateAnswerResult(2,"D","C",false));
        
         for(CandidateAnswerResult ans:ansResult)
        {         
            int TestQuestionId=ans.getTestQuestionId();
            String CandidateAnswer=ans.getCandidateAnswer();
            String CorrectAnswer=ans.getCorrectAnswer();
            System.out.println("TestQuestionId:"+TestQuestionId+ "CandidateAnswer"+CandidateAnswer+"CorrectAnswer:"+CorrectAnswer);
        }

        System.out.println("--------------CandidateTestDetails -------");

         CandidateAnswerRepositoryImpl repo=new CandidateAnswerRepositoryImpl();
         CandidateTestDetails details=repo.getCandidateTestDetails(6,2);
         
         System.out.println(details);



        

        }
        

}


