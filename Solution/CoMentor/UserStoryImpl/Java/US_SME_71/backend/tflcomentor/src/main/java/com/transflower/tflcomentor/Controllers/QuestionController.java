package com.transflower.tflcomentor.Controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Dtos.QuestionDto;
import com.transflower.tflcomentor.Services.IQuestionService;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final IQuestionService questionService;

    public QuestionController(IQuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public ResponseEntity<List<QuestionDto>> getByStatus(@RequestParam("status") String status) {

        if (status == null || status.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        String normalizedStatus = status.trim().toLowerCase();
        if ("active".equals(normalizedStatus)) {
            normalizedStatus = "true";
        } else if ("inactive".equals(normalizedStatus)) {
            normalizedStatus = "false";
        }

        List<QuestionDto> results = questionService.getQuestionsByStatus(normalizedStatus);

        return ResponseEntity.ok(results);
    }
}