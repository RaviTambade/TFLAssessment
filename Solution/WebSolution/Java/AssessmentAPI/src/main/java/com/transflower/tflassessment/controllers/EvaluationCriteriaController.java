package com.transflower.tflassessment.controllers;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.services.EvaluationCriteriaService;


@RestController
@RequestMapping("/api/criteria")
public class EvaluationCriteriaController {

    @Autowired
    private EvaluationCriteriaService svc;

    @PostMapping("/insert")
    public CompletableFuture<Boolean> insertCriteria(@RequestBody EvaluationCriteria criteria) {
        return svc.insertCriteria(criteria);
    }

   @PutMapping("{id}/subjects/{subjectId}")
    public CompletableFuture<Boolean> updateSubject(@PathVariable("id") int id, @PathVariable ("subjectId")int subjectId) {
    return svc.updateSubject(id, subjectId);
}

    @PutMapping("{id}/questions/{evaluationCriteriaId}")
    public CompletableFuture<Boolean> updateCriteria(@PathVariable("id")int id, @PathVariable("evaluationCriteriaId") int evaluationCriteriaId) {
        return svc.updateCriteria(id, evaluationCriteriaId);
    }
   
}
