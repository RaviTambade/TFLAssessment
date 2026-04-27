package com.transflower.tflassessment.controllers;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.entities.InterviewDetails;
import com.transflower.tflassessment.services.InterviewService;

@RestController
@RequestMapping("/api/interviews")
public class InterviewController {
 
    @Autowired
    private InterviewService svc;

    @GetMapping("/details")
    public CompletableFuture<List<InterviewCandidateDetails>> getAllInterviewCandidates() {
        return svc.getAllInterviewCandidates();
    }

    @GetMapping("/candidate/{candidateId}")
    public CompletableFuture<List<InterviewCandidateDetails>> getInterviewedCandidatesSubjects(@PathVariable int candidateId) {
       return svc.getInterviewedCandidatesSubjects(candidateId);
    }

    @GetMapping("/{interviewId}")
    public CompletableFuture<InterviewDetails> getInterviewDetails(@PathVariable int interviewId) {
        return svc.getInterviewDetails(interviewId);
    }

    @PutMapping("/{interviewId}/date/{date}")
    public CompletableFuture<Boolean> rescheduleInterview(@PathVariable int interviewId, @PathVariable LocalDate date) {
       return svc.rescheduleInterview(interviewId, date);
    }

    @PutMapping("/{interviewId}/time/{time}")
    public CompletableFuture<Boolean> rescheduleInterview(@PathVariable int interviewId, @PathVariable LocalTime time) {
       return svc.rescheduleInterview(interviewId, time);
    }

    @PutMapping("/{interviewId}/time/{time}/date/{date}")
    public CompletableFuture<Boolean> rescheduleInterview(@PathVariable("interviewId") int interviewId,
                                       @PathVariable ("time")LocalTime time,
                                       @PathVariable ("date") LocalDate date) {
       return svc.rescheduleInterview(interviewId, time, date);
    }

    @PutMapping("/{interviewId}/subjectexperts/{smeId}")
    public CompletableFuture<Boolean> changeInterviewer(@PathVariable int interviewId, @PathVariable int smeId) {
       return svc.changeInterviewer(interviewId, smeId);
    }

    @DeleteMapping("/{interviewId}")
    public CompletableFuture<Boolean> cancelInterview(@PathVariable int interviewId) {
        return svc.cancelInterview(interviewId);
    }
}
