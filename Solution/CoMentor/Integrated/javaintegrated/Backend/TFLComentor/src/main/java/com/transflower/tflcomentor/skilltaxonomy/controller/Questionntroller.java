package com.transflower.tflcomentor.skilltaxonomy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.service.IQuestionsService;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class QuestionController {

    private final IQuestionsService service;

    public QuestionController(IQuestionsService service) {
        this.service = service;
    }
 
    @GetMapping("/{assessmentId}/student/{studentId}")
    public ResponseEntity<?> getStudentAssessmentQuestionsResultAsync(
            @PathVariable int assessmentId, 
            @PathVariable int studentId) {
        var result = service.getStudentAssessmentQuestionsResultAsync(assessmentId, studentId);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{questionId}/answer")
    public ResponseEntity<?> getQuestionDetailsWithAnswer(@PathVariable int questionId) {
        var result = service.getQuestionDetailsWithAnswer(questionId);

        if (result == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> questionDetailsWithAns(@PathVariable int id) {
        var result = service.questionDetailsWithAns(id);

        if (result == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity<?> getQuestionDetails(@PathVariable int questionId) {
        var result = service.getQuestionDetails(questionId);

        if (result == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(result);
    }
}