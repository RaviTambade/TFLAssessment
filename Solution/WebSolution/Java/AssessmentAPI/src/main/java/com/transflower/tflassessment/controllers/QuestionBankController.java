package com.transflower.tflassessment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;
import com.transflower.tflassessment.services.QuestionBankService;

@RestController
public class QuestionBankController {
    
    @Autowired
    private QuestionBankService svc;

    @GetMapping("/questions")
    public List<QuestionTitle> getAllQuestions(){
        return svc.getAllQuestions();
    }

    @GetMapping("questions/{qestionId}")
    public Question getQuestion(@PathVariable("questionId")int questionId){
        return svc.getQuestion(questionId);
    }
    
    @GetMapping("questions/subjects/{subject}/questions/{questionId}")
    public String getCriteria(@PathVariable("subject") String subject,@PathVariable("questionId") int questionId){
        return svc.getCriteria(subject, questionId);
    }

    @GetMapping("questions/subjects/{id}")
    public List<SubjectQuestion> getQuestionsBySubject(@PathVariable("id")int id){
        return svc.getQuestionsBySubject(id);
    }

    @GetMapping("questions/tests/{testId}")
    public List<Question> getQuestions(@PathVariable("testId")int testId){
        return svc.getQuestions(testId);
    }

    @GetMapping("questions/subjects/{subjectId}/criterias/{criteriaId}")
    public List<QuestionDetails> getQuestionsBySubjectAndCriteria(@PathVariable("subjectId") int subjectId,@PathVariable("criteriaId")int criteriaId){
        return svc.getQuestionsBySubjectAndCriteria(subjectId, criteriaId);
    }

    @GetMapping("questions/subjects/criterias")
    public List<QuestionDetails> getQuestionsWithSubjectAndCriteria(){
        return svc.getQuestionsWithSubjectAndCriteria();
    }

    @GetMapping("question/{id}/updateanswer/{answerKey}")
    public boolean updateAnswer(@PathVariable("id")int id,@PathVariable("answerKey") char answerKey){
        return svc.updateAnswer(id, answerKey);
    }

    @GetMapping("update/options/question/{id}")
    public boolean updateQuestionOptions(@PathVariable("id")int id,@PathVariable("option")Question option){
        return svc.updateQuestionOptions(id, option);
    }

    @GetMapping("/question")
    public boolean  insertQuestion(@PathVariable("question")NewQuestion question){
        return svc.insertQuestion( question);
    }
 
    
}
