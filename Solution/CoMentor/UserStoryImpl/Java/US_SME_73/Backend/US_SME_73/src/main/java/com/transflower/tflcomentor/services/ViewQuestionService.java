package com.transflower.tflcomentor.services;

import java.util.List;

import com.transflower.tflcomentor.dtos.AllQuestionsDto;
import com.transflower.tflcomentor.dtos.ViewQuestionDto;
public interface ViewQuestionService {
    ViewQuestionDto getQuestionById(Long questionId);
    List<AllQuestionsDto> getAllQuestions();
}