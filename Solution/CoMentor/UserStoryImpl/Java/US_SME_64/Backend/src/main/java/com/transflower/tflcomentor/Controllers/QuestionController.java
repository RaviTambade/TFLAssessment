package com.transflower.tflcomentor.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.transflower.tflcomentor.Entities.Questions;
import com.transflower.tflcomentor.Services.QuestionsServices;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionsServices services;

    @GetMapping("/{question_id}")
    public Questions getQuestionById(@PathVariable("question_id") long question_id) {
        return services.getQuestionById(question_id);
    }

    @GetMapping
    public List<Questions> getAllQuestions() {
        return services.getAllQuestions();
    }

    @GetMapping("/difficulty/{level}")
    public List<Questions> getByDifficulty(@PathVariable String level) {
        return services.getQuestionsByDifficulty(level);
    }

}