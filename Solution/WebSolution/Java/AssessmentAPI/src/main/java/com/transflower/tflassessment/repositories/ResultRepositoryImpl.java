package com.transflower.tflassessment.repositories;

import java.io.InputStream;
import java.sql.*;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.naming.spi.DirStateFactory.Result;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.AppearedCandidate;
import com.transflower.tflassessment.entities.CandidateResultDetails;
import com.transflower.tflassessment.entities.CandidateSubjectResults;
import com.transflower.tflassessment.entities.FailedCandidateDetails;
import com.transflower.tflassessment.entities.PassedCandidateDetails;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.TestAverageReport;
import com.transflower.tflassessment.entities.TestList;
import com.transflower.tflassessment.entities.TestResultDetails;
import com.transflower.tflassessment.entities.TestScoreDto;

@Repository
public class ResultRepositoryImpl implements ResultRepository {

      private static Connection connection;
  static {
        try {
            Properties props = new Properties();
            try (InputStream input = ResultRepositoryImpl.class.getClassLoader().getResourceAsStream("application.properties")) {
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

    @Override
    public List<AppearedCandidate> getAppearedCandidates(int testId) {
      List<AppearedCandidate> appearedCandidates = new ArrayList<AppearedCandidate>();
        String query = "select candidatetestresults.testid, candidatetestresults.candidateid, employees.firstname, employees.lastname"
                        +" from candidatetestresults" 
                        + " join employees on employees.id= candidatetestresults.candidateid"
                        +" where candidatetestresults.testid=?";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, testId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                AppearedCandidate appearedCandidate = new AppearedCandidate();
                appearedCandidate.setTestId(testId);
                appearedCandidate.setCandidateId(resultSet.getInt("candidateid"));
                appearedCandidate.setFirstName(resultSet.getString("firstname"));
                appearedCandidate.setLastName(resultSet.getString("lastname"));
                appearedCandidates.add(appearedCandidate);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return appearedCandidates;
    }

    @Override
    public List<TestList> getTestList(int candidateId) {
        List<TestList> testList = new ArrayList<TestList>();
        String query = "SELECT cr.testid AS Id, cr.score AS Score, t.name AS TestName"
                        +" FROM candidatetestresults cr"
                        +" JOIN tests t ON cr.testid = t.id where candidateid=?";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, candidateId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                TestList test = new TestList();
                test.setTestId(resultSet.getInt("Id"));
                test.setScore(resultSet.getInt("Score"));
                test.setTestName(resultSet.getString("TestName"));

                testList.add(test);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return testList;
       }

    @Override
    public List<PassedCandidateDetails> getPassedCandidateResults(int testId) {
        List<PassedCandidateDetails> passedCandidateDetails = new ArrayList<PassedCandidateDetails>();
        String query = "select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname"
                        +" from tests"
                        +" inner join candidatetestresults on tests.id=candidatetestresults.testid"
                         +" inner join employees on candidatetestresults.candidateid=employees.id"
                          +" where candidatetestresults.score >= tests.passinglevel AND tests.id=?";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, testId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                PassedCandidateDetails passedCandidateDetail = new PassedCandidateDetails();
                passedCandidateDetail.setTestId(resultSet.getInt("id"));
                passedCandidateDetail.setCandidateId(resultSet.getInt("candidateid"));
                passedCandidateDetail.setFirstName(resultSet.getString("firstname"));
                passedCandidateDetail.setLastName(resultSet.getString("lastname"));
                passedCandidateDetail.setPassingLevel(resultSet.getInt("passinglevel"));
                passedCandidateDetail.setScore(resultSet.getInt("score"));
                passedCandidateDetails.add(passedCandidateDetail);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return passedCandidateDetails;
    }

    @Override
    public List<FailedCandidateDetails> getFailedCandidateResults(int testId) {
        List<FailedCandidateDetails> failedCandidateDetails = new ArrayList<FailedCandidateDetails>();
        String query = "select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname"
                + " from tests"
                + " inner join candidatetestresults on tests.id=candidatetestresults.testid"
                + " inner join employees on candidatetestresults.candidateid=employees.id"
                + " where candidatetestresults.score <= tests.passinglevel AND tests.id=?";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, testId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                FailedCandidateDetails failedCandidateDetail = new FailedCandidateDetails();
                failedCandidateDetail.setTestId(resultSet.getInt("id"));
                failedCandidateDetail.setCandidateId(resultSet.getInt("candidateid"));
                failedCandidateDetail.setFirstName(resultSet.getString("firstname"));
                failedCandidateDetail.setLastName(resultSet.getString("lastname"));
                failedCandidateDetail.setPassingLevel(resultSet.getInt("passinglevel"));
                failedCandidateDetail.setScore(resultSet.getInt("score"));
                failedCandidateDetails.add(failedCandidateDetail);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return failedCandidateDetails;
    }

@Override
public boolean setPassingLevel(int testId, int passingLevel) {
    String query = "update tests set passinglevel=? where id=?";
    
    try {
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, passingLevel);
        preparedStatement.setInt(2, testId);
        int rowsAffected = preparedStatement.executeUpdate();
        return rowsAffected > 0;
    } catch (Exception e) {
        System.out.println(e);
        return false;
    }
}


public List<CandidateSubjectResults> getCandidateSubjectResults(int subjectId) {
    List<CandidateSubjectResults> candidateSubjectResults = new ArrayList<>();
    String query = "SELECT Test.id, s.title AS subject, cs.score"
                   + "FROM candidatesubjectresults cs "
                   + "JOIN subjects s ON cs.subjectid = s.id "
                   + "WHERE cs.candidateid = ?";
    try {
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, subjectId);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()) {
            CandidateSubjectResults result = new CandidateSubjectResults();
            result.setCandidateId(resultSet.getInt("subjectId"));
            result.setTestId( resultSet.getInt("id"));
              result.setScore(resultSet.getInt("score"));
            candidateSubjectResults.add(result);
        }
    } catch (Exception e) {
        System.out.println(e);
    }
    return candidateSubjectResults;
}


public List<Subject> getAllSubjects(int subjectId) {
    List<Subject> subjects = new ArrayList<>();
    String query = "SELECT id, title FROM subjects WHERE id = ?";
    try {
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, subjectId);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()) {
            Subject subject = new Subject();
            subject.setId(resultSet.getInt("id"));
            subject.setTitle(resultSet.getString("title"));
            subjects.add(subject);
        }
    } catch (Exception e) {
        System.out.println(e);
    }
    return subjects;
}


