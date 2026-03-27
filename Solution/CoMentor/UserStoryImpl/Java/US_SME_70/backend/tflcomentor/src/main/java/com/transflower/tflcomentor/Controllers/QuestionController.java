package com.transflower.tflcomentor.Controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Dtos.QuestionDto;
import com.transflower.tflcomentor.Services.QuestionService;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public ResponseEntity<List<QuestionDto>> getByType(@RequestParam("type") String type) {

        if (type == null || type.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        List<QuestionDto> results = questionService.getQuestionsByType(type.trim());

        return ResponseEntity.ok(results);
    }
}