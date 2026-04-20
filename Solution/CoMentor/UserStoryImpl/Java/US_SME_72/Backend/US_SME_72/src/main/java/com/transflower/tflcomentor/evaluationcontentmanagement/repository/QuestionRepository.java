package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;

import java.util.List;

public interface QuestionRepository {

    Long insertQuestion(Question q);
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
    List<Question> getAllQuestions();
    List<Question> getDraftQuestions();
    List<Question> getRecentQuestions();
    void approveQuestionById(Long id);
    void rejectQuestionById(Long id);
    void approveAllQuestions();
    void rejectAllQuestions();
}
