package com.transflower.tflassessment.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.repositories.EvaluationCriteriaRepository;
@Service
public class EvaluationCriteriaserviceImpl implements EvaluationCriteriaService {

    private final EvaluationCriteriaRepository _repo;
    @Autowired
    public EvaluationCriteriaserviceImpl(EvaluationCriteriaRepository repo) {
        _repo = repo;
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> insertCriteria(EvaluationCriteria ec) {
        return CompletableFuture.completedFuture(_repo.insertCriteria(ec));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateCriteria(int id, int EvaluationCriteriaId) {
        return CompletableFuture.completedFuture(_repo.updateCriteria(id, EvaluationCriteriaId));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateSubject(int id, int evaluationCriteriaId) {
        return CompletableFuture.completedFuture(_repo.updateSubject(id, evaluationCriteriaId));
    }

}
