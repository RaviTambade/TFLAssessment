package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponse;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;

public interface QuestionsServices {
    Question getQuestionById(long question_id);
      List<Question> getAllQuestions();
    List<Question> getQuestionsByDifficulty(String difficulty);

    void createQuestion(QuestionRequestDto dto);
    // List<Question> getAllQuestions();
    List<QuestionResponse> getDraftQuestions();
    List<QuestionResponse> getRecentQuestions();
    void approveQuestionById(Long id);
    void rejectQuestionById(Long id);
    void approveQuestions(List<Long> questionId);
    void rejectQuestions(List<Long> questionId);
    List<QuestionResponse> getRecentQuestionList();
    QuestionResponseDto getQuestionDetailsById(Long id);
    List<QuestionResponse> getQuestionsByType(String questionType);
    List<QuestionResponse> getQuestionsByStatus(String questionStatus);
    void updateQuestionById(Long id, QuestionRequestDto dto);
    List<QuestionDto> getQuestionsByConceptId(Long conceptId);

  
}

