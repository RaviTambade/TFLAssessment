

package com.transflower.tflcomentor.ecm.repository;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public interface QuestionRepository {
    
    Question getQuestionById(long question_id);
    List<Question> getAllQuestions();
    List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);
    Long insert(Question q);
    void insertMcqOptions(Long question_id,
            String optionA,
            String optionB,
            String optionC,
            String optionD,
            String correctAnswer);
    void updateQuestionById(Long question_id, QuestionOptionsRequestDto dto);
    List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);
    QuestionOptionsRequestDto getQuestionDetails(Long question_id);
    List<Question> getQuestions(QuestionType questionType);
    // List<Questions> getAllQuestions();
    // List<QuestionResponse> getRecentQuestions();
    List<Question> getQuestions(QuestionStatus status);
   //multiple question status update
    void updateQuestionStatus(List<Long> question_ids, QuestionStatus status);
    //single question status update
    void updateQuestionStatus(long  question_id, QuestionStatus status);
    // Questions updateQuestion(Questions question);
    List<Question> getQuestionsByConceptId(Long conceptId);
    
}


