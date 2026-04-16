package com.transflower.tflcomentor.controllers;

import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.dtos.QuestionListDto;
import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.services.IQuestionService;
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
    private IQuestionService service;

    @PostMapping("/create")
    public String createQuestion(@RequestBody QuestionDto dto) {
        service.createQuestion(dto);
        return "Question + Options Saved!";
    }

    @GetMapping("/all")
    public List<Question> getAll() {
        return service.getAllQuestions();
    }

    @GetMapping("/draft")
    public List<Question> getDraft() {
        return service.getDraftQuestions();
    }

    @PutMapping("/approve/{id}")
    public String approve(@PathVariable Long id) {
        service.approveQuestion(id);
        return "Approved";
    }

    @PutMapping("/reject/{id}")
    public String reject(@PathVariable Long id) {
        service.rejectQuestion(id);
        return "Rejected";
    }

    @PutMapping("/approve-all")
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


    @GetMapping("/draft-list")
    public List<QuestionListDto> getDraftList() {
        return service.getDraftQuestionList();
    }

    @GetMapping("/recent-list")
    public List<QuestionListDto> getRecentList() {
        return service.getRecentQuestionList();
    }

    @GetMapping("/{id}")
    public QuestionDto getDetails(@PathVariable Long id) {
        return service.getQuestionDetails(id);
    }

    @PutMapping("/{id}")
    public String updateQuestion(@PathVariable Long id, @RequestBody QuestionDto dto) {
        service.updateQuestion(id, dto);
        return "Question Updated Successfully";
}
}
