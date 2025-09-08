package com.transflower.tflassessment.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.entities.InterviewDetails;
import com.transflower.tflassessment.repositories.InterviewRepository;
@Service
public class InterviewServiceImpl  implements InterviewService{

    private final InterviewRepository _repo;
    @Autowired
    public InterviewServiceImpl(InterviewRepository repo)
    {
        _repo=repo;
    }
    @Override
    public List<InterviewCandidateDetails> getAllInterviewCandidates() {
        return _repo.getAllInterviewCandidates();
    }

    @Override
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {
       return _repo.getInterviewedCandidatesSubjects(candidateId);
    }

    @Override
    public InterviewDetails getInterviewDetails(int interviewId) {
        return _repo.getInterviewDetails(interviewId);
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalDate date) {
       return _repo.rescheduleInterview(interviewId, date);
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalTime time) {
       return _repo.rescheduleInterview(interviewId, time);
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalTime time, LocalDate date) {
       return _repo.rescheduleInterview(interviewId, time);
    }

    @Override
    public boolean changeInterviewer(int interviewId, int smeId) {
       return _repo.changeInterviewer(interviewId, smeId);
    }

    @Override
    public boolean cancelInterview(int interviewId) {
        return _repo.cancelInterview(interviewId);
    }
    
}
