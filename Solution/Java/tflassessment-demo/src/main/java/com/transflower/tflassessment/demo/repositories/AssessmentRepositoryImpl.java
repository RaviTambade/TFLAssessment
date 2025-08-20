package com.transflower.tflassessment.demo.repositories;

import java.sql.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.Date;

import com.transflower.tflassessment.demo.entities.*;

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
        
    }
            catch (SQLException e) {
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
    public List<Employee> getAllEmployees() {
       return null;
    }

    @Override
    public List<Subject> getAllSubjects() {
        return null;
    }

    @Override
    public List<EvaluationCriteria> getEvaluationCriterias() {
        return null;
    }

    @Override
    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId) {
        return null;
    }

    @Override
    public boolean createTest(Assessment newTest) {
       return false;
    }
    @Override
    public boolean addQuestion(int assessmentId, int questionId) {
      return false;
    }

    @Override
    public boolean addQuestions(int assessmentId, List<TestQuestion> questions) {
       return false;
    }

    @Override
    public boolean changeDuration(int assessmentId, String duration) {
       return false;
    }

    @Override
    public boolean reschedule(int assessmentId, Date date) {
        return false;
    }

    @Override
    public boolean removeQuestion(int assessmentId, int questionId) {
        return false;
    }

    @Override
    public boolean removeQuestions(int[] testQuestions) {
       return false;
    }

    
}
   