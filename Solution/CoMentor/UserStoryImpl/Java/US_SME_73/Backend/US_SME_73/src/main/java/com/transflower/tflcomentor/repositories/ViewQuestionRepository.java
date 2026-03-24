package com.transflower.tflcomentor.repositories;

import java.util.List;

import com.transflower.tflcomentor.entities.ViewQuestion;
public interface ViewQuestionRepository {

    ViewQuestion findById(Long questionId);
    List<ViewQuestion> findAll();
}