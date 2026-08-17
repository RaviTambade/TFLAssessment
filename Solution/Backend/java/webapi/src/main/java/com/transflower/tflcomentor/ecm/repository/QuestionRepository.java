package com.transflower.tflcomentor.ecm.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.DescriptiveQuestion;
import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
public interface QuestionRepository {

    CompletableFuture<QuestionDisplay> getQuestionById(long question_id);
    CompletableFuture<Void> updateQuestionDetailsById(Long question_id, QuestionOptionsRequest dto);
    CompletableFuture<List<Question>> getQuestions(LocalDate fromDate, LocalDate toDate);
    CompletableFuture<QuestionOptionsRequest> getQuestionDetails(Long question_id);
    CompletableFuture<List<DescriptiveQuestion>> getDescriptiveQuestion(QuestionType questionType);
    CompletableFuture<List<Question>> getQuestionsByConcept(String concept,Long userId,Long roleId);
    public CompletableFuture<List<String>> getConcepts( Long userId, Long roleId);
    CompletableFuture<Void> insertCompleteQuestion(CompleteQuestion q);
    public CompletableFuture<Integer> getQuestionCount(); 
    
    // List<QuestionDisplay> getAllQuestions( Long user_role_Id);
    // List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);
    //List<QuestionDisplayToMentor> getAllQuestions(Long userId,Long roleId);
    // List<QuestionResponse> getRecentQuestions();
    // List<QuestionWithStatus> getQuestions(QuestionStatus status);
    //multiple question status update
   // void updateQuestionStatus(List<Long> question_ids, QuestionStatus status);
    //single question status update
   // void updateQuestionStatus(long question_id, QuestionStatus status);
    // Questions updateQuestion(Questions question);
   // void insertQuestionFrameworkConceptMapping(Long questionId, Long frameworkConceptId);
    //Long getFrameworkConceptId(int conceptId, int frameworkId);
    //int getQuestionCountByConcept(String concept);
    
}
