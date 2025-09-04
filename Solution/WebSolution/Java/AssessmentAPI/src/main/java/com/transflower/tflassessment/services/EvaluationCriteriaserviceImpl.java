package com.transflower.tflassessment.services;

import com.transflower.tflassessment.entities.*;
import com.transflower.tflassessment.repositories.*;

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
