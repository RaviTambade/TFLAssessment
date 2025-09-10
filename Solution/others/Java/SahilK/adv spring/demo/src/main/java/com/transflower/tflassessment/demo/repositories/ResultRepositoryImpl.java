package com.transflower.tflassessment.demo.repositories;

import java.sql.*;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.demo.entities.AppearedCandidate;
import com.transflower.tflassessment.demo.entities.CandidateResultDetails;
import com.transflower.tflassessment.demo.entities.CandidateSubjectResults;
import com.transflower.tflassessment.demo.entities.FailedCandidateDetails;
import com.transflower.tflassessment.demo.entities.PassedCandidateDetails;
import com.transflower.tflassessment.demo.entities.Subject;
import com.transflower.tflassessment.demo.entities.TestAverageReport;
import com.transflower.tflassessment.demo.entities.TestList;
import com.transflower.tflassessment.demo.entities.TestResultDetails;
import com.transflower.tflassessment.demo.entities.TestScoreDto;

@Repository
public class ResultRepositoryImpl implements ResultRepository {

    Connection connection;
    public ResultRepositoryImpl()
    {
        try
        {
            String url="jdbc:mysql://localhost:3306/assessmentdb";
            String userName="root";
            String password="password";
            connection=DriverManager.getConnection(url, userName, password);
            System.out.println("Connection Established");
        }
        catch(Exception e)
        {
            System.out.println(e);
            System.out.println("Error in connecting to database");
        }
    }

    @Override
    public int getCandidateScore(int candidateId, int testId) {
        try{
        CallableStatement callableStatement = connection.prepareCall("{call spcandidatetestresult(?,?,?)}");
        callableStatement.setInt(1, candidateId);
        callableStatement.setInt(2, testId);
        callableStatement.registerOutParameter(3, java.sql.Types.INTEGER);

        callableStatement.execute();
        int score = callableStatement.getInt(3);
        return score;
        }
        catch(Exception e)
        {
            System.out.println(e);
            System.out.println("Error in getting candidate score");
        }
        return -1;
    }
        

    @Override
    public boolean setCandidateTestStartTime(int candidateId, int testId, LocalDateTime time) {
       boolean status=false;
       String query= "insert into candidatetestresults(testid,teststarttime,candidateid) values (?,?,?)";
       try{
            PreparedStatement preparedStatement=connection.prepareStatement(query);
            preparedStatement.setInt(1, testId);
            preparedStatement.setTimestamp(2, Timestamp.valueOf(time));
            preparedStatement.setInt(3, candidateId);

            int rowsAffected=preparedStatement.executeUpdate();
            if(rowsAffected>0)
            {
                status=true;
            }
        
       }
       catch(Exception e)
       {
        System.out.println(e);
       }

        return status;
    }

    @Override
    public boolean setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time) {
        boolean status = false;
        String query = "update candidatetestresults set testendtime =? where candidateid=? and testid=?";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setTimestamp(1, Timestamp.valueOf(time));
            preparedStatement.setInt(2, candidateId);
            preparedStatement.setInt(3, testId);

            int rowsAffected = preparedStatement.executeUpdate();
            if (rowsAffected > 0) {
                status = true;
            }

        } catch (Exception e) {
            System.out.println(e);
        }

        return status;
     }

    @Override
    public CandidateResultDetails candidateTestResultDetails(int candidateId, int testId) {
       CandidateResultDetails candidateResultDetails=new CandidateResultDetails();
        try
        {
            CallableStatement callableStatement=connection.prepareCall("{call spcandidatetestresultdetails(?,?,?,?,?)}");
            callableStatement.setInt(1,candidateId);
            callableStatement.setInt(2,testId);
            callableStatement.registerOutParameter(3,java.sql.Types.INTEGER);
            callableStatement.registerOutParameter(4,java.sql.Types.INTEGER);
            callableStatement.registerOutParameter(5,java.sql.Types.INTEGER);

            callableStatement.execute();
            int correctAnswer=callableStatement.getInt(3);
            int incorrectAnswer=callableStatement.getInt(4);
            int skippedQuestions=callableStatement.getInt(5);
            
            candidateResultDetails.setCorrectAnswer(correctAnswer);
            candidateResultDetails.setIncorrectAnswer(incorrectAnswer);
            candidateResultDetails.setSkippedQuestions(skippedQuestions);
            candidateResultDetails.setCandidateId(candidateId);
            candidateResultDetails.setTestId(testId);
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return candidateResultDetails;
    }

    @Override
    public List<TestResultDetails> getTestResultDetail(int testId) {
       List<TestResultDetails> resultDetails=new ArrayList<TestResultDetails>();
        String query = "SELECT "
                       +"candidatetestresults.testid," 
                       +" candidatetestresults.score, "
                        +"candidatetestresults.candidateid,"
                       +" employees.firstname, "
                        +"employees.lastname, "
                        +"subjects.title AS subject, "
                        +"tests.name AS testname "
                       +" FROM candidatetestresults "
                        +"INNER JOIN employees ON employees.id = candidatetestresults.candidateid "
                        +"INNER JOIN tests ON candidatetestresults.testid = tests.id "
                      +"  INNER JOIN subjects ON tests.subjectid = subjects.id "
                      +"  WHERE candidatetestresults.testid=?";

        try
        { 
            PreparedStatement preparedStatement=connection.prepareStatement(query);
            preparedStatement.setInt(1, testId);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next())
            {
                TestResultDetails testResultDetail=new TestResultDetails();
                testResultDetail.setTestId(testId);
                testResultDetail.setTestName(resultSet.getString("testname"));
                testResultDetail.setCandidateId(resultSet.getInt("candidateid"));
                testResultDetail.setFirstName(resultSet.getString("firstname"));
                testResultDetail.setLastName(resultSet.getString("lastname"));
                testResultDetail.setSubject(resultSet.getString("subject"));
                testResultDetail.setScore(resultSet.getInt("score"));
                resultDetails.add(testResultDetail);
            }
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return resultDetails;
    }

    
}





 

