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

<<<<<<< HEAD
import com.transflower.tflcomentor.ecm.dto.request.QuestionDto;
import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionResponseDTO;
=======
import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
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
    // return service.getAllQuestions();
    // }
    @GetMapping("/drafts")
<<<<<<< HEAD
    public List<QuestionResponseDTO> getDraft() {
        return service.getQuestions("Draft");
=======
    // http://localhost:8080/api/questions/drafts
    public List<Question> getDraft() {
        return service.getQuestions(QuestionStatus.DRAFT);
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
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
<<<<<<< HEAD
    public List<QuestionResponseDTO> getByDate(@RequestParam String fromDate, @RequestParam String toDate) {
        return service.getQuestions(LocalDate.parse(fromDate), LocalDate.parse(toDate));
=======
    // http://localhost:8080/api/questions/recent?fromDate=2024-01-01&toDate=2024-12-31
    public List<Question> getByDate(@RequestParam LocalDate fromDate, @RequestParam LocalDate toDate) {
        return service.getQuestions(fromDate, toDate);
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
    }

    // @GetMapping("/recent/list")
    // public List<QuestionResponse> getRecentList() {
    // return service.getRecentQuestionList();
    // }
    @GetMapping("/{question_id}/details")
    //http://localhost:8080/api/questions/1/details
    public QuestionOptionsRequestDto getQuestionDetailsById(@PathVariable Long question_id) {
        return service.getQuestionDetails(question_id);
    }

    @PutMapping("/{question_id}")
    // http://localhost:8080/api/questions/1
    public String updateQuestion(@PathVariable Long question_id, @RequestBody QuestionOptionsRequestDto dto) {
        service.updateQuestionById(question_id, dto);
        return "Question Updated Successfully";
    }

<<<<<<< HEAD
    @GetMapping("/type/{questionType}")
    public List<QuestionResponseDTO> getQuestionsByType(@PathVariable String questionType) {
        return service.getQuestions(questionType);
    }

    @GetMapping("/status/{questionStatus}")
    public List<QuestionResponseDTO> getQuestionsByStatus(@PathVariable String questionStatus) {
=======
    @GetMapping("/status/{questionStatus}")
    // http://localhost:8080/api/questions/status/APPROVED
    public List<Question> getQuestionsByStatus(@PathVariable QuestionStatus questionStatus) {
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
        return service.getQuestions(questionStatus);
    }

    @GetMapping("/concepts/{conceptId}/questions")
    // http://localhost:8080/api/questions/concepts/1/questions
    public List<Question> getQuestionsByConcept(@PathVariable Long conceptId) {
        return service.getQuestionsByConceptId(conceptId);
    }

}
