package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDateTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;

public class InterviewRepositoryImpl implements InterviewRepository {

    @Override
    public List<InterviewCandidateDetails> getAllInterviewCandidates() {
              
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
