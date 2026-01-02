// package com.transflower.tflassessment.services;

// import java.time.LocalDate;
// import java.time.LocalTime;
// import java.util.List;
// import java.util.concurrent.CompletableFuture;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.scheduling.annotation.Async;
// import org.springframework.stereotype.Service;

// import com.transflower.tflassessment.entities.InterviewCandidateDetails;
// import com.transflower.tflassessment.entities.InterviewDetails;
// import com.transflower.tflassessment.repositories.InterviewRepository;

// @Service
// public class InterviewServiceImpl  implements InterviewService{

//     private final InterviewRepository _repo;
//     @Autowired
//     public InterviewServiceImpl(InterviewRepository repo)
//     {
//         _repo=repo;
//     }
    
//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<List<InterviewCandidateDetails>> getAllInterviewCandidates() {
//         return  CompletableFuture.supplyAsync(()->_repo.getAllInterviewCandidates());
//     }

//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<List<InterviewCandidateDetails>> getInterviewedCandidatesSubjects(int candidateId) {
//        return CompletableFuture.supplyAsync(()->_repo.getInterviewedCandidatesSubjects(candidateId));
//     }

//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<InterviewDetails> getInterviewDetails(int interviewId) {
//         return CompletableFuture.supplyAsync(()->_repo.getInterviewDetails(interviewId));
//     }

//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<Boolean> rescheduleInterview(int interviewId, LocalDate date) {
//        return CompletableFuture.supplyAsync(()->_repo.rescheduleInterview(interviewId, date));
//     }

//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<Boolean> rescheduleInterview(int interviewId, LocalTime time) {
//        return CompletableFuture.supplyAsync(()-> _repo.rescheduleInterview(interviewId, time));
//     }

//     @Override
//     @Async("asyncExecutor")
//     public  CompletableFuture<Boolean> rescheduleInterview(int interviewId, LocalTime time, LocalDate date) {
//        return CompletableFuture.supplyAsync(()->_repo.rescheduleInterview(interviewId, time,date));
//     }

//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<Boolean> changeInterviewer(int interviewId, int smeId) {
//        return CompletableFuture.supplyAsync(()->_repo.changeInterviewer(interviewId, smeId));
//     }

//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<Boolean> cancelInterview(int interviewId) {
//         return CompletableFuture.supplyAsync(()->_repo.cancelInterview(interviewId));
//     }
    
// }
