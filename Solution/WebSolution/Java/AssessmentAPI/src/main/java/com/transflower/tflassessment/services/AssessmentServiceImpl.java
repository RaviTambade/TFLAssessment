package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.*;
import com.transflower.tflassessment.repositories.AssessmentRepository;

@Service
public class AssessmentServiceImpl implements AssessmentService {

    private final AssessmentRepository _repo;

    @Autowired
    public AssessmentServiceImpl(AssessmentRepository repo) {
        _repo = repo;
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Assessment> getDetails(int assessmentId) {
        return CompletableFuture.completedFuture(_repo.getDetails(assessmentId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Assessment>> getAll(LocalDateTime fromDate, LocalDateTime toDate) {
        return CompletableFuture.completedFuture(_repo.getAll(fromDate, toDate));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Assessment>> getAllTests() {
        return CompletableFuture.completedFuture(_repo.getAllTests());
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(int smeId) {
        return CompletableFuture.completedFuture(_repo.getAllBySubjectMatterExpert(smeId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Employee>> getAllEmployees() {
        return CompletableFuture.completedFuture(_repo.getAllEmployees());
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Employee> getEmployeeById(int userId) {
        return CompletableFuture.completedFuture(_repo.getEmployeeById(userId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Subject>> getAllSubjects() {
        return CompletableFuture.completedFuture(_repo.getAllSubjects());
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<EvaluationCriteria>> getEvaluationCriterias() {
        return CompletableFuture.completedFuture(_repo.getEvaluationCriterias());
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<EvaluationCriteria>> getEvaluationCriteriasBySubject(int subjectId) {
        return CompletableFuture.completedFuture(_repo.getEvaluationCriteriasBySubject(subjectId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> createTest(CreateTestRequest request) {
        return CompletableFuture.completedFuture(_repo.createTest(request));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> addQuestion(int assessmentId, int questionId) {
        return CompletableFuture.completedFuture(_repo.addQuestion(assessmentId, questionId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> addQuestions(int assessmentId, List<QuestionBank> questions) {
        return CompletableFuture.completedFuture(_repo.addQuestions(assessmentId, questions));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> changeDuration(int assessmentId, String duration) {
        return CompletableFuture.completedFuture(_repo.changeDuration(assessmentId, duration));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> reschedule(int assessmentId, Date date) {
        return CompletableFuture.completedFuture(_repo.reschedule(assessmentId, date));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> removeQuestion(int assessmentId, int questionId) {
        return CompletableFuture.completedFuture(_repo.removeQuestion(assessmentId, questionId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> removeQuestions(int[] testQuestions) {
        return CompletableFuture.completedFuture(_repo.removeQuestions(testQuestions));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Employee>> getSmeBySubject(int subjectId) {
        return CompletableFuture.completedFuture(_repo.getSmeBySubject(subjectId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Test>> getAllTests(Date fromDate, Date toDate) {
        return CompletableFuture.completedFuture(_repo.getAllTests(fromDate, toDate));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<TestWithQuestions> getTestDetails(int testId) {
        return CompletableFuture.completedFuture(_repo.getTestDetails(testId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Question>> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
        return CompletableFuture.completedFuture(_repo.getQuestionsByEvaluationCriteriaId(evaluationCriteriaId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> updateQuestion(Question question) {
        return CompletableFuture.completedFuture(_repo.updateQuestion(question));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> updateTestStatus(int testId, TestStatusUpdate status) {
        return CompletableFuture.completedFuture(_repo.updateTestStatus(testId, status));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Boolean> addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails) {
        return CompletableFuture.completedFuture(_repo.addEmployeesToTest(request, candidateTestDetails));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<TestEmployeeDetails>> getAllTestByEmpId(int empId) {
        return CompletableFuture.completedFuture(_repo.getAllTestByEmpId(empId));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Integer> createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions) {
        return CompletableFuture.completedFuture(_repo.createTestWithQuestions(createTestWithQuestions));
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<SubjectQuestion>> getAllQuestionsBySubject(int subjectId) {
        return CompletableFuture.completedFuture(_repo.getAllQuestionsBySubject(subjectId));
    }
}
