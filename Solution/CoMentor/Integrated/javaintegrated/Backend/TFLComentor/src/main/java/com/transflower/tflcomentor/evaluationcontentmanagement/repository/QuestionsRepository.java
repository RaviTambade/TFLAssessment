package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponse;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;

public interface QuestionsRepository {
    
    Question getQuestionById(long question_id);
    List<Question> getAllQuestions();
    List<Question> getQuestionsByDifficulty(String difficulty);
    Long insert(Question q);
    void insertMcqOptions(Long questionId,
            String optionA,
            String optionB,
            String optionC,
            String optionD,
            String correctAnswer);
    void updateQuestionById(Long id, QuestionRequestDto dto);
    List<QuestionResponse> getQuestionsFromLastTwoDays();
    QuestionResponseDto getQuestionDetailsById(Long id);
    List<QuestionResponse> getQuestionsByType(String questionType);
    // List<Questions> getAllQuestions();
    List<QuestionResponse> getDraftQuestions();
    // List<QuestionResponse> getRecentQuestions();
    List<QuestionResponse> getQuestionsByStatus(String questionStatus);
    void approveQuestionById(Long id);
    void rejectQuestionById(Long id);
    void approveQuestions(List<Long> questionId);
    void rejectQuestions(List<Long> questionId);
    // Questions updateQuestion(Questions question);
    List<Question> getQuestionsByConceptId(Long conceptId);
    
}


