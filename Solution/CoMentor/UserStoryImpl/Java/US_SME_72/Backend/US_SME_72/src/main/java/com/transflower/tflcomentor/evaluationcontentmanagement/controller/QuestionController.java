package com.transflower.tflcomentor.evaluationcontentmanagement.controller;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionService;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(
    origins = "http://localhost:8080",
    allowedHeaders = "*",
    methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS}
)
public class QuestionController {

    @Autowired
    private QuestionService service;

    @PostMapping
        public String createQuestion(@RequestBody QuestionRequestDto dto) {
        service.createQuestion(dto);
        return "Question with Options Saved!";
    }

    @GetMapping
    public List<Question> getAll() {
        return service.getAllQuestions();
    }

    @GetMapping("/drafts")
    public List<Question> getDraft() {
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
    public List<Question> getRecentQuestions() {
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

    @GetMapping("/{id}")
    public QuestionResponseDto getDetailsById(@PathVariable Long id) {
        return service.getQuestionDetailsById(id);
    }

    @PutMapping("/{id}")
    public String updateQuestion(@PathVariable Long id, @RequestBody QuestionRequestDto dto) {
        service.updateQuestionById(id, dto);
        return "Question Updated Successfully";
}
}
