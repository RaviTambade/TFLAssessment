package com.transflower.tflassessment.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.services.EvaluationCriteriaService;


@RestController
@RequestMapping("/api/criteria")
public class EvaluationCriteriaController {

    @Autowired
    private EvaluationCriteriaService svc;

    @PostMapping("/insert")
    public boolean postinsertCriteria(@RequestBody EvaluationCriteria criteria) {
        return svc.insertCriteria(criteria);
    }

    @PutMapping("{id}/subjects/{subjectId}")
    public boolean putupdateSubject(@RequestParam int id, @RequestParam int subjectId) {
        return svc.updateSubject(id, subjectId);
    }

    @PutMapping("{evaluationCriteriaId}/questions/{id}")
    public boolean putupdateCriteria(@PathVariable int id, @PathVariable int evaluationCriteriaId) {
        return svc.updateCriteria(id, evaluationCriteriaId);
    }
}