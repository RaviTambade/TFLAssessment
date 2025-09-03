package com.transflower.tflassessment.demo.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.demo.entities.CandidateResultDetails;
import com.transflower.tflassessment.demo.entities.TestResultDetails;
import com.transflower.tflassessment.demo.services.ResultService;

import java.time.LocalDateTime;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class ResultController {

    @Autowired
    private ResultService svc;

    @GetMapping("/candidate/score")
    public int getCandidateScore(@RequestParam int candidateid, @RequestParam int testid) {
        return svc.getCandidateScore(candidateid, testid);
    }

    @PostMapping("/candidate/teststarttime")
    public String setCandidateTestStartTime(@RequestParam int candidateid, @RequestParam int testid) {
        Boolean status = svc.setCandidateTestStartTime(candidateid, testid, LocalDateTime.now());
        if (status) {
            return "candidate test start time is set";
        } else {
            return "Error while setting candidate test start time";
        }

    }

    @GetMapping("/candidate/testendtime/")
    public String setCandidateTestEndTime(@RequestParam int candidateid, @RequestParam int testid) {
        Boolean status = svc.setCandidateTestEndTime(candidateid, testid, LocalDateTime.now());
        if (status) {
            return "candidate test end time is set";
        } else {
            return "Error while setting candidate test end time";
        }
    }

    @GetMapping("/candidate/testresultdetail")
    public CandidateResultDetails candidateTestResultDetails(@RequestParam int candidateid, @RequestParam int testid) {
        CandidateResultDetails candidateResultDetails = svc.candidateTestResultDetails(candidateid, testid);
        return candidateResultDetails;
    }

    @GetMapping("/candidate/testresultdetails")
    public List<TestResultDetails> getTestResultDetail(@RequestParam int testid) {
        return svc.getTestResultDetail(testid);

    }

}
