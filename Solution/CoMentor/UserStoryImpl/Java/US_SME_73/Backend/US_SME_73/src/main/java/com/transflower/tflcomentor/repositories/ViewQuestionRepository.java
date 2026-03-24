package com.transflower.tflcomentor.repositories;

import java.util.List;

import com.transflower.tflcomentor.entities.Concept;
import com.transflower.tflcomentor.entities.ViewQuestion;

public interface ViewQuestionRepository {

    ViewQuestion findById(Long questionId);
    List<ViewQuestion> findAll();
    List<ViewQuestion> findByConceptId(Long conceptId);
    List<Concept> findAllConcepts();
}