package com.transflower.tflcomentor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.transflower.tflcomentor.dtos.ViewQuestionDto;
import com.transflower.tflcomentor.services.ViewQuestionService;

@RestController
@RequestMapping("/api")
public class ViewQuestionController {

    @Autowired
    private ViewQuestionService questionService;

    @GetMapping("/sme/questions/{questionId}")
    public ResponseEntity<?> getQuestion(@PathVariable Long questionId) {

        ViewQuestionDto dto = questionService.getQuestionById(questionId);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/sme/allquestions")
    public ResponseEntity<?> getAllQuestions() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }
}