@Override
public List<TestAverageReport> getTestAverageReport(int testId) {
    List<TestAverageReport> averageReports = new ArrayList<>();
    String query = "{CALL spgetaveragereportbytestid(?)}";
try(
         CallableStatement stmt = connection.prepareCall(query)) {

        stmt.setInt(1, testId);

        try (ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                TestAverageReport report = new TestAverageReport();

                report.setSubjectName(rs.getString("subjectname"));
                report.setEvaluationCriteria(rs.getString("evaluationcriteria"));
                report.setTotalQuestionAnswered(rs.getInt("totalquestionsanswered"));
                report.setCorrectAnswer(rs.getInt("correctanswers"));
                report.setPercentageCorrect(rs.getDouble("percentagecorrect"));

                averageReports.add(report);
            }
        }

    } catch (SQLException e) {
        e.printStackTrace(); 
    }

    return averageReports;
}


    @Override
public List<CandidateSubjectResults> getSubjectResultDetails(int subjectId) {
    List<CandidateSubjectResults> subjectResults = new ArrayList<>();
    String query = "SELECT cs.candidateid, e.firstname, e.lastname, cs.testid, cs.subjectid, cs.score, s.title AS subject " +
                   "FROM candidatesubjectresults cs " +
                   "JOIN employees e ON cs.candidateid = e.id " +
                   "JOIN subjects s ON cs.subjectid = s.id " +
                   "WHERE cs.subjectid = ?";

    try {
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, subjectId);
        ResultSet resultSet = preparedStatement.executeQuery();

        while (resultSet.next()) {
            CandidateSubjectResults result = new CandidateSubjectResults();
            result.setCandidateId(resultSet.getInt("candidateid"));
            result.setTestId(resultSet.getInt("testid"));
            result.setSubjectId(resultSet.getInt("subjectid"));
            result.setScore(resultSet.getInt("score"));
            result.setFirstName(resultSet.getString("firstname"));
            result.setLastName(resultSet.getString("lastname"));
            result.setSubject(resultSet.getString("subject"));
            subjectResults.add(result);
        }

    } catch (Exception e) {
        System.out.println("Error fetching subject results: " + e);
    }

    return subjectResults;
}

@Override
public List<Subject> getAllSubjects() {
    List<Subject> subjects = new ArrayList<>();
    String query = "SELECT id, title FROM subjects";

    try {
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        ResultSet resultSet = preparedStatement.executeQuery();

        while (resultSet.next()) {
            Subject subject = new Subject();
            subject.setId(resultSet.getInt("id"));
            subject.setTitle(resultSet.getString("title"));
            subjects.add(subject);
        }

    } catch (Exception e) {
        System.out.println("Error fetching all subjects: " + e);
    }

    return subjects;
}


@Override
public List<TestScoreDto> getCandidateAllScore(int candidateId) {
    List<TestScoreDto> scores = new ArrayList<>();
    
    String query = "SELECT t.name AS TestName, ctr.score AS Score " +
                   "FROM candidatetestresults ctr " +
                   "JOIN tests t ON ctr.testid = t.id " +
                   "WHERE ctr.candidateid = ?";

    try (
        PreparedStatement stmt = connection.prepareStatement(query)
    ) {
        stmt.setInt(1, candidateId);

        try (ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                int score = rs.getObject("Score") == null ? 0 : rs.getInt("Score");

                TestScoreDto dto = new TestScoreDto();
                dto.setTestName(rs.getString("TestName"));
                dto.setScore(score);

                scores.add(dto);
            }
        }
    } catch (SQLException e) {
        e.printStackTrace(); 
    }

    return scores;
}



    
}





 

