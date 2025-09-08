package com.transflower.tflassessment.services;

import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.repositories.EvaluationCriteriaRepository;

@Service

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
    public boolean updateCriteria(int id, int EvaluationCriteriaId) {
        return _repo.updateCriteria(id, EvaluationCriteriaId);
    }

    @Override
    public boolean updateSubject(int id, int subjectId) {
        return _repo.updateSubject(id, subjectId);
    }

}
