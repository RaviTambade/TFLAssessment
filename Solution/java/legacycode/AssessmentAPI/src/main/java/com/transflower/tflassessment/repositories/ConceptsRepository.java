package com.transflower.tflassessment.repositories;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.Concepts;

@Repository 
public interface ConceptsRepository {

    public CompletableFuture<Boolean> updateSubject(int id, int subjectId);

    public CompletableFuture<Boolean> insertConcept(Concepts concept);

    public CompletableFuture<Boolean> updateConcept(int id, int conceptId);

   public CompletableFuture<List<Concepts>> getConceptBySubjectId(int subjectId);

    //public CompletableFuture<List<ConceptQuestionCount>> getConceptQuestionCount(int subjectId);
 
}
