package com.transflower.tflassessment.demo.repositories;

import java.sql.*;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.Date;

import com.transflower.tflassessment.demo.entities.*;

import com.transflower.tflassessment.demo.repositories.AssessmentRepository;

public class AssessmentRepositoryImpl implements AssessmentRepository {

    private static Connection connection;

    static {
        try {
            String url = "jdbc:mysql://localhost:3306/assessmentdb";
            String user = "root";
            String password = "password";
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println("Connection Failed: " + e.getMessage());
        }
    }

    public List<Assessment> getDetails(int assessmentId) {

        List<Assessment> assessment = new ArrayList<Assessment>();

        String query = "SELECT t.id, t.name AS TestName, t.smeid AS subjectExpertId, " +
                "t.subjectid AS subjectId, t.creationdate AS creationDate, " +
                "t.modificationdate AS modificationDate, t.scheduleddate AS scheduledDate, " +
                "t.status, t.passinglevel, e.firstname, e.lastname, t.duration " +
                "FROM tests t " +
                "LEFT JOIN employees e ON t.smeid = e.id " +
                "WHERE t.id = " + assessmentId;

        try (Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery(query)) {
            if (rs.next()) {
                Assessment assessments = new Assessment();
                assessments.setId(rs.getInt("id"));
                assessments.setTestName(rs.getString("TestName"));
                assessments.setSubjectExpertId(rs.getInt("subjectExpertId"));
                assessments.setSubjectId(rs.getInt("subjectId"));
                assessments.setCreationDate(LocalDateTime(rs.getTimestamp("creationDate")));
                // assessments.setModificationDate(toLocalDateTime(rs.getTimestamp("modificationDate")));
                // assessments.setScheduledDate(toLocalDateTime(rs.getTimestamp("scheduledDate")));
                assessments.setStatus(rs.getString("status"));
                assessments.setPassingLevel(rs.getInt("passinglevel"));
                assessments.setFirstName(rs.getString("firstname"));
                assessments.setLastName(rs.getString("lastname"));

            }

        } catch (SQLException e) {
            System.out.println("Error fetching assessment: " + e.getMessage());
        }
        return assessment;
    }

    private LocalDateTime LocalDateTime(Timestamp timestamp) {

        return null;
    }

