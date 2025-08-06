package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;

public class InterviewRepositoryImpl implements InterviewRepository {
    private String url="jdbc:mysql//localhost:3306/assessmentdb";
    private String userName="root";
    private String password="password";
    @Override
    public List<InterviewCandidateDetails> getAllInterviewCandidates() {
        try{
            List<InterviewCandidateDetails> ic=new ArrayList<>();
            String interviewer = "select e.firstname,e.lastname,e.id from employees e join interviews i on e.id=i.candidateid;" ;
            Connection obj=DriverManager.getConnection(url,userName,password);
            Statement sc=obj.createStatement();
            ResultSet rs=sc.executeQuery(interviewer);
            
            while (rs.next()) {
                InterviewCandidateDetails id=new InterviewCandidateDetails(rs.getString(1),rs.getString(2),rs.getInt(3),null);
                ic.add(id);
            }
            return ic;
        }
        catch(Exception e){
            System.out.println(e);
            return null;
        }
    }

    @Override
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {
        
    }

    @Override
    public InterviewDetails getInterviewDetails(int interviewId) {
        
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalDateTime date) {

        }

    @Override
    public boolean rescheduleInterview(int interviewId, String time) {
        
    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time, LocalDateTime date) {

    }

    @Override
    public boolean changeInterviewer(int interviewId, int smeId) {
        
    }

    @Override
    public boolean cancelInterview(int interviewId) {
       
    }
    
}
