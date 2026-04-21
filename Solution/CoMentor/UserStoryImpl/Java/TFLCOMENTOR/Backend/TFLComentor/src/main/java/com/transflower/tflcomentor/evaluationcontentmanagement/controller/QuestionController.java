package com.transflower.tflcomentor.evaluationcontentmanagement.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Questions;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionsServices;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionsServices service;

    @GetMapping("/{question_id}")
    public Questions getQuestionById(@PathVariable("question_id") long question_id) {
        return service.getQuestionById(question_id);
    }

    @GetMapping
    public List<Questions> getAllQuestions() {
        return service.getAllQuestions();
    }

    @GetMapping("/difficulty/{level}")
    public List<Questions> getByDifficulty(@PathVariable String level) {
        return service.getQuestionsByDifficulty(level);
    }

     @PostMapping()
        public String createQuestion(@RequestBody QuestionRequestDto dto) {
        service.createQuestion(dto);
        return "Question with Options Saved!";
    }

    // @GetMapping
    // public List<Question> getAll() {
    //     return service.getAllQuestions();
    // }

    @GetMapping("/drafts")
    public List<Questions> getDraft() {
        return service.getDraftQuestions();
    }

    @PutMapping("/{id}/approve")
    public String approve(@PathVariable Long id) {
        service.approveQuestionById(id);
        return "Approved";
    }

    @PutMapping("/{id}/reject")
    public String rejectQuestionById(@PathVariable Long id) {
        service.rejectQuestionById(id);
        return "Rejected";
    }

    @PutMapping("/{id}/approve-all")
    public String approveAll() {
        service.approveAllQuestions();
        return "All Approved";
    }

    @PutMapping("/reject-all")
    public String rejectAll() {
        service.rejectAllQuestions();
        return "All Rejected";
    }

    @GetMapping("/recent")
    public List<Questions> getRecentQuestions() {
        return service.getRecentQuestions();
    }


    @GetMapping("/drafts/list")
    public List<QuestionListResponseDto> getDraftList() {
        return service.getDraftQuestionList();
    }

    @GetMapping("/recent/list")
    public List<QuestionListResponseDto> getRecentList() {
        return service.getRecentQuestionList();
    }

    @GetMapping("/details/{id}")
    public QuestionResponseDto getDetailsById(@PathVariable Long id) {
        return service.getQuestionDetailsById(id);
    }

    @PutMapping("/{id}")
    public String updateQuestion(@PathVariable Long id, @RequestBody QuestionRequestDto dto) {
        service.updateQuestionById(id, dto);
        return "Question Updated Successfully";
}

    @GetMapping("/type/{questionType}")
    public List<QuestionListResponseDto> getQuestionsByType(@PathVariable String questionType) {
        return service.getQuestionsByType(questionType);
    }

    @GetMapping("/status/{questionStatus}")
    public List<QuestionListResponseDto> findByStatus(@PathVariable String questionStatus) {
        return service.findByStatus(questionStatus);
    }
}