    public List<Assessment> getAll(LocalDateTime fromDate, LocalDateTime toDate) {
        List<Assessment> assessments = new ArrayList<>();

        String query = "SELECT * FROM tests WHERE creationDate BETWEEN ? AND ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setTimestamp(1, Timestamp.valueOf(fromDate));
            stmt.setTimestamp(2, Timestamp.valueOf(toDate));

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Assessment assessment = new Assessment();
                    assessment.setId(rs.getInt("id"));
                    assessment.setSubjectExpertId(rs.getInt("smeid"));
                    assessment.setSubjectId(rs.getInt("subjectid"));

                    Timestamp modDate = rs.getTimestamp("modificationdate");
                    if (modDate != null) {
                        assessment.setModificationDate(modDate.toLocalDateTime());
                    }

                    Timestamp schedDate = rs.getTimestamp("scheduleddate");
                    if (schedDate != null) {
                        assessment.setScheduleDate(schedDate.toLocalDateTime());
                    }

                    assessment.setStatus(rs.getString("status"));

                    assessments.add(assessment);
                }
            }

        } catch (SQLException e) {
            System.out.println("Error fetching assessments: " + e.getMessage());
        }

        return assessments;
    }

    @Override
    public List<Assessment> getAllTests() {

        return null;
    }

    @Override
    public List<Assessment> getAllBySubjectMatterExpert(int smeId) {
        List<Assessment> assessments = new ArrayList<>();

        String query = "SELECT * FROM tests WHERE smeid = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, smeId);

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Assessment assessment = new Assessment();

                    assessment.setId(rs.getInt("id"));
                    assessment.setSmeId(rs.getInt("smeid"));
                    assessment.setName(rs.getString("name"));
                    assessment.setDescription(rs.getString("description"));
                    assessment.setCreatedDate(rs.getTimestamp("createdDate").toLocalDateTime());

                    assessments.add(assessment);
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return assessments;
    }

    @Override
     public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId)
     {
     List<Question> questions=new ArrayList<>();
     try{ 
         Statement   stmt = connection.createStatement();
       

     String query="SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.evaluationcriteriaid " +
            "FROM questionbank q " +
            "WHERE q.evaluationcriteriaid = EvaluationCriteriaId";

              ResultSet resultSet = stmt.executeQuery(query);

            while (resultSet.next()) {
                Question question=new Question();
                question.setEvaluationCriteriaId(resultSet.getInt("evaluationCriteriaId")); 
                question.setSubjectId(resultSet.getInt("SubjectId")); 
                question.setTitle(resultSet.getString("Title"));

                 TestQuestion testQuestion=new TestQuestion();
                 testQuestion.setId(resultSet.getInt("QuestionId"));
                 testQuestion.setA(resultSet.getString("a"));
                testQuestion.setB(resultSet.getString("b"));
                testQuestion.setC(resultSet.getString("c"));
                testQuestion.setD(resultSet.getString("d"));
                testQuestion.setAnswerKey(resultSet.getString("AnswerKey"));
                 testQuestion.setCriteria(resultSet.getString("Criterai"));

                 
          

                questions.add(question);
               // questions.add(testQuestion);
                
            }
        } catch(Exception e)
        {
            System.out.println("Error fetching questions:"+e.getMessage());
        }
        return questions;
     }

    @Override
    public boolean updateQuestion(Question question) {
        
        try {
            
            String query =  "UPDATE questionbank " +
               "SET title = ?, a = ?, b = ?, c = ?, d = ?, answerkey = ? " +
               "WHERE id = ?";

             PreparedStatement prepareStatement = connection.prepareStatement(query);
             ResultSet resultSet = prepareStatement.executeQuery(query);

            prepareStatement.setString(1, question.getTitle());
            prepareStatement.setString(2, question.getA());
            prepareStatement.setString(3, question.getB());
            prepareStatement.setString(4, question.getC());
            prepareStatement.setString(5, question.getD());
            prepareStatement.setString(6,question.getAnswerKey());
            prepareStatement.setInt(7, question.getId());

            int rowsUpdated = prepareStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error updating question:" + e.getMessage());

        }
        return false;
    }

    public boolean updateTestStatus(int testId, TestStatusUpdate status) {
         try {
            String query = "UPDATE tests SET status = ? WHERE id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet=preparedStatement.executeQuery(query);


            preparedStatement.setString(1, status.getStatus());
            preparedStatement.setInt(2, testId);

         int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("error updating test status:" + e.getMessage());

        }
        return false;
    }

    @Override
    public boolean addEmployeesToTest(TestAssignmentRequest request) {

        String query = "INSERT INTO testschedules " +
               "(testid, candidateid, scheduledstart, scheduledend, status, rescheduledon, remarks) " +
               "VALUES (?, ?, ?, ?, ?, ?, ?)";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement((query));
            preparedStatement.setInt(1, request.getTestId());
           // preparedStatement.setInt(2, request.getCandidateId());
            preparedStatement.setTimestamp(3, Timestamp.valueOf(request.getScheduledStart()));
            preparedStatement.setTimestamp(4, Timestamp.valueOf(request.getScheduledEnd()));
            preparedStatement.setString(4, request.getStatus());
            preparedStatement.setTimestamp(5, Timestamp.valueOf(request.getRescheduledOn()));
            preparedStatement.setString(6, request.getRemarks());
            preparedStatement.setInt(8, request.getTestId());

            int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error adding employee to test :" + e.getMessage());
        }
        return false;
    }

    @Override
    
    public List<TestEmployeeDetails> getAllTestByEmpId(int empId) {
        List<TestEmployeeDetails> testEmployeeDetailsList = new ArrayList<>();
        try{
        String query="{call GetTestEmployeeDetailsByCandidate(?)}";
        CallableStatement statement=connection.prepareCall(query);
           statement.setInt(1, empId);
         ResultSet set= statement.executeQuery();
         TestEmployeeDetails testEmployeeDetails=null;
         Timestamp t1 =set.getTimestamp("scheduledstart");
         LocalDateTime l1 =t1.toLocalDateTime();
         Timestamp t2 =set.getTimestamp("scheduledend");
         LocalDateTime l2 =t2.toLocalDateTime();
         Time sqlTime = set.getTime("duration"); // Replace with actual column name
        LocalTime localTime = sqlTime.toLocalTime();   // Convert to LocalTime
        Duration duration = Duration.ofHours(localTime.getHour())
                                .plusMinutes(localTime.getMinute())
                                .plusSeconds(localTime.getSecond());
         while (set.next()) {
            testEmployeeDetails=new TestEmployeeDetails(set.getInt("candidateid"),set.getString("testname"),set.getString("passinglevel"),duration, l1,l2,set.getString("status"));
         }
         return testEmployeeDetailsList;
         
        }catch(Exception e)
        {
            System.out.println(e);
        }
        return testEmployeeDetailsList;
    }
    public static void main(String[] args) {
    // ================= AssessmentRepository =================
    AssessmentRepositoryImpl repo = new AssessmentRepositoryImpl();

    // -------- getQuestionsByEvaluationCriteriaId --------
    int evaluationCriteriaId = 1;
    System.out.println("\nQuestions by Evaluation Criteria:");
    List<Question> questions = repo.getQuestionsByEvaluationCriteriaId(evaluationCriteriaId);
    for (Question q : questions) {
        System.out.println(
            q.getId() + " - " + q.getTitle() +
            " | SubjectId: " + q.getSubjectId() +
            " | AnswerKey: " + q.getAnswerKey()
        );
    }

    // -------- updateQuestion --------
    Question sampleQ = new Question();
    sampleQ.setId(1);
    sampleQ.setTitle("Updated Question Title");
    sampleQ.setA("Option A");
    sampleQ.setB("Option B");
    sampleQ.setC("Option C");
    sampleQ.setD("Option D");
    sampleQ.setAnswerKey("A");

    boolean updated = repo.updateQuestion(sampleQ);
    System.out.println("\nUpdate Question Status: " + (updated ? "Success" : "Failed"));

    // -------- updateTestStatus --------
    int testId = 1;
    TestStatusUpdate statusUpdate = new TestStatusUpdate();
    statusUpdate.setStatus("Completed");

    boolean statusUpdated = repo.updateTestStatus(testId, statusUpdate);
    System.out.println("\nUpdate Test Status: " + (statusUpdated ? "Success" : "Failed"));

    // -------- addEmployeesToTest --------
    TestAssignmentRequest request = new TestAssignmentRequest();
    request.setTestId(1);
   // request.setCandidateId(101);
    request.setScheduledStart(java.time.LocalDateTime.now());
    request.setScheduledEnd(java.time.LocalDateTime.now().plusHours(2));
    request.setStatus("Scheduled");
    request.setRescheduledOn(java.time.LocalDateTime.now());
    request.setRemarks("First attempt");

    boolean added = repo.addEmployeesToTest(request);
    System.out.println("\nAdd Employee To Test: " + (added ? "Success" : "Failed"));

    // -------- getAllTestByEmpId --------
    int empId = 101;
    System.out.println("\nAll Tests by Employee ID:");
    List<TestEmployeeDetails> testDetails = repo.getAllTestByEmpId(empId);
    for (TestEmployeeDetails t : testDetails) {
        System.out.println(
           // "CandidateId: " + t.getCandidateId() +
            " | TestName: " + t.getTestName() +
            " | PassingLevel: " + t.getPassingLevel() +
            " | Duration: " + t.getDuration() +
            " | Start: " + t.getScheduledStart() +
            " | End: " + t.getScheduledEnd() +
            " | Status: " + t.getStatus()
        );
    }
}


}

  

   