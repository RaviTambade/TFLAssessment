package com.transflower.tflcomentor.Controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Services.QuestionService;
import com.transflower.tflcomentor.Dtos.ViewQuestionByType;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public ResponseEntity<List<ViewQuestionByType>> getByType(@RequestParam("type") String type) {

        if (type == null || type.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        List<ViewQuestionByType> results = questionService.getQuestionsByType(type.trim());

        return ResponseEntity.ok(results);
    }
}