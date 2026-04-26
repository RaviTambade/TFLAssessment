package com.transflower.tflassessment.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.Concepts;

@Service
public interface  ConceptsService {
     
    public CompletableFuture<Boolean> updateSubject(int id, int subjectId);
 
    public CompletableFuture<Boolean> insertConcept(Concepts concepts);

    public CompletableFuture<Boolean> updateConcept(int EvaluationCriteriaId, int subjectId);

}
