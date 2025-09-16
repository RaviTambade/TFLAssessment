
package com.transflower.tflassessment.services;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.CandidateAnswer;
import com.transflower.tflassessment.entities.CandidateTestDetails;

public interface CandidateAnswerService {
    
    
    CompletableFuture<Boolean> insertCandidateAnswer(int candidateId, List<CandidateAnswer> answers);

    CompletableFuture<List<CandidateAnswer>> getCandidateAnswer(int candidateId, int testId);

    
    CompletableFuture<List<CandidateAnswer>> getCandidateAnswerResult(int candidateId, int testId);

    
    CompletableFuture<CandidateTestDetails> getCandidateTestDetails(int candidateId, int testId); 
}
