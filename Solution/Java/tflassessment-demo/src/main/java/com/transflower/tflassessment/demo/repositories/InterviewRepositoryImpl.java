package com.transflower.tflassessment.demo.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
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
        List<InterviewCandidateDetails> ic = new ArrayList<>();
        try {
            String interviewer = "SELECT e.firstname,e.lastname,e.id FROM employees e JOIN interviews i ON e.id=i.candidateid;";
            Connection obj = DriverManager.getConnection(url, userName, password);
            Statement sc = obj.createStatement();
            ResultSet rs = sc.executeQuery(interviewer);

            while (rs.next()) {
                InterviewCandidateDetails id = new InterviewCandidateDetails(rs.getString(1), rs.getString(2), rs.getInt(3), null);
                ic.add(id);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return ic;
    }

    @Override
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {

        return new ArrayList<InterviewCandidateDetails>();
    }

    @Override
    public InterviewDetails getInterviewDetails(int interviewId) {

        return new InterviewDetails();

    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalDateTime date) {

        return true;
    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time) {

        return true;

    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time, LocalDateTime date) {

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
