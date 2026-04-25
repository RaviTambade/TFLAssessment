package com.transflower.tflcomentor.ecm.repository;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;

public interface QuestionRepository {
    
    Question getQuestionById(long question_id);
    List<Question> getAllQuestions();
    List<Question> getQuestionsByDifficulty(String difficulty);
    Long insert(Question q);
    void insertMcqOptions(Long question_id,
            String optionA,
            String optionB,
            String optionC,
            String optionD,
            String correctAnswer);
    void updateQuestionById(Long question_id, QuestionOptionsRequestDto dto);
    List<QuestionResponseDto> getQuestions(LocalDate fromDate, LocalDate toDate);
    QuestionOptionsResponseDto getQuestionDetails(Long question_id);
    List<QuestionResponseDto> getQuestions(String questionType);
    // List<Questions> getAllQuestions();
    // List<QuestionResponse> getRecentQuestions();
    List<QuestionResponseDto> getQuestions(QuestionStatus status);
   //multiple question status update
    void updateQuestionStatus(List<Long> question_ids, QuestionStatus status);
    //single question status update
    void updateQuestionStatus(long  question_id, QuestionStatus status);
    // Questions updateQuestion(Questions question);
    List<Question> getQuestionsByConceptId(Long conceptId);
    
}


