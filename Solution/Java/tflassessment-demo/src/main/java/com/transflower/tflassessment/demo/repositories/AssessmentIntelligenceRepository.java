package com.transflower.tflassessment.demo.repositories;
import java.util.List;
import com.transflower.tflassessment.demo.entities.*;

public interface AssessmentIntelligenceRepository {
    List <AnnualCandidateResult> getCandidateResults(int candidateId, int year);
}
