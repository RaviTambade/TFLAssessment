package com.transflower.tflassessment.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.transflower.tflassessment.entities.CandidateResultDetails;
import com.transflower.tflassessment.entities.TestResultDetails;
import com.transflower.tflassessment.services.ResultService;

import java.time.LocalDateTime;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class ResultController {

    @Autowired
    private ResultService svc;

    @GetMapping("candidates/{candidateId}/tests/{testId}/score")
    public int getCandidateScore(@PathVariable("candidateId") int candidateid, @PathVariable("testId") int testid) {
        return svc.getCandidateScore(candidateid, testid);
    }

    @PostMapping("setstarttime/{candidateId}/tests/{testId}")
    public Boolean setCandidateTestStartTime(@PathVariable("candidateId") int candidateid, @PathVariable("testId") int testid) {
        return svc.setCandidateTestStartTime(candidateid, testid, LocalDateTime.now());

    }

    @PutMapping("setendtime/{candidateId}/tests/{testId}")
    public Boolean setCandidateTestEndTime(@PathVariable("candidateId") int candidateid, @PathVariable("testId") int testid) {
        return svc.setCandidateTestEndTime(candidateid, testid, LocalDateTime.now());
    }

    @GetMapping("candidates/{candidateId}/tests/{testId}/details")
    public CandidateResultDetails candidateTestResultDetails(@PathVariable("candidateId") int candidateid, @PathVariable("testId") int testid) {
        CandidateResultDetails candidateResultDetails = svc.candidateTestResultDetails(candidateid, testid);
        return candidateResultDetails;
    }

    @GetMapping("tests/{testId}/detail")
    public List<TestResultDetails> getTestResultDetail(@PathVariable("testId") int testid) {
        return svc.getTestResultDetail(testid);

    }

}
