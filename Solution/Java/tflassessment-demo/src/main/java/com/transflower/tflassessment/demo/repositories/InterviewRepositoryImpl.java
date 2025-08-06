package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDateTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;

public class InterviewRepositoryImpl implements IInterviewRepository {

    @Override
    public List<InterviewCandidateDetails> getAllInterviewCandidates() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllInterviewCandidates'");
    }

    @Override
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getInterviewedCandidatesSubjects'");
    }

    @Override
    public InterviewDetails getInterviewDetails(int interviewId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getInterviewDetails'");
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalDateTime date) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'rescheduleInterview'");
    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'rescheduleInterview'");
    }

    @Override
    public boolean rescheduleInterview(int interviewId, String time, LocalDateTime date) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'rescheduleInterview'");
    }

    @Override
    public boolean changeInterviewer(int interviewId, int smeId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeInterviewer'");
    }

    @Override
    public boolean cancelInterview(int interviewId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'cancelInterview'");
    }
    
}
