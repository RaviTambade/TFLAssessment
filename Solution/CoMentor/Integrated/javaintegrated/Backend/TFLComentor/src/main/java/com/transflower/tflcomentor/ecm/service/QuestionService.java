package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;

public interface QuestionService {

    Long insertQuestion(Question question);

    Long createQuestionWithOptions(QuestionOptionsRequestDto dto);

    Question getQuestionById(long question_id);

    List<Question> getAllQuestions();

    List<Question> getQuestionsByDifficulty(String difficulty);

    void updateQuestionById(Long id, QuestionOptionsRequestDto dto);

    List<QuestionResponseDto> getQuestions(LocalDate fromDate, LocalDate toDate);

    QuestionOptionsResponseDto getQuestionDetails(Long id);

    List<QuestionResponseDto> getQuestions(String questionType);

    List<QuestionResponseDto> getQuestions(QuestionStatus status);

    void updateQuestionStatus(List<Long> questionId, QuestionStatus status);

    void updateQuestionStatus(long questionId, QuestionStatus status);

    List<Question> getQuestionsByConceptId(Long conceptId);
}


