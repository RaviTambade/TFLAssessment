package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Project;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Questions;

public interface QuestionsServices {
    Questions getQuestionById(long question_id);
      List<Questions> getAllQuestions();
    List<Questions> getQuestionsByDifficulty(String difficulty);

    void createQuestion(QuestionRequestDto dto);
    // List<Questions> getAllQuestions();
    List<Questions> getDraftQuestions();
    List<Questions> getRecentQuestions();
    void approveQuestionById(Long id);
    void rejectQuestionById(Long id);
    void approveAllQuestions();
    void rejectAllQuestions();
    List<QuestionListResponseDto> getDraftQuestionList();
    List<QuestionListResponseDto> getRecentQuestionList();
    QuestionResponseDto getQuestionDetailsById(Long id);
    List<QuestionListResponseDto> getQuestionsByType(String questionType);
    List<QuestionListResponseDto> findByStatus(String questionStatus);
    void updateQuestionById(Long id, QuestionRequestDto dto);
 

  
}

