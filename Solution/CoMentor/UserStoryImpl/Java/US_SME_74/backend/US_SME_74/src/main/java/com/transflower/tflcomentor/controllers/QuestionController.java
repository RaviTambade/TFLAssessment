package com.transflower.tflcomentor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.services.QuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class QuestionController {

    private final QuestionService service;

    public QuestionController(QuestionService service) {
        this.service = service;
    }

    @GetMapping("/questions")
    public List<QuestionDto> getAllQuestions() {
        List<Question> questions = service.getAllQuestions();
        return questions.stream().map(QuestionDto::new).toList();
    }

    @GetMapping("/questions/{id}")
    public Object fetchQuestionById(@PathVariable Long id) {
        return service.getQuestionById(id);
    }

    @PutMapping("/questions/{id}")
    public Question updateQuestion(@PathVariable Long id, @RequestBody Question updated) {
        return service.updateQuestion(id, updated);
    }
}
