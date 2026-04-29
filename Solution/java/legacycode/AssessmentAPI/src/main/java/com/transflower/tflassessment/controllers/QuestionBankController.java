package com.transflower.tflassessment.controllers;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;
import com.transflower.tflassessment.services.QuestionBankService;

@RestController
@RequestMapping("api/questionbank")
public class QuestionBankController {
    
    @Autowired
    private QuestionBankService svc;

    @GetMapping("/questions")
    public CompletableFuture<List<QuestionTitle>> getAllQuestions(){
        return svc.getAllQuestions();
    }

    @GetMapping("questions/{questionId}")
    public CompletableFuture<Question> getQuestion(@PathVariable("questionId") int questionId) {
        return svc.getQuestion(questionId);
    }

    @GetMapping("questions/subjects/{subject}/questions/{questionId}")
    public CompletableFuture<String> getConcept(@PathVariable("subject") String subject,@PathVariable("questionId") int questionId){
        return svc.getConcept(subject, questionId);
    }

    @GetMapping("questions/subjects/{id}")
    public CompletableFuture<List<SubjectQuestion>> getQuestionsBySubject(@PathVariable("id")int id){
        return svc.getQuestionsBySubject(id);
    }

    @GetMapping("questions/tests/{testId}")
    public CompletableFuture<List<Question>> getQuestions(@PathVariable("testId")int testId){
        return svc.getQuestions(testId);
    }

    @GetMapping("questions/subjects/{subjectId}/concepts/{conceptId}")
    public CompletableFuture<List<QuestionDetails>> getQuestionsBySubjectAndConcept(@PathVariable("subjectId") int subjectId,@PathVariable("conceptId")int conceptId){
        return svc.getQuestionsBySubjectAndConcept(subjectId, conceptId);
    }

    @GetMapping("/questions/subjects/concepts")
    public CompletableFuture<List<QuestionDetails>> getQuestionsWithSubjectAndConcept(){
        return svc.getQuestionsWithSubjectAndConcept();
    }

    @PutMapping("/question/{id}/updateanswer/{answerKey}")
    public CompletableFuture<Boolean> updateAnswer(@PathVariable("id")int id,@PathVariable("answerKey") char answerKey){
        return svc.updateAnswer(id, answerKey);
    }

    @PutMapping("/update/options/question/{id}")
    public CompletableFuture<Boolean> updateQuestionOptions(@PathVariable("id")int id,@RequestBody Question option){
        return svc.updateQuestionOptions(id, option);
    }

    @PostMapping("/question")
    public CompletableFuture<Boolean>  insertQuestion(@RequestBody NewQuestion question){
        return svc.insertQuestion(question);
    }    

}