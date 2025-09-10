package com.transflower.tflassessment.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.AppearedCandidate;
import com.transflower.tflassessment.entities.CandidateResultDetails;
import com.transflower.tflassessment.entities.CandidateSubjectResults;
import com.transflower.tflassessment.entities.FailedCandidateDetails;
import com.transflower.tflassessment.entities.PassedCandidateDetails;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.TestAverageReport;
import com.transflower.tflassessment.entities.TestList;
import com.transflower.tflassessment.entities.TestResultDetails;
import com.transflower.tflassessment.entities.TestScoreDto;
import com.transflower.tflassessment.services.ResultService;

@RestController
@RequestMapping("/api/results")
public class ResultController {

    @Autowired
    private ResultService svc;

    @GetMapping("/candidates/{candidateId}/tests/{testId}/score")
    public int getCandidateScore(@PathVariable int candidateId, @PathVariable int testId) {
        return svc.getCandidateScore(candidateId, testId);
    }

    @PostMapping("/candidates/{candidateId}/tests/{testId}/starttime")
    public boolean setCandidateTestStartTime(@PathVariable int candidateId, @PathVariable int testId) {
        return svc.setCandidateTestStartTime(candidateId, testId, LocalDateTime.now());
    }

    @PutMapping("/candidates/{candidateId}/tests/{testId}/endtime")
    public boolean setCandidateTestEndTime(@PathVariable int candidateId, @PathVariable int testId) {
        return svc.setCandidateTestEndTime(candidateId, testId, LocalDateTime.now());
    }

    @GetMapping("/candidates/{candidateId}/tests/{testId}/details")
    public CandidateResultDetails candidateTestResultDetails(@PathVariable int candidateId, @PathVariable int testId) {
        return svc.candidateTestResultDetails(candidateId, testId);
    }

    @GetMapping("/tests/{testId}/details")
    public List<TestResultDetails> getTestResultDetail(@PathVariable int testId) {
        return svc.getTestResultDetail(testId);
    }

    @GetMapping("/tests/{testId}/appearedcandidates")
    public List<AppearedCandidate> getAppearedCandidates(@PathVariable int testId) {
        return svc.getAppearedCandidates(testId);
    }

    @GetMapping("/candidates/{candidateId}/testlist")
    public List<TestList> getTestList(@PathVariable int candidateId) {
        return svc.getTestList(candidateId);
    }

    @GetMapping("/tests/{testId}/passedcandidates")
    public List<PassedCandidateDetails> getPassedCandidateResults(@PathVariable int testId) {
        return svc.getPassedCandidateResults(testId);
    }

    @GetMapping("/tests/{testId}/failedcandidates")
    public List<FailedCandidateDetails> getFailedCandidateResults(@PathVariable int testId) {
        return svc.getFailedCandidateResults(testId);
    }

    @PutMapping("/tests/{testId}/passingLevel/{passingLevel}")
    public boolean setPassingLevel(@PathVariable int testId, @PathVariable int passingLevel) {
        return svc.setPassingLevel(testId, passingLevel);
    }

    @GetMapping("/subjects/{subjectId}/results")
    public List<CandidateSubjectResults> getSubjectResultDetails(@PathVariable int subjectId) {
        return svc.getSubjectResultDetails(subjectId);
    }

    @GetMapping("/subjects")
    public List<Subject> getAllSubjects() {
        return svc.getAllSubjects();
    }

    @GetMapping("/tests/{testId}/averagereport")
    public List<TestAverageReport> getTestAverageReport(@PathVariable int testId) {
        return svc.getTestAverageReport(testId);
    }

    @GetMapping("/candidates/{candidateId}/scores")
    public List<TestScoreDto> getCandidateAllScore(@PathVariable int candidateId) {
        return svc.getCandidateAllScore(candidateId);
    }
}
