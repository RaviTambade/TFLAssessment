package com.transflower.tflcomentor.ecm.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.service.QuestionService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService service;

    @GetMapping("/{question_id}")
    // http://localhost:8080/api/questions/1
    public Question getQuestionById(@PathVariable("question_id") long question_id) {
        return service.getQuestionById(question_id);
    }

    @GetMapping
    // http://localhost:8080/api/questions
    public List<Question> getAllQuestions() {
        return service.getAllQuestions();
    }

    @GetMapping("/difficulty/{level}")
    // http://localhost:8080/api/questions/difficulty/ADVANCE
    public List<Question> getByDifficulty(@PathVariable DifficultyLevel level) {
        return service.getQuestionsByDifficulty(level);
    }

    @PostMapping()
    // http://localhost:8080/api/questions
    public String create(@RequestBody QuestionOptionsRequestDto dto) {
        service.createQuestionWithOptions(dto);
        return "Question with Options Saved!";
    }

    // @GetMapping
    // public List<Question> getAll() {
    //     return service.getAllQuestions();
    // }
    @GetMapping("/drafts")
    // http://localhost:8080/api/questions/drafts
    public List<Question> getDraft() {
        return service.getQuestions(QuestionStatus.DRAFT);
    }

    @PatchMapping("/{question_id}/status")
    // http://localhost:8080/api/questions/1/status?status=APPROVED
    public String updateQuestionStatus(@PathVariable Long question_id, @RequestParam QuestionStatus status) {
        service.updateQuestionStatus(question_id, status);
        return "Question status updated successfully";
    }

    @PatchMapping("/status/{status}")
    // http://localhost:8080/api/questions/status/APPROVED
    public String updateQuestionStatus(@PathVariable QuestionStatus status, @RequestBody List<Long> questionIds) {
        service.updateQuestionStatus(questionIds, status);
        return "Question status updated successfully";
    }

    @GetMapping("/recent")
    // http://localhost:8080/api/questions/recent?fromDate=2024-01-01&toDate=2024-12-31
    public List<Question> getByDate(@RequestParam LocalDate fromDate, @RequestParam LocalDate toDate) {
        return service.getQuestions(fromDate, toDate);
    }

    // @GetMapping("/recent/list")
    // public List<QuestionResponse> getRecentList() {
    //     return service.getRecentQuestionList();
    // }
<<<<<<< HEAD
    @GetMapping("/{question_id}")
    public QuestionOptionsResponseDto getQuestionDetailsById(@PathVariable Long question_id) {
=======
    @GetMapping("/{question_id}/details")
    //http://localhost:8080/api/questions/1/details
    public QuestionOptionsRequestDto getQuestionDetailsById(@PathVariable Long question_id) {
>>>>>>> f0de9bd4dc6c3738b4bb3180ce02e1ca0e4eef35
        return service.getQuestionDetails(question_id);
    }

    @PutMapping("/{question_id}")
    // http://localhost:8080/api/questions/1
    public String updateQuestion(@PathVariable Long question_id, @RequestBody QuestionOptionsRequestDto dto) {
        service.updateQuestionById(question_id, dto);
        return "Question Updated Successfully";
    }

    @GetMapping("/status/{questionStatus}")
    // http://localhost:8080/api/questions/status/APPROVED
    public List<Question> getQuestionsByStatus(@PathVariable QuestionStatus questionStatus) {
        return service.getQuestions(questionStatus);
    }

    @GetMapping("/concepts/{conceptId}/questions")
    // http://localhost:8080/api/questions/concepts/1/questions
    public List<Question> getQuestionsByConcept(@PathVariable Long conceptId) {
        return service.getQuestionsByConceptId(conceptId);
    }

}
