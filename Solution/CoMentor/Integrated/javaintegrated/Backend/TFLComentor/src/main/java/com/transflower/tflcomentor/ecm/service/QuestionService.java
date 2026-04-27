package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.skilltaxonomy.entity.ConceptsInFramework;

public interface QuestionService {
    
    public Long insertQuestion(Question question,int conceptId, int frameworkId);

    public Long createQuestionWithOptions(QuestionOptionsRequestDto dto,int conceptId, int frameworkId);

    public Question getQuestionById(long questionId);

    public List<Question> getAllQuestions();

    public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);

    public void updateQuestionById(Long questionId, QuestionOptionsRequestDto dto);

    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);

    public QuestionOptionsRequestDto getQuestionDetails(Long questionId);

    public List<Question> getQuestions(QuestionType questionType);

    public List<Question> getQuestions(QuestionStatus status);

    public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status);

    public void updateQuestionStatus(long questionId, QuestionStatus status);

    public  List<Question> getQuestionsByConceptId(Long conceptId);
}


