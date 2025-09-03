package com.transflower.tflassessment.demo.services;

import java.util.List;

import com.transflower.tflassessment.demo.entities.AnnualCandidateResult;

public interface AssessmentIntelligenceService {
    List <AnnualCandidateResult> getCandidateResults(int candidateId, int year);
}
