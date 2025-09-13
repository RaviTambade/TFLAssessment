package com.transflower.tflassessment.services;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;
import com.transflower.tflassessment.repositories.QuestionBankRepository;

@Service
public class QuestionBankServiceImpl implements QuestionBankService {

    private final QuestionBankRepository repository;

    @Autowired
    public QuestionBankServiceImpl(QuestionBankRepository repository) {
        this.repository = repository;
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<List<QuestionTitle>> getAllQuestions() {
        System.out.println("Executing getAllQuestionsAsync on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getAllQuestions());
    }

     @Override
    @Async("asyncExecutor")
    public CompletableFuture<Question> getQuestion(int questionId) {
        System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getQuestion(questionId));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<List<Question>> getQuestions(int testId) {
        System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getQuestions(testId));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<List<SubjectQuestion>> getQuestionsBySubject(int id) {
        System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getQuestionsBySubject(id));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<List<QuestionDetails>> getQuestionsBySubjectAndCriteria(int subjectId, int criteriaId) {
        System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getQuestionsBySubjectAndCriteria(subjectId, criteriaId));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<List<QuestionDetails>> getQuestionsWithSubjectAndCriteria() {
         System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getQuestionsWithSubjectAndCriteria());
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateAnswer(int id, char answerKey) {
         System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.updateAnswer(id, answerKey));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateQuestionOptions(int id, Question options) {
         System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.updateQuestionOptions(id, options));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateSubjectCriteria(int questionId, Question question) {
         System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.updateSubjectCriteria(questionId, question));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> insertQuestion(NewQuestion question) {
         System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.insertQuestion(question));
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<String> getCriteria(String subject, int questionId) {
         System.out.println("Executing getQuestion on: " + Thread.currentThread().getName());
        return CompletableFuture.supplyAsync(()->repository.getCriteria(subject, questionId));
    }

}
