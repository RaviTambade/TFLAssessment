package com.transflower.tflassessment.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.services.EvaluationCriteriaService;


@RestController
@RequestMapping("api/criteria")
public class EvaluationCriteriaController {

    @Autowired
    private EvaluationCriteriaService svc;

    @PostMapping("/insert/Criteria")
    public boolean postinsertCriteria(@RequestBody EvaluationCriteria criteria) {
        return svc.insertCriteria(criteria);
    }

    @PutMapping("/update/Subject")
    public boolean putupdateSubject(@RequestParam int id, @RequestParam int subjectId) {
        return svc.updateSubject(id, subjectId);
    }

    @PutMapping("/update/Criteria")
    public boolean putupdateCriteria(@RequestParam int EvaluationCriteriaId, @RequestParam int questionId) {
        return svc.updateCriteria(questionId, EvaluationCriteriaId);
    }
}
