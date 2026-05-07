package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.QuestionDisplayDto;
import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.QuestionStatusDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public interface QuestionService {
    
    public Long insertQuestion(Question question);

    public Long createQuestionWithOptions(QuestionOptionsRequestDto dto);
    
    public QuestionDisplayDto getQuestionById(long questionId);

    public List<QuestionDisplayDto> getAllQuestions();

    public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);

    public void updateQuestionById(Long questionId, QuestionOptionsRequestDto dto);

    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);

    public QuestionOptionsRequestDto getQuestionDetails(Long questionId);

    public List<Question> getQuestions(QuestionType questionType);

    public List<QuestionStatusDto> getQuestions(QuestionStatus status);

    public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status);

    public void updateQuestionStatus(long questionId, QuestionStatus status);

    public  List<Question> getQuestionsByConceptId(Long conceptId);

    public int getQuestionCountByConcept(String concept);
}


