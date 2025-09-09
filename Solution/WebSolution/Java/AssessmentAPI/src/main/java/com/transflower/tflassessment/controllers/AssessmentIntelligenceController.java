package com.transflower.tflassessment.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.AnnualCandidateResult;
import com.transflower.tflassessment.services.AssessmentIntelligenceService;
@RestController
@RequestMapping("api/controller")
public class AssessmentIntelligenceController {
    private AssessmentIntelligenceService service;

    @GetMapping("/api/assessmentintelligence/candidates/{candidateId}/year/{year}")
    public List<AnnualCandidateResult> getCandidateResults(@PathVariable("candidateId") int candidateId, @PathVariable("year") int year) {
        return service.getCandidateResults(candidateId, year);
    }
}
