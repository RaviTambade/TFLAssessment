package com.transflower.tflassessment.repositories;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.*;

@Repository 
public interface Concepts {

    public CompletableFuture<Boolean> updateSubject(int id, int subjectId);

    public CompletableFuture<Boolean> insertConcept(Concepts criteria);

    public CompletableFuture<Boolean> updateConcept(int ConceptId, int questionId);

    public CompletableFuture<List<Concepts>> getConceptBySubjectId(int subjectId);

    public CompletableFuture<List<ConceptQuestionCount>> getConceptQuestionCount(int subjectId);
 
}
