package com.transflower.tflassessment.demo.repositories;
import java.time.LocalDateTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;


public interface InterviewRepository{

    public List<InterviewCandidateDetails> getAllInterviewCandidates();
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId);
    public InterviewDetails getInterviewDetails(int interviewId);
    public boolean rescheduleInterview(int interviewId,LocalDateTime date);
    public boolean rescheduleInterview(int interviewId,String time);
    public boolean rescheduleInterview(int interviewId,String time,LocalDateTime date);
    public boolean changeInterviewer(int interviewId, int smeId);
    public boolean cancelInterview(int interviewId);
}