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
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionsServices;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService service;

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
    public String create(@RequestBody QuestionOptionsRequestDto dto) {
        service.create(dto);
        return "Question with Options Saved!";
    }

    // @GetMapping
    // public List<Question> getAll() {
    //     return service.getAllQuestions();
    // }
    @GetMapping("/drafts")
    public List<QuestionResponseDto> getDraft() {
        return service.getDraftQuestions();
    }

    @PutMapping("/{question_id}/approve")
    public String approve(@PathVariable Long question_id) {
        service.approveQuestionById(question_id);
        return "Approved";
    }

    @PutMapping("/{question_id}/reject")
    public String rejectQuestionById(@PathVariable Long question_id) {
        service.rejectQuestionById(question_id);
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
    public List<QuestionResponseDto> getQuestionsFromLastTwoDays() {
        return service.getQuestionsFromLastTwoDays();
    }

    // @GetMapping("/recent/list")
    // public List<QuestionResponse> getRecentList() {
    //     return service.getRecentQuestionList();
    // }
    @GetMapping("/details/{question_id}")
    public QuestionOptionsResponseDto getQuestionDetailsById(@PathVariable Long question_id) {
        return service.getQuestionDetailsById(question_id);
    }

    @PutMapping("/{question_id}")
    public String updateQuestion(@PathVariable Long question_id, @RequestBody QuestionOptionsRequestDto dto) {
        service.updateQuestionById(question_id, dto);
        return "Question Updated Successfully";
    }

    @GetMapping("/type/{questionType}")
    public List<QuestionResponseDto> getQuestionsByType(@PathVariable String questionType) {
        return service.getQuestionsByType(questionType);
    }

    @GetMapping("/status/{questionStatus}")
    public List<QuestionResponseDto> getQuestionsByStatus(@PathVariable String questionStatus) {
        return service.getQuestionsByStatus(questionStatus);
    }

    @GetMapping("/concepts/{conceptId}/questions")
    public ResponseEntity<?> getQuestionsByConceptId(@PathVariable Long conceptId) {
        List<QuestionDto> questions = service.getQuestionsByConceptId(conceptId);
        return ResponseEntity.ok(questions);
    }

}
