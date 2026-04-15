package com.transflower.tflcomentor.services;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.dtos.QuestionListDto;

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
    List<QuestionListDto> getDraftQuestionList();
    List<QuestionListDto> getRecentQuestionList();
    QuestionDto getQuestionDetails(Long id);
    void updateQuestion(Long id, QuestionDto dto);
}