package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public interface EvaluationCriteriaRepository {

    public boolean updateSubject(int id, int subjectId);

    boolean insertCriteria(EvaluationCriteria ec);

    public boolean updateCriteria(int EvaluationCriteriaId, int questionId);

}
