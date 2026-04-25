package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;

public interface QuestionService {
    
    public Long insertQuestion(Question question);

    public Long createQuestionWithOptions(QuestionOptionsRequestDto dto);

    public Question getQuestionById(long questionId);

    public List<Question> getAllQuestions();

    public List<Question> getQuestionsByDifficulty(DifficultyLevels difficulty);

    public void updateQuestionById(Long questionId, QuestionOptionsRequestDto dto);

    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);

    public QuestionOptionsRequestDto getQuestionDetails(Long questionId);

    public List<Question> getQuestions(QuestionTypes questionType);

    public List<Question> getQuestions(QuestionStatus status);

    public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status);

    public void updateQuestionStatus(long questionId, QuestionStatus status);

    public  List<Question> getQuestionsByConceptId(Long conceptId);
}


