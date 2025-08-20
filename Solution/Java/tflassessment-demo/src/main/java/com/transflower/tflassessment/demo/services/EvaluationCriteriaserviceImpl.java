package com.transflower.tflassessment.demo.services;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepository;

public class EvaluationCriteriaserviceImpl implements EvaluationCriteriaService {

    private EvaluationCriteriaRepository repo;

    @Override
    public boolean updateSubject(int id, int subjectId) {
        repo.updateSubject(id, subjectId);
        return true;
    }

    @Override
    public boolean insertCriteria(EvaluationCriteria criteria) {
        repo.insertCriteria(criteria);
        return true;
    }

    @Override
    public boolean updateCriteria(int EvaluationCriteriaId, int subjectId) {
        repo.updateCriteria(EvaluationCriteriaId, subjectId);
        return true;
    }

}
