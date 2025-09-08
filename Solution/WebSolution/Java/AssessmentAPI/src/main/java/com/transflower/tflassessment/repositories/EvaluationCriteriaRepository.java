package com.transflower.tflassessment.repositories;

import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.EvaluationCriteria;
@Repository 
public interface EvaluationCriteriaRepository {

    public boolean updateSubject(int id, int subjectId);

    public boolean insertCriteria(EvaluationCriteria criteria);

    public boolean updateCriteria(int EvaluationCriteriaId, int questionId);

}
