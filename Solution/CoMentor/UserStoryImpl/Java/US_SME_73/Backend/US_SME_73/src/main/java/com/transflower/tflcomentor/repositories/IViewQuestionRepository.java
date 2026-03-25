package com.transflower.tflcomentor.repositories;

import java.util.List;

import com.transflower.tflcomentor.entities.Concept;
import com.transflower.tflcomentor.entities.Question;

public interface IViewQuestionRepository {

    Question findById(Long questionId);
    List<Question> findAll();
    List<Question> findByConceptId(Long conceptId);
    List<Concept> findAllConcepts();
}