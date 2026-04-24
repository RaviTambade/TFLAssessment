package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;

public interface QuestionService {
    Question getQuestionById(long question_id);
      List<Question> getAllQuestions();
    List<Question> getQuestionsByDifficulty(String difficulty);

    void create(QuestionOptionsRequestDto dto);
    // List<Question> getAllQuestions();
    List<QuestionResponseDto> getDraftQuestions();
    List<QuestionResponseDto> getQuestionsFromLastTwoDays();
    void approveQuestionById(Long id);
    void rejectQuestionById(Long id);
    void approveQuestions(List<Long> questionId);
    void rejectQuestions(List<Long> questionId);
    // List<QuestionResponse> getRecentQuestionList();
    QuestionOptionsResponseDto getQuestionDetailsById(Long id);
    List<QuestionResponseDto> getQuestionsByType(String questionType);
    List<QuestionResponseDto> getQuestionsByStatus(String questionStatus);
    void updateQuestionById(Long id, QuestionOptionsRequestDto dto);
    List<QuestionDto> getQuestionsByConceptId(Long conceptId);

  
}

