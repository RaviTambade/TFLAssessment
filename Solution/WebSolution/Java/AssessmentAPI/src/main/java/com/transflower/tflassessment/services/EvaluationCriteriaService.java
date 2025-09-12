package com.transflower.tflassessment.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.EvaluationCriteria;

@Service
public interface  EvaluationCriteriaService {
     
    public CompletableFuture<Boolean> updateSubject(int id, int subjectId);
 
    public CompletableFuture<Boolean> insertCriteria(EvaluationCriteria ec);

    public CompletableFuture<Boolean> updateCriteria(int EvaluationCriteriaId, int subjectId);

}
