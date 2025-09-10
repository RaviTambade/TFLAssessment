package com.transflower.tflassessment.controllers;

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
@RequestMapping("api/criteria")
public class EvaluationCriteriaController {

    @Autowired
    private EvaluationCriteriaService svc;

    @PostMapping
    public boolean insertCriteria(@RequestBody EvaluationCriteria criteria) {
        return svc.insertCriteria(criteria);
    }

    @PutMapping("{id}/subjects/{subjectId}")
    public boolean updateSubject(@PathVariable("id") int id, @PathVariable("subjectId") int subjectId) {
        return svc.updateSubject(id, subjectId);
    }

    @PutMapping("{evaluationCriteriaId}/questions/{questionId}")
    public boolean updateCriteria(@PathVariable("evaluationCriteriaId") int evaluationCriteriaId,@PathVariable("questionId") int questionId) {
        return svc.updateCriteria(evaluationCriteriaId, questionId);
    }
}
