package com.transflower.tflassessment.demo.repositories;
import com.transflower.tflassessment.demo.entities.*;
public interface EvaluationCriteriaRepository {
    
    boolean  updateSubject(int id, int subjectId);

      boolean insertCriteria(EvaluationCriteria criteria);

      boolean updateCriteria(int evaluationCriteriaId, int questionId);


    
}
