package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.*;

public interface AssessmentService {

    CompletableFuture<Assessment> getDetails(int assessmentId);

    CompletableFuture<List<Assessment>> getAll(LocalDateTime fromDate, LocalDateTime toDate);

    CompletableFuture<List<Assessment>> getAllTests();

    CompletableFuture<List<Employee>> getAllEmployees();

    CompletableFuture<Employee> getEmployeeById(int userId);

    CompletableFuture<List<Subject>> getAllSubjects();

    CompletableFuture<List<Concepts>> getConcepts();

    CompletableFuture<List<Concepts>> getConceptsBySubject(int subjectId);

    CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(int smeId);    

    CompletableFuture<Boolean> createTest(CreateTestRequest request);

    CompletableFuture<Boolean> addQuestion(int assessmentId, int questionId);

    // CompletableFuture<Boolean> addQuestions(int assessmentId, List<QuestionBank> questions);

    CompletableFuture<Boolean> removeQuestion(int assessmentId, int questionId);

    CompletableFuture<Boolean> changeDuration(int assessmentId, String duration);

    CompletableFuture<Boolean> reschedule(int assessmentId, LocalDateTime date);

    CompletableFuture<Boolean> removeQuestions(int[] testQuestions);

    CompletableFuture<Integer> createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions);

    CompletableFuture<List<SubjectQuestion>> getAllQuestionsBySubject(int subjectId);

    CompletableFuture<List<Test>> getAllTests(Date fromDate, Date toDate);
     
    CompletableFuture<TestWithQuestions> getTestDetails(int testId);

    // CompletableFuture<List<Employee>> getSmeBySubject(int subjectId);

   // CompletableFuture<List<Question>> getQuestionsByConceptsId(int ConceptsId);

    // CompletableFuture<Boolean> updateQuestion(Question question);

    // CompletableFuture<Boolean> updateTestStatus(int testId, TestStatusUpdate status);

    // CompletableFuture<Boolean> addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails);

    // CompletableFuture<List<TestEmployeeDetails>> getAllTestByEmpId(int empId);

   
}
