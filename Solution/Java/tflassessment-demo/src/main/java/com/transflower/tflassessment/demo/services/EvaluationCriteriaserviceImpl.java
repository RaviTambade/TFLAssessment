package com.transflower.tflassessment.demo.services;
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepository;

public class EvaluationCriteriaserviceImpl implements EvaluationCriteriaService {

    private EvaluationCriteriaRepository repo=null;

    public EvaluationCriteriaserviceImpl(EvaluationCriteriaRepository  _repo ){
        this.repo=_repo;
    }
    @Override
    public boolean updateSubject(int id, int subjectId) {
        repo.updateSubject(id, subjectId);
        return true;
    }

    @Override
    public boolean insertCriteria(EvaluationCriteria ec) {
        repo.insertCriteria(ec);
        return true;
    }

    @Override
    public boolean updateCriteria(int EvaluationCriteriaId, int subjectId) {
        repo.updateCriteria(EvaluationCriteriaId, subjectId);
        return true;
    }

}
