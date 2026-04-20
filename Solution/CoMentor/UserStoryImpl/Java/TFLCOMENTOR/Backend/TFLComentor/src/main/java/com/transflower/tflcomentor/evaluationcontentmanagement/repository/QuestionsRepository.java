package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import java.util.List;


import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Questions;

public interface QuestionsRepository {
    Questions getQuestionById(long question_id);
    List<Questions> getAllQuestions();
    List<Questions> getQuestionsByDifficulty(String difficulty);
    List<Questions> findByType(String questionType);

    Long insertQuestion(Questions q);
    void insertMcqOptions(Long questionId,
            String optionA,
            String optionB,
            String optionC,
            String optionD,
            String correctAnswer);
    List<QuestionListResponseDto> getDraftQuestionList();
    void updateQuestionById(Long id, QuestionRequestDto dto);
    List<QuestionListResponseDto> getRecentQuestionList();
    QuestionResponseDto getQuestionDetailsById(Long id);
    List<QuestionListResponseDto> getQuestionsByType(String questionType);
    // List<Questions> getAllQuestions();
    List<Questions> getDraftQuestions();
    List<Questions> getRecentQuestions();
    List<Questions> findByStatus(String questionStatus);
    void approveQuestionById(Long id);
    void rejectQuestionById(Long id);
    void approveAllQuestions();
    void rejectAllQuestions();
    // Questions updateQuestion(Questions question);
}


