package com.transflower.tflassessment.repositories;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.*;

public interface AssessmentIntelligenceRepository {
    CompletableFuture<List<AnnualCandidateResult>> getCandidateResults(int candidateId, int year);
}
