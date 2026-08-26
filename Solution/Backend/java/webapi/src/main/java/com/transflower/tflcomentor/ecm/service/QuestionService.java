package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
import com.transflower.tflcomentor.ecm.entity.Question;

public interface QuestionService {

    // public Long createQuestionWithOptions(QuestionOptionsRequest   dto);
    public CompletableFuture<QuestionDisplay> getQuestionById(long questionId);
    public CompletableFuture<Integer> getQuestionCount();

   // public List<QuestionDisplay> getAllQuestions(Long user_role_Id);

   // public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);

    public CompletableFuture<Void> updateQuestionDetailsById(Long questionId, QuestionOptionsRequest dto);

    public CompletableFuture<List<Question>> getQuestions(LocalDate fromDate, LocalDate toDate);

    public CompletableFuture<QuestionOptionsRequest> getQuestionDetails(Long questionId);

   // List<QuestionDisplayToMentor> getAllQuestions(Long userId,Long roleId);


   // public List<DescriptiveQuestion> getDescriptiveQuestion(QuestionType questionType);

    //public List<QuestionWithStatus> getQuestions(QuestionStatus status);

    //public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status);

    //public void updateQuestionStatus(long questionId, QuestionStatus status);

    public CompletableFuture<List<Question>> getQuestionsByConcept(String concept,Long userId,Long roleId);

    //public int getQuestionCountByConcept(String concept);

    public CompletableFuture<Void> insertCompleteQuestion(CompleteQuestion q);

    public CompletableFuture<List<String>> getConcepts(Long userId,Long roleId);
}
