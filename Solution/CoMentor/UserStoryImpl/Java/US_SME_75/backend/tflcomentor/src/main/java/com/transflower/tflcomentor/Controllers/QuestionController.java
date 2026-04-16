package com.transflower.tflcomentor.Controllers;

import org.springframework.data.domain.Page;
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
public ResponseEntity<Page<QuestionDto>> getByStatus(
    @RequestParam("status") String status,
    @RequestParam(defaultValue="0") int page,
    @RequestParam(defaultValue="10")int size ) {

    if (status == null || status.trim().isEmpty()) {
        return ResponseEntity.badRequest().build();
    }

    String normalizedStatus = status.trim().toUpperCase();

    // Validate ENUM values
    if (!normalizedStatus.equals("ACTIVE") &&
        !normalizedStatus.equals("INACTIVE") &&
        !normalizedStatus.equals("DRAFT")) {

        return ResponseEntity.badRequest().body(null); 
    }

    Page<QuestionDto> results = questionService.getQuestionsByStatus(normalizedStatus,page,size);

   return ResponseEntity.ok(results);
}
}