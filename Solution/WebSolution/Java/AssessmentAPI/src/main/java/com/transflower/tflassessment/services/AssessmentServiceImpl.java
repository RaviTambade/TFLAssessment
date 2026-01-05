package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.transflower.tflassessment.entities.*;
import com.transflower.tflassessment.entities.Assessment;
import com.transflower.tflassessment.entities.Employee;
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
        return _repo.getDetails(assessmentId);
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Assessment>> getAll(LocalDateTime fromDate, LocalDateTime toDate) {
        return _repo.getAll(fromDate, toDate);
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Assessment>> getAllTests() {
        return _repo.getAllTests();
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Employee>> getAllEmployees() {
        return _repo.getAllEmployees();
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<Employee> getEmployeeById(int userId) {
        return _repo.getEmployeeById(userId);
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Subject>> getAllSubjects() {
        return _repo.getAllSubjects();
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Concepts>> getConcepts() {
        return _repo.getConcepts();
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Concepts>> getConceptsBySubject(int subjectId) {
        return _repo.getConceptsBySubject(subjectId);
    }

    @Async("asyncExecutor")
    @Override
    public CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(int smeId) {
        return _repo.getAllBySubjectMatterExpert(smeId);
    }
       

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> createTest(CreateTestRequest request) {
    //     return _repo.createTest(request);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> addQuestion(int assessmentId, int questionId) {
    //     return _repo.addQuestion(assessmentId, questionId);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> addQuestions(int assessmentId, List<QuestionBank> questions) {
    //     return _repo.addQuestions(assessmentId, questions);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> changeDuration(int assessmentId, String duration) {
    //     return _repo.changeDuration(assessmentId, duration);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> reschedule(int assessmentId, Date date) {
    //     return _repo.reschedule(assessmentId, date);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> removeQuestion(int assessmentId, int questionId) {
    //     return _repo.removeQuestion(assessmentId, questionId);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> removeQuestions(int[] testQuestions) {
    //     return _repo.removeQuestions(testQuestions);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<List<Employee>> getSmeBySubject(int subjectId) {
    //     return _repo.getSmeBySubject(subjectId);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<List<Test>> getAllTests(Date fromDate, Date toDate) {
    //     return _repo.getAllTests(fromDate, toDate);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<TestWithQuestions> getTestDetails(int testId) {
    //     return _repo.getTestDetails(testId);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<List<Question>> getQuestionsByConceptsId(int ConceptsId) {
    //     return _repo.getQuestionsByConceptsId(ConceptsId);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> updateQuestion(Question question) {
    //     return _repo.updateQuestion(question);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> updateTestStatus(int testId, TestStatusUpdate status) {
    //     return _repo.updateTestStatus(testId, status);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Boolean> addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails) {
    //     return _repo.addEmployeesToTest(request, candidateTestDetails);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<List<TestEmployeeDetails>> getAllTestByEmpId(int empId) {
    //     return _repo.getAllTestByEmpId(empId);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<Integer> createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions) {
    //     return _repo.createTestWithQuestions(createTestWithQuestions);
    // }

    // @Async("asyncExecutor")
    // @Override
    // public CompletableFuture<List<SubjectQuestion>> getAllQuestionsBySubject(int subjectId) {
    //     return _repo.getAllQuestionsBySubject(subjectId);
    // }
}
