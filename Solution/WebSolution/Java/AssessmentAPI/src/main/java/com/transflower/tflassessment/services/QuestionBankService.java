package com.transflower.tflassessment.services;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;

public interface QuestionBankService  {

    public CompletableFuture<List<QuestionTitle>> getAllQuestions();

    public CompletableFuture<List<SubjectQuestion>> getQuestionsBySubject(int id);

    public CompletableFuture<List<QuestionDetails>> getQuestionsBySubjectAndCriteria(int subjectId, int criteriaId);

    public CompletableFuture<List<QuestionDetails>> getQuestionsWithSubjectAndCriteria();

    public CompletableFuture<List<Question>> getQuestions(int testId);

    public CompletableFuture<Boolean> updateAnswer(int id, char answerKey);

    public CompletableFuture<Question> getQuestion(int questionId);

    public CompletableFuture<Boolean> updateQuestionOptions(int id, Question options);

    public CompletableFuture<Boolean> updateSubjectCriteria(int questionId, Question question);

    public CompletableFuture<Boolean> insertQuestion(NewQuestion question);

    public CompletableFuture<String> getCriteria(String subject, int questionId);

}
