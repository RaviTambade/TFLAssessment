package com.transflower.tflcomentor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.services.internal.QuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class QuestionController {

    private final QuestionService service;

    public QuestionController(QuestionService service) {
        this.service = service;
    }

    @GetMapping("/questions")
    public List<Object> fetchAllQuestions() {
        return service.getAllQuestionsFromApi();
    }

    @GetMapping("/questions/{id}")
    public Object fetchQuestionById(@PathVariable Long id) {
        return service.getQuestionByIdFromApi(id);
    }

    @PutMapping("/questions/{id}")
    public Question updateQuestion(@PathVariable Long id, @RequestBody Question updated) {
        return service.updateQuestion(id, updated);
    }
}