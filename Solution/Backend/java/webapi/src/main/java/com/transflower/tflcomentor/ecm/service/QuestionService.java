package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.DescriptiveQuestion;
import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.dto.response.QuestionWithStatus;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public interface QuestionService {

    // public Long createQuestionWithOptions(QuestionOptionsRequest   dto);
    public QuestionDisplay getQuestionById(long questionId);

    public List<QuestionDisplay> getAllQuestions(Long user_role_Id);

    public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);

    public void updateQuestionDetailsById(Long questionId, QuestionOptionsRequest dto);

    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);

    public QuestionOptionsRequest getQuestionDetails(Long questionId);

    public List<DescriptiveQuestion> getDescriptiveQuestion(QuestionType questionType);

    public List<QuestionWithStatus> getQuestions(QuestionStatus status);

    public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status);

    public void updateQuestionStatus(long questionId, QuestionStatus status);

    public List<Question> getQuestionsByConcept(String concept,Long userId,Long roleId);

    public int getQuestionCountByConcept(String concept);

    public void insertCompleteQuestion(CompleteQuestion q);

    public List<String> getConcepts(Long userId,Long roleId);
}
