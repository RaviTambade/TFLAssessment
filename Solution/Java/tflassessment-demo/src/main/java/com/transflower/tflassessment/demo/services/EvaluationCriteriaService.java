package com.transflower.tflassessment.demo.services;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public interface EvaluationCriteriaService {

    boolean updateSubject(int id, int subjectId);

    boolean insertCriteria(EvaluationCriteria criteria);

    boolean updateCriteria(int EvaluationCriteriaId, int subjectId);

}
