package com.transflower.tflcomentor.services;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.dtos.QuestionDto;

import java.util.List;

public interface IQuestionService {

    
    void createQuestion(QuestionDto dto);
    List<Question> getAllQuestions();
    List<Question> getDraftQuestions();
    List<Question> getRecentQuestions();
    void approveQuestion(Long id);
    void rejectQuestion(Long id);
    void approveAllQuestions();
    void rejectAllQuestions();
}