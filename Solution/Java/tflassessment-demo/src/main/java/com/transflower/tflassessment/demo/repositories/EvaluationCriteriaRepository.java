package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;

public interface EvaluationCriteriaRepository {

    public boolean updateSubject(int id, int subjectId);

<<<<<<< HEAD
    boolean insertCriteria(EvaluationCriteria ec);
=======
    public boolean insertCriteria(EvaluationCriteria criteria);
>>>>>>> c1e39152aeff42eb601cb31a1618b5188250ed7d

    public boolean updateCriteria(int EvaluationCriteriaId, int questionId);

}
