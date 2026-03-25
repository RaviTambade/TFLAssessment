package com.transflower.tflcomentor.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.transflower.tflcomentor.dtos.ViewConceptsQuestionDto;
import com.transflower.tflcomentor.dtos.ViewQuestionDto;
import com.transflower.tflcomentor.services.ViewQuestionService;

@RestController
@RequestMapping("/api")
public class ViewQuestionController {

    @Autowired
    private ViewQuestionService questionService;

    @GetMapping("/sme/questions/{questionId}")
    public ResponseEntity<?> getQuestionById(@PathVariable Long questionId) {
        ViewQuestionDto question = questionService.getQuestionById(questionId);

        if (question == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(question);
    }

    @GetMapping("/sme/allquestions")
    public ResponseEntity<?> getAllQuestions() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }

    @GetMapping("/sme/concepts")
    public ResponseEntity<?> getAllConcepts() {
        return ResponseEntity.ok(questionService.getAllConcepts());
    }

    @GetMapping("/sme/concepts/{conceptId}/questions")
    public ResponseEntity<?> getQuestionsByConceptId(@PathVariable Long conceptId) {
        List<ViewConceptsQuestionDto> questions = questionService.getQuestionsByConceptId(conceptId);   
        return ResponseEntity.ok(questions);
    }
}