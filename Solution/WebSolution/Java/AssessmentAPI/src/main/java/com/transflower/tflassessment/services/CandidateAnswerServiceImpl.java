package com.transflower.tflassessment.services;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.CandidateAnswer;
import com.transflower.tflassessment.entities.CandidateTestDetails;
import com.transflower.tflassessment.repositories.CandidateAnswerRepository;

@Service
public class CandidateAnswerServiceImpl implements CandidateAnswerService {

    private final CandidateAnswerRepository _repo;

    @Autowired
    public CandidateAnswerServiceImpl(CandidateAnswerRepository repo) {
        this._repo = repo;
    }

    @Override
    public CompletableFuture<Boolean> insertCandidateAnswer(int candidateId, List<CandidateAnswer> answers,int assessmentId) {
        return CompletableFuture.supplyAsync(() -> _repo.insertCandidateAnswer(candidateId, answers,assessmentId));
    }

    @Override
    public CompletableFuture<List<CandidateAnswer>> getCandidateAnswer(int candidateId, int testId) {
        return CompletableFuture.supplyAsync(() -> _repo.getCandidateAnswer(candidateId, testId));
    }

    @Override
    public CompletableFuture<CandidateTestDetails> getCandidateTestDetails(int candidateId, int testId) {
        return CompletableFuture.supplyAsync(() -> _repo.getCandidateTestDetails(candidateId, testId));
    }

    @Override
    public CompletableFuture<List<CandidateAnswer>> getCandidateAnswerResult(int candidateId, int testId) {
        return CompletableFuture.supplyAsync(() -> _repo.getCandidateAnswerResult(candidateId, testId));
    }
}
