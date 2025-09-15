package com.transflower.tflassessment.controllers;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.Assessment;
import com.transflower.tflassessment.entities.CreateTestRequest;
import com.transflower.tflassessment.entities.CreateTestWithQuestions;
import com.transflower.tflassessment.entities.Employee;
import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionBank;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.SubjectQuestion;
import com.transflower.tflassessment.entities.Test;
import com.transflower.tflassessment.entities.TestEmployeeDetails;
import com.transflower.tflassessment.entities.TestEmployeeRequest;
import com.transflower.tflassessment.entities.TestStatusUpdate;
import com.transflower.tflassessment.entities.TestWithQuestions;
import com.transflower.tflassessment.services.AssessmentService;

@RestController
public class AssessmentController {

    @Autowired
    private AssessmentService svc;

    @GetMapping("/api/assessment/{id}")
    public CompletableFuture<Assessment> getDetails(@PathVariable("id") int id) {
        return svc.getDetails(id);
    }

    @GetMapping("/api/assessment/creationdate/fromDate/{fromDate}/toDate/{toDate}")
    public CompletableFuture<List<Assessment>> getAll( @PathVariable("fromDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDateTime fromDate,
            @PathVariable("toDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDateTime toDate) {
        return svc.getAll(fromDate, toDate);
    }

    @GetMapping("/api/assessment/assessments")
    public CompletableFuture<List<Assessment>> getAllTests() {
        return svc.getAllTests();
    }

    @GetMapping("/api/assessment/employees")
    public CompletableFuture<List<Employee>> getAllEmployees() {
        return svc.getAllEmployees();
    }

    @GetMapping("/api/assessment/employee/{userId}")
    public CompletableFuture<Employee> getEmployeeById(@PathVariable("userId") int userId) {
        return svc.getEmployeeById(userId);
    }

    @GetMapping("/api/assessment/subjects")
    public CompletableFuture<List<Subject>> getAllSubjects() {
        return svc.getAllSubjects();
    }

    @GetMapping("/api/assessment/criterias")
    public CompletableFuture<List<EvaluationCriteria>> getEvaluationCriterias() {
        return svc.getEvaluationCriterias();
    }

    @GetMapping("/api/assessment/criterias/subjects/{subjectId}")
    public CompletableFuture<List<EvaluationCriteria>> getEvaluationCriteriasBySubject(@PathVariable("subjectId") int subjectId) {
        return svc.getEvaluationCriteriasBySubject(subjectId);
    }

    @GetMapping("/api/assessment/subjectexperts/{smeId}")
    public CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(@PathVariable("smeId") int smeId) {
        return svc.getAllBySubjectMatterExpert(smeId);
    }

    @PostMapping("/api/assessment/createtest")
    public CompletableFuture<Boolean> createTest(@RequestBody CreateTestRequest request) {
        return svc.createTest(request);
    }

    @PostMapping("/api/assessment/addquestion/assessments/{assessmentId}/questions/{questionId}")
    public CompletableFuture<Boolean> addQuestion(@PathVariable("assessmentId") int assessmentId, @PathVariable("questionId") int questionId) {
        return svc.addQuestion(assessmentId, questionId);
    }

    @PostMapping("/api/assessment/addmultiplequestions/assessments/{assessmentId}")
    public CompletableFuture<Boolean> addQuestions(@PathVariable("assessmentId") int assessmentId, @RequestBody List<QuestionBank> questions) {
        return svc.addQuestions(assessmentId, questions);
    }

    @DeleteMapping("/api/assessment/{assessmentId}/questions/{questionId}")
    public CompletableFuture<Boolean> removeQuestion(@PathVariable("assessmentId") int assessmentId,  @PathVariable("questionId") int questionId) {
        return svc.removeQuestion(assessmentId, questionId);
    }

    @PutMapping("/api/assessment/{assessmentId}/duration/{duration}")
    public CompletableFuture<Boolean> changeDuration(@PathVariable("assessmentId") int assessmentId, @PathVariable("duration") String duration) {
        return svc.changeDuration(assessmentId, duration);
    }

    @PutMapping("/api/assessment/{assessmentId}/reschedule/{date}")
    public CompletableFuture<Boolean> reschedule(@PathVariable("assessmentId") int assessmentId,@PathVariable("date") Date date) {
        return svc.reschedule(assessmentId, date);
    }

    @DeleteMapping("/api/assessment/deletequestions")
    public CompletableFuture<Boolean> removeQuestions(@RequestBody int[] testQuestions) {
        return svc.removeQuestions(testQuestions);
    }

    @PostMapping("/api/assessment/addtest")
    public CompletableFuture<Integer> createTestWithQuestions(@RequestBody CreateTestWithQuestions createTestWithQuestions) {
        return svc.createTestWithQuestions(createTestWithQuestions);
    }

    @GetMapping("/api/assessment/allquestionsbysubject/{subjectId}")
    public CompletableFuture<List<SubjectQuestion>> getAllQuestionsBySubject(@PathVariable("subjectId") int subjectId) {
        return svc.getAllQuestionsBySubject(subjectId);
    }

    @GetMapping("/api/assessment/getsme/{subjectId}")
    public CompletableFuture<List<Employee>> getSmeBySubject(@PathVariable("subjectId") int subjectId) {
        return svc.getSmeBySubject(subjectId);
    }

    @GetMapping("/api/assessment/getalltest/from/{fromDate}/to/{toDate}")
    public CompletableFuture<List<Test>> getAllTests(
            @PathVariable("fromDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fromDate,
               @PathVariable("toDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date toDate) {
        return svc.getAllTests(fromDate, toDate);
    }

    @GetMapping("/api/assessment/testdetails/{testId}")
    public CompletableFuture<TestWithQuestions> getTestDetails(@PathVariable("testId") int testId) {
        return svc.getTestDetails(testId);
    }

    @GetMapping("/api/assessment/questionsbycriteria/{evaluationCriteriaId}")
    public CompletableFuture<List<Question>> getQuestionsByEvaluationCriteriaId(
            @PathVariable("evaluationCriteriaId") int evaluationCriteriaId) {
        return svc.getQuestionsByEvaluationCriteriaId(evaluationCriteriaId);
    }

    @PutMapping("/api/assessment/updatequestion/{questionId}")
    public CompletableFuture<Boolean> updateQuestion(@PathVariable int questionId, @RequestBody Question question) {
        question.setId(questionId);
        return svc.updateQuestion(question);
    }

    @PutMapping("/api/assessment/updateteststatus/{testId}")
    public CompletableFuture<Boolean> updateTestStatus(@PathVariable("testId") int testId,  @RequestBody TestStatusUpdate status) {
        return svc.updateTestStatus(testId, status);
    }

    @PostMapping("/api/assessment/addemployees")
    public CompletableFuture<Boolean> addEmployeesToTest(@RequestBody TestEmployeeRequest wrapper) {
        return svc.addEmployeesToTest(wrapper.getRequest(), wrapper.getCandidateTestDetails());
    }

    @GetMapping("/api/assessment/alltestbyempid/{empId}")
    public CompletableFuture<List<TestEmployeeDetails>> getAllTestByEmpId(@PathVariable("empId") int empId) {
        return svc.getAllTestByEmpId(empId);
    }
}
