package com.transflower.tflassessment.repositories;
import java.util.List;
import com.transflower.tflassessment.entities.*;

public interface AssessmentIntelligenceRepository {
    List <AnnualCandidateResult> getCandidateResults(int candidateId, int year);
}
