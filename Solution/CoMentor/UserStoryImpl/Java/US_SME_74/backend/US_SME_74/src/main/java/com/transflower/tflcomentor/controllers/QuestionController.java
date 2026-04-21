package com.transflower.tflcomentor.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.services.IQuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class QuestionController {

    private final IQuestionService service;

    public QuestionController(IQuestionService service) {
        this.service = service;
    }

    // ✅ GET ALL
    @GetMapping("/questions")
    public List<QuestionDto> getAllQuestions() {
        return service.getAllQuestions()
                .stream()
                .map(QuestionDto::new)
                .toList();
    }

    // ✅ GET BY ID
    @GetMapping("/questions/{id}")
    public QuestionDto getQuestionById(@PathVariable Long id) {
        return new QuestionDto(service.getQuestionById(id));
    }

    // ✅ CREATE (NEW)
    @PostMapping("/questions")
    public Question createQuestion(@RequestBody Question question) {
        return service.createQuestion(question);
    }

    // ✅ UPDATE
    @PutMapping("/questions/{id}")
    public Question updateQuestionById(@PathVariable Long id, @RequestBody Question updated) {
        return service.updateQuestionById(id, updated);
    }
}