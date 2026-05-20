package com.transflower.tflcomentor.ecm.repository;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.QuestionWithStatus;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.dto.response.DescriptiveQuestion;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
public interface QuestionRepository {

    QuestionDisplay getQuestionById(long question_id);
    List<QuestionDisplay> getAllQuestions();
    List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);
    void updateQuestionDetailsById(Long question_id, QuestionOptionsRequest dto);
    List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);
    QuestionOptionsRequest getQuestionDetails(Long question_id);
    List<DescriptiveQuestion> getDescriptiveQuestion(QuestionType questionType);
    // List<Questions> getAllQuestions();
    // List<QuestionResponse> getRecentQuestions();
    List<QuestionWithStatus> getQuestions(QuestionStatus status);
    //multiple question status update
    void updateQuestionStatus(List<Long> question_ids, QuestionStatus status);
    //single question status update
    void updateQuestionStatus(long question_id, QuestionStatus status);
    // Questions updateQuestion(Questions question);
    List<Question> getQuestionsByConcept(String concept);
    public List<String> getConcepts();
    void insertQuestionFrameworkConceptMapping(Long questionId, Long frameworkConceptId);
    Long getFrameworkConceptId(int conceptId, int frameworkId);
    int getQuestionCountByConcept(String concept);
    void insertCompleteQuestion(CompleteQuestion q);
}
