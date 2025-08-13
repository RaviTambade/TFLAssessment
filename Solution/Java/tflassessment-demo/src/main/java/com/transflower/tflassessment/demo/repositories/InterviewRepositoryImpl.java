package com.transflower.tflassessment.demo.repositories;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;


public class InterviewRepositoryImpl implements InterviewRepository {

    private String url = "jdbc:mysql://localhost:3306/assessmentdb";
    private String userName = "root";
    private String password = "password";

    @Override
    public List<InterviewCandidateDetails> getAllInterviewCandidates() {
        List<InterviewCandidateDetails> allInterviewCandidates = new ArrayList<>();
        try {
            String selectQuery = "select interviews.candidateid,employees.firstname,employees.lastname,subjects.title\r\n" + 
                                "from interviews \r\n" + 
                                "inner join employees on  interviews.candidateid= employees.id\r\n" + 
                                "inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id\r\n" + 
                                "inner join subjects on subjectmatterexperts.subjectid=subjects.id";
            Connection conn = DriverManager.getConnection(url, userName, password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(selectQuery);
            
            while (rs.next()) {
                InterviewCandidateDetails candidateDetails = new InterviewCandidateDetails(rs.getInt(1), rs.getString(2), rs.getString(3), null);
                allInterviewCandidates.add(candidateDetails);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return allInterviewCandidates;
    }

    @Override
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {
        List<InterviewCandidateDetails> interviewCandidateSubjectDetails = new ArrayList<>();
        try {
            String selectQuery = "SELECT i.candidateid,e.firstname,e.lastname,s.Title FROM employees e JOIN interviews i ON e.id = i.candidateid JOIN subjectmatterexperts sme ON sme.id = i.smeid JOIN subjects s ON sme.subjectid = s.id WHERE candidateid =" + candidateId + ";";
            Connection conn = DriverManager.getConnection(url, userName, password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(selectQuery);
            while (rs.next()) {
                InterviewCandidateDetails CandidateSubjectDetails = new InterviewCandidateDetails(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4));
                interviewCandidateSubjectDetails.add(CandidateSubjectDetails);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return interviewCandidateSubjectDetails;
    }

    @Override
    public InterviewDetails getInterviewDetails(int interviewId) {
        InterviewDetails interviewDetails = null;
        try {
            String callableStatement = "{CALL spinterviewdetails(?)}";
            Connection conn = DriverManager.getConnection(url, userName, password);
            CallableStatement cstmt = conn.prepareCall(callableStatement);
            cstmt.setInt(1, interviewId);
            ResultSet rs = cstmt.executeQuery();
            if (rs.next()) {
                interviewDetails = new InterviewDetails(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(5), rs.getString(6), rs.getString(7), null);
            }
            return interviewDetails;
        } catch (Exception e) {
            System.out.println(e);
        }
        return interviewDetails;

    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalDate date) {
        try {
            String updateQuery = "UPDATE interviews SET interviewdate ="+"'"+date+"'"+"WHERE id ="+interviewId+";";
            Connection connection = DriverManager.getConnection(url,userName,password);
            Statement statement = connection.createStatement();
            statement.executeUpdate(updateQuery);
        } catch(Exception e) {
            System.out.println(e);
        }
        return true;
    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time) {

        return true;

    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time, LocalDate date) {

        return true;
    }

    @Override
    public boolean changeInterviewer(int interviewId, int smeId) {
        return false;

    }

    @Override
    public boolean cancelInterview(int interviewId) {

        return false;

    }

}
