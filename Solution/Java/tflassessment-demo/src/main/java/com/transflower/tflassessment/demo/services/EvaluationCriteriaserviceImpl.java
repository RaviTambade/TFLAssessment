// package com.transflower.tflassessment.demo.services;

<<<<<<< HEAD
// import com.transflower.tflassessment.demo.entities.*;
// import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepositoryImpl;
=======
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepository;
>>>>>>> 3173487a655a00882400c373282e250444d1b2c9

// public class EvaluationCriteriaserviceImpl implements EvaluationCriteriaService {

<<<<<<< HEAD
//     private EvaluationCriteriaRepositoryImpl repo=new EvaluationCriteriaRepositoryImpl();

//     @Override
//     public boolean updateSubject(int id, int subjectId) {
//         repo.updateSubject(id, subjectId);
//         return true;
//     }
=======
    private EvaluationCriteriaRepository repo=null;

    public EvaluationCriteriaserviceImpl(EvaluationCriteriaRepository  _repo ){
        this.repo=_repo;
    }
    @Override
    public boolean updateSubject(int id, int subjectId) {
        repo.updateSubject(id, subjectId);
        return true;
    }
>>>>>>> 3173487a655a00882400c373282e250444d1b2c9

//     @Override
//     public boolean insertCriteria(EvaluationCriteria ec) {
//         repo.insertCriteria(ec);
//         return true;
//     }

//     @Override
//     public boolean updateCriteria(int EvaluationCriteriaId, int subjectId) {
//         repo.updateCriteria(EvaluationCriteriaId, subjectId);
//         return true;
//     }

// }
