package com.transflower.tflcomentor.evaluationcontentmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponse;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionsServices;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionsServices service;

    @GetMapping("/{question_id}")
    public Question getQuestionById(@PathVariable("question_id") long question_id) {
        return service.getQuestionById(question_id);
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return service.getAllQuestions();
    }

    @GetMapping("/difficulty/{level}")
    public List<Question> getByDifficulty(@PathVariable String level) {
        return service.getQuestionsByDifficulty(level);
    }

    @PostMapping()
    public String create(@RequestBody QuestionRequestDto dto) {
        service.create(dto);
        return "Question with Options Saved!";
    }

    // @GetMapping
    // public List<Question> getAll() {
    //     return service.getAllQuestions();
    // }
    @GetMapping("/drafts")
    public List<QuestionResponse> getDraft() {
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

    @PostMapping("/approve-selected")
    public String approveSelected(@RequestBody List<Long> questionId) {
        service.approveQuestions(questionId);
        return "Selected questions approved";
    }

    @PostMapping("/reject-selected")
    public String rejectSelected(@RequestBody List<Long> questionId) {
        service.rejectQuestions(questionId);
        return "Selected questions rejected";
    }

    @GetMapping("/recent")
    public List<QuestionResponse> getQuestionsFromLastTwoDays() {
        return service.getQuestionsFromLastTwoDays();
    }

    // @GetMapping("/recent/list")
    // public List<QuestionResponse> getRecentList() {
    //     return service.getRecentQuestionList();
    // }
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
    public List<QuestionResponse> getQuestionsByType(@PathVariable String questionType) {
        return service.getQuestionsByType(questionType);
    }

    @GetMapping("/status/{questionStatus}")
    public List<QuestionResponse> getQuestionsByStatus(@PathVariable String questionStatus) {
        return service.getQuestionsByStatus(questionStatus);
    }

    @GetMapping("/concepts/{conceptId}/questions")
    public ResponseEntity<?> getQuestionsByConceptId(@PathVariable Long conceptId) {
        List<QuestionDto> questions = service.getQuestionsByConceptId(conceptId);
        return ResponseEntity.ok(questions);
    }

}
