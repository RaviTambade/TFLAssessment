package com.transflower.tflassessment.demo.repositories;

import java.util.List;

public interface AssessmentIntelligenceRepository {
    List <AnnualCandidateResult> getCandidateResults(int candidateId, int year);
}
