package com.transflower.tflassessment.demo.services;

import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;

public class EvaluationCriteriaserviceImpl implements EvaluationCriteriaService {

    private final EvaluationCriteriaRepository _repo;

    public EvaluationCriteriaserviceImpl(EvaluationCriteriaRepository repo) {
        _repo = repo;
    }

    @Override
    public boolean insertCriteria(EvaluationCriteria ec) {
        return _repo.insertCriteria(ec);
    }

    @Override
    public boolean updateCriteria(int EvaluationCriteriaId, int subjectId) {
        return _repo.updateCriteria(EvaluationCriteriaId, subjectId);
    }

    @Override
    public boolean updateSubject(int id, int subjectId) {
        return _repo.updateSubject(id, subjectId);
    }

}
