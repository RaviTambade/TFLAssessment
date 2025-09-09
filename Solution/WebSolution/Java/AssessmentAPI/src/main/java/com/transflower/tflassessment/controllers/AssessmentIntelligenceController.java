package com.transflower.tflassessment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.AnnualCandidateResult;
import com.transflower.tflassessment.services.AssessmentIntelligenceService;

@RestController
public class AssessmentIntelligenceController {
    
    @Autowired
    private AssessmentIntelligenceService svc;

    @GetMapping("CandidateResults/candidateanswer/{candidateid}/testtime/{year}")
        List <AnnualCandidateResult> getCandidateResults(@PathVariable("candidateId") int candidateId , @PathVariable("year") int year)
        {
            return svc.getCandidateResults(candidateId, year);
        }

}
