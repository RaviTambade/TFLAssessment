package com.transflower.tflassessment.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    @GetMapping("candidates/tests/{testId}")
    public List<AppearedCandidate> getAppearedCandidates(int testId){
        return svc. getAppearedCandidates(testId);

    }
    @GetMapping("testlist/{candidateId}")
    public List<TestList> getTestList(int candidateId){
        return svc.getTestList(candidateId);
    }
    @GetMapping("passedcandidates/tests/{testId}")
    public List<PassedCandidateDetails> getPassedCandidateResults(int testId) {
        return svc.getPassedCandidateResults(testId);
    }
    @GetMapping("failedcandidates/tests/{testId}")
     public List<FailedCandidateDetails> getFailedCandidateResults(int testId){
        return svc.getFailedCandidateResults( testId);
     }
     @PutMapping("setpassinglevel/{testId}/passingLevel/{passingLevel}")
     public boolean setPassingLevel(int testId, int passingLevel){
        return svc.setPassingLevel( testId,  passingLevel);
     }
     @GetMapping("results/subjectresults/{subjectId}")
     public List<CandidateSubjectResults> getSubjectResultDetails(int subjectId){
        return svc.getSubjectResultDetails(subjectId);
     } 
     @GetMapping("subjects")
     public List<Subject> getAllSubjects(){
        return svc.getAllSubjects();
     }
     @GetMapping("results/testaveragereport/{testId}")
        public List<TestAverageReport> getTestAverageReport(int testId){
            return svc.getTestAverageReport( testId);
        }
        @GetMapping("candidates/{candidateId}/tests/{testId}/score")
        public List<TestScoreDto> getCandidateAllScore(int candidateId){
            return svc.getCandidateAllScore( candidateId);
        }
     
}
