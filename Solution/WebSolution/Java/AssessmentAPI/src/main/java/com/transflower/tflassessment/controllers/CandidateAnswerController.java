package com.transflower.tflassessment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

     @GetMapping("/assessmentanswers/candidates/{candidateId}")
     public boolean insertCandidateAnswers(@PathVariable("candidateId") int candidateId,@RequestBody List<CandidateAnswer> answers){
        return svc.insertCandidateAnswer(candidateId, answers);
     }

     
    @GetMapping("/assessmentanswers/candidates/{candidateId}/testId/{testId}")
    public List<CandidateAnswer> getCandidateAnswer(@PathVariable("CandidateId")int CandidateId, @PathVariable("TestId")int TestId) {
        return svc.getCandidateAnswer(CandidateId, TestId);
    }

    @GetMapping("/assessmentanswers/candidates/{candidateId}/tests/{testId}/results")
    public CandidateTestDetails CandidateTestDetails(@PathVariable("CandidateId")int CandidateId, @PathVariable("TestId")int TestId) {
        return svc.CandidateTestDetails(CandidateId, TestId);
    }

    @GetMapping("/assessmentanswers/candidates/{candidateId}/tests/{testId}/details")
    public List<CandidateAnswer> getCandidateAnswerResult(@PathVariable("CandidateId")int CandidateId,@PathVariable("TestId") int TestId) {
        return svc.getCandidateAnswerResult(CandidateId, TestId);
    }

}
