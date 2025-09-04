package com.transflower.tflassessment.services;

import java.util.List;

import com.transflower.tflassessment.entities.AnnualCandidateResult;

public interface AssessmentIntelligenceService {
    List <AnnualCandidateResult> getCandidateResults(int candidateId, int year);
}
