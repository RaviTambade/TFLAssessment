package com.transflower.tflcomentor.evaluationcontentmanagement.service;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;

import java.util.List;


public interface QuestionService {

    
    void createQuestion(QuestionRequestDto dto);
    List<Question> getAllQuestions();
    List<Question> getDraftQuestions();
    List<Question> getRecentQuestions();
    void approveQuestion(Long id);
    void rejectQuestion(Long id);
    void approveAllQuestions();
    void rejectAllQuestions();
    List<QuestionListResponseDto> getDraftQuestionList();
    List<QuestionListResponseDto> getRecentQuestionList();
    QuestionResponseDto getQuestionDetails(Long id);
    void updateQuestion(Long id, QuestionRequestDto dto);
}