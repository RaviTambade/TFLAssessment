package com.transflower.tflcomentor.ecm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.service.QuestionFilterService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/filter")
public class QuestionFilterController {

    QuestionFilterService questionFilterService;

    public QuestionFilterController(QuestionFilterService questionFilterService) {
        this.questionFilterService = questionFilterService;
    }

    @GetMapping("/questions/{userId}/{roleId}")
    public List<Question> getQuestions(@RequestParam(required = false) QuestionType question_type,
            @RequestParam(required = false) DifficultyLevel difficulty_level,
            @RequestParam(required = false) QuestionStatus status,
            @RequestParam(required = false) String language,
            @RequestParam(required = false) String layer,
            @RequestParam(required = false) String framework,
            @RequestParam(required = false) String concept,
            @PathVariable Long userId,
            @PathVariable Long roleId) {
        return questionFilterService.getQuestions(question_type, difficulty_level, status, language,
                layer, framework, concept, userId, roleId);
    }

}
