package com.transflower.tflassessment.services;

import com.transflower.tflassessment.entities.EvaluationCriteria;

public interface  EvaluationCriteriaService {
     
    public boolean updateSubject(int id, int subjectId);
 
    public boolean insertCriteria(EvaluationCriteria ec);

    public boolean updateCriteria(int EvaluationCriteriaId, int subjectId);

}
