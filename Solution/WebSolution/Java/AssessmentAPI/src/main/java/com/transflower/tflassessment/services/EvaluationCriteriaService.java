package com.transflower.tflassessment.services;

import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.EvaluationCriteria;
@Service

public interface  EvaluationCriteriaService {
     
    public boolean updateSubject(int id, int subjectId);
 
    public boolean insertCriteria(EvaluationCriteria ec);

    public boolean updateCriteria(int EvaluationCriteriaId, int subjectId);

}
