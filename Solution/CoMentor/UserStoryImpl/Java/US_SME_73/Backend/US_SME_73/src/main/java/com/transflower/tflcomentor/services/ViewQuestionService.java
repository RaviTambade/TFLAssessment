package com.transflower.tflcomentor.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.transflower.tflcomentor.entities.*;
import com.transflower.tflcomentor.dtos.ViewConceptsQuestionDto;
import com.transflower.tflcomentor.dtos.AllQuestionsDto;
import com.transflower.tflcomentor.dtos.ViewQuestionDto;
import com.transflower.tflcomentor.repositories.ViewQuestionRepository;

public interface ViewQuestionService {
    ViewQuestionDto getQuestionById(Long questionId);
    List<AllQuestionsDto> getAllQuestions();
    List<ViewConceptsQuestionDto> getQuestionsByConceptId(Long conceptId);
    List<Concept> getAllConcepts();
}