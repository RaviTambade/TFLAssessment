package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public interface EvaluationCriteriaRepository {

    public boolean updateSubject(int id, int subjectId);

<<<<<<< HEAD
    boolean insertCriteria(EvaluationCriteria ec);
=======
    public boolean insertCriteria(EvaluationCriteria criteria);
>>>>>>> 948a715bb6906672a0aa84a6064efbd114d6fc51

    public boolean updateCriteria(int EvaluationCriteriaId, int questionId);

}
