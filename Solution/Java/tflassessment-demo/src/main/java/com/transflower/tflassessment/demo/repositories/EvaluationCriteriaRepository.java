package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public interface EvaluationCriteriaRepository {

    boolean updateSubject(int id, int subjectId);

    boolean insertCriteria(EvaluationCriteria ec);

    boolean updateCriteria(int EvaluationCriteriaId, int subjectId);

}
