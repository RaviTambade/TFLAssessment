package com.transflower.tflassessment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.AnnualCandidateResult;
import com.transflower.tflassessment.services.AssessmentIntelligenceService;

@RestController
@RequestMapping("/CandidateResults")  
public class AssessmentIntelligenceController {
    
    @Autowired
    private AssessmentIntelligenceService svc;

    @GetMapping("/candidateanswer/{candidateid}/testtime/{year}")
    public List<AnnualCandidateResult> getCandidateResults(@PathVariable("candidateid") int candidateId, @PathVariable("year") int year) {
        
        return svc.getCandidateResults(candidateId, year);
    }
}
