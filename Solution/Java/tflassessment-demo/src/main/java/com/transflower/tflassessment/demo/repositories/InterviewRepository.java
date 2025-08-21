package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;

public interface InterviewRepository {

    public List<InterviewCandidateDetails> getAllInterviewCandidates();

    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId);

    public InterviewDetails getInterviewDetails(int interviewId);

    public boolean rescheduleInterview(int interviewId, LocalDate date);

    public boolean rescheduleInterview(int interviewId, LocalTime time);

    public boolean rescheduleInterview(int interviewId, LocalTime time, LocalDate date);

    public boolean changeInterviewer(int interviewId, int smeId);

    public boolean cancelInterview(int interviewId);
}
