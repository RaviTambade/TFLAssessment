// package com.transflower.tflassessment.services;

// import java.time.LocalDate;
// import java.time.LocalTime;
// import java.util.List;
// import java.util.concurrent.CompletableFuture;

// import com.transflower.tflassessment.entities.InterviewCandidateDetails;
// import com.transflower.tflassessment.entities.InterviewDetails;

// public interface InterviewService  {

//     public CompletableFuture<List<InterviewCandidateDetails>> getAllInterviewCandidates();

//     public CompletableFuture<List<InterviewCandidateDetails>> getInterviewedCandidatesSubjects(int candidateId);

//     public CompletableFuture<InterviewDetails> getInterviewDetails(int interviewId);

//     public CompletableFuture<Boolean> rescheduleInterview(int interviewId, LocalDate date);

//     public CompletableFuture<Boolean> rescheduleInterview(int interviewId, LocalTime time);

//     public CompletableFuture<Boolean> rescheduleInterview(int interviewId, LocalTime time, LocalDate date);

//     public CompletableFuture<Boolean> changeInterviewer(int interviewId, int smeId);

//     public CompletableFuture<Boolean> cancelInterview(int interviewId);
// }
