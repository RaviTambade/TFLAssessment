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

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.DescriptiveQuestion;
import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.dto.response.QuestionWithStatus;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
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
    public QuestionDisplay getQuestionById(@PathVariable("question_id") long question_id) {
        return service.getQuestionById(question_id);
    }

    // @GetMapping({"user/{user_role_Id}"})
    // // http://localhost:8080/api/questions
    // public List<QuestionDisplay> getAllQuestions( @PathVariable Long user_role_Id) {
    //     return service.getAllQuestions(user_role_Id);
    // }

    @GetMapping("/difficulty/{level}")
    // http://localhost:8080/api/questions/difficulty/ADVANCE
    public List<Question> getByDifficulty(@PathVariable DifficultyLevel level) {
        return service.getQuestionsByDifficulty(level);
    }

    // @PostMapping
    // // http://localhost:8080/api/questions
    // public Long create(@RequestBody QuestionOptionsRequest dto) {
    //     return service.createQuestionWithOptions(dto);
    // }

    @GetMapping("/drafts")
    // http://localhost:8080/api/questions/drafts`
    public List<QuestionWithStatus> getDraft() {
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

    @GetMapping("/{question_id}/details")
    //http://localhost:8080/api/questions/1/details
    public QuestionOptionsRequest getQuestionDetailsById(@PathVariable Long question_id) {
        return service.getQuestionDetails(question_id);
    }

    @PutMapping("/{question_id}")
    // http://localhost:8080/api/questions/1
    public String updateQuestionDetailsById(@PathVariable Long question_id, @RequestBody QuestionOptionsRequest dto) {
        service.updateQuestionDetailsById(question_id, dto);
        return "Question Updated Successfully";
    }

    @GetMapping("/status/{status}")
    // http://localhost:8080/api/questions/status/APPROVED
    public List<QuestionWithStatus> getQuestionsByStatus(@PathVariable QuestionStatus status) {
        return service.getQuestions(status);
    }

    @GetMapping("/concepts/{concept}/{userId}/{roleId}")
    // http://localhost:8080/api/questions/concepts/RESTAPI
    public List<Question> getQuestionsByConcept(@PathVariable String concept,@PathVariable Long userId, @PathVariable Long roleId) {
        return service.getQuestionsByConcept(concept, userId, roleId);
    }

    @GetMapping("/concepts/{concept}/count")
    // http://localhost:8080/api/questions/concepts/loops/count
    public int getQuestionCountByConcept(@PathVariable String concept) {
        return service.getQuestionCountByConcept(concept);
    }

    @GetMapping("/type/{questionType}")
    // http://localhost:8080/api/questions/type/MCQ
    public List<DescriptiveQuestion> getDescriptiveQuestion(@PathVariable QuestionType questionType) {
        return service.getDescriptiveQuestion(questionType);
    }

    @PostMapping("/complete")
    // http://localhost:8080/api/questions/complete
    public String insertCompleteQuestion(@RequestBody CompleteQuestion question) {
        service.insertCompleteQuestion(question);
        return "Complete Question Inserted Successfully";
    }

    @GetMapping("/concepts/{userId}/{roleId}")
    // http://localhost:8080/api/questions/concepts
    public List<String> getConcepts(@PathVariable Long userId, @PathVariable Long roleId) {
        return service.getConcepts(userId, roleId);
    }
}
