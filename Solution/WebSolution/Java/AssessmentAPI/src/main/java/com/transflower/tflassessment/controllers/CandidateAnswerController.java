package com.transflower.tflassessment.controllers;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.CandidateAnswer;
import com.transflower.tflassessment.entities.CandidateTestDetails;
import com.transflower.tflassessment.services.CandidateAnswerService;

@RestController
@RequestMapping("api/candidateanswer")
public class CandidateAnswerController {

    @Autowired
    private CandidateAnswerService svc;

    // Insert candidate answers asynchronously
    @PostMapping("/assessmentanswers/candidates/{candidateId}")
    public CompletableFuture<Boolean> insertCandidateAnswers(
            @PathVariable("candidateId") int candidateId,
            @RequestBody List<CandidateAnswer> answers) {
        return svc.insertCandidateAnswer(candidateId, answers);
    }

    // Fetch candidate answers asynchronously
    @GetMapping("/assessmentanswers/candidates/{candidateId}/testId/{testId}")
    public CompletableFuture<List<CandidateAnswer>> getCandidateAnswer(
            @PathVariable("candidateId") int candidateId,
            @PathVariable("testId") int testId) {
        return svc.getCandidateAnswer(candidateId, testId);
    }

    // Fetch candidate test details asynchronously
    @GetMapping("/assessmentanswers/candidates/{candidateId}/tests/{testId}/details")
    public CompletableFuture<CandidateTestDetails> getCandidateTestDetails(
            @PathVariable("candidateId") int candidateId,
            @PathVariable("testId") int testId) {
        return svc.getCandidateTestDetails(candidateId, testId);
    }

    // Fetch candidate answer results asynchronously
    @GetMapping("/assessmentanswers/candidates/{candidateId}/tests/{testId}/results")
    public CompletableFuture<CompletableFuture<List<CandidateAnswer>>> getCandidateAnswerResult(
            @PathVariable int candidateId,
            @PathVariable int testId) {
        return CompletableFuture.supplyAsync(() -> svc.getCandidateAnswerResult(candidateId, testId));
    }
}
