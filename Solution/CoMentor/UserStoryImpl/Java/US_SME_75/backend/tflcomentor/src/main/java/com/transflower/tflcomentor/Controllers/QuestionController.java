package com.transflower.tflcomentor.Controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Services.QuestionService;
import com.transflower.tflcomentor.Dtos.ViewQuestionByStatus;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public ResponseEntity<List<ViewQuestionByStatus>> getByStatus(@RequestParam("status") String status) {

        if (status == null || status.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        String normalizedStatus = status.trim().toLowerCase();
        if ("active".equals(normalizedStatus)) {
            normalizedStatus = "true";
        } else if ("inactive".equals(normalizedStatus)) {
            normalizedStatus = "false";
        }

        List<ViewQuestionByStatus> results = questionService.getQuestionsByStatus(normalizedStatus);

        return ResponseEntity.ok(results);
    }
}