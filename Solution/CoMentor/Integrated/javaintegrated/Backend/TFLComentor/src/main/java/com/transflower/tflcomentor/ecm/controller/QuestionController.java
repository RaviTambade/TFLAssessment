package com.transflower.tflcomentor.ecm.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
    public Question getQuestionById(@PathVariable("question_id") long question_id) {
        return service.getQuestionById(question_id);
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return service.getAllQuestions();
    }

    @GetMapping("/difficulty/{level}")
    public List<Question> getByDifficulty(@PathVariable DifficultyLevel level) {
        return service.getQuestionsByDifficulty(level);
    }

    @PostMapping()
    public String create(@RequestBody QuestionOptionsRequestDto dto) {
        service.createQuestionWithOptions(dto);
        return "Question with Options Saved!";
    }

    // @GetMapping
    // public List<Question> getAll() {
    //     return service.getAllQuestions();
    // }
    @GetMapping("/drafts")
    public List<Question> getDraft() {
        return service.getQuestions(QuestionStatus.DRAFT);
    }

    @PutMapping("/{question_id}/approve")
    public String approveQuestionById(@PathVariable Long question_id) {
        service.updateQuestionStatus(question_id, QuestionStatus.APPROVED);
        return "Question Approved Successfully";
    }

    @PutMapping("/{question_id}/reject")
    public String rejectQuestionById(@PathVariable Long question_id) {
        service.updateQuestionStatus(question_id, QuestionStatus.REJECTED);
        return "Question Rejected Successfully";
    }

    @PostMapping("/approve-selected")
    public String approveSelectedQuestions(@RequestBody List<Long> questionId) {
        service.updateQuestionStatus(questionId, QuestionStatus.APPROVED);
        return "Selected questions approved";
    }

    @PostMapping("/reject-selected")
    public String rejectSelectedQuestions(@RequestBody List<Long> questionId) {
        service.updateQuestionStatus(questionId, QuestionStatus.REJECTED);
        return "Selected questions rejected";
    }

    @GetMapping("/recent")
    public List<Question> getByDate(@RequestParam LocalDate fromDate, @RequestParam LocalDate toDate) {
        return service.getQuestions(fromDate, toDate);
    }
    
    // @GetMapping("/recent/list")
    // public List<QuestionResponse> getRecentList() {
    //     return service.getRecentQuestionList();
    // }
    @GetMapping("/details/{question_id}")
    public QuestionOptionsRequestDto getQuestionDetailsById(@PathVariable Long question_id) {
        return service.getQuestionDetails(question_id);
    }

    @PutMapping("/{question_id}")
    public String updateQuestion(@PathVariable Long question_id, @RequestBody QuestionOptionsRequestDto dto) {
        service.updateQuestionById(question_id, dto);
        return "Question Updated Successfully";
    }

    @GetMapping("/type/{questionType}")
    public List<Question> getQuestionsByType(@PathVariable QuestionType questionType) {
        return service.getQuestions(questionType);
    }

    @GetMapping("/status/{questionStatus}")
    public List<Question> getQuestionsByStatus(@PathVariable QuestionStatus questionStatus) {
        return service.getQuestions(questionStatus);
    }

    @GetMapping("/concepts/{conceptId}/questions")
    public List<Question> getQuestionsByConcept(@RequestParam Long conceptId) {
        return service.getQuestionsByConceptId(conceptId);
    }

}
