package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.Assessment;
import com.transflower.tflassessment.entities.CandidateTestDetails;
import com.transflower.tflassessment.entities.CreateTestRequest;
import com.transflower.tflassessment.entities.CreateTestWithQuestions;
import com.transflower.tflassessment.entities.Employee;
import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionBank;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.SubjectQuestion;
import com.transflower.tflassessment.entities.Test;
import com.transflower.tflassessment.entities.TestAssignmentRequest;
import com.transflower.tflassessment.entities.TestEmployeeDetails;
import com.transflower.tflassessment.entities.TestStatusUpdate;
import com.transflower.tflassessment.entities.TestWithQuestions;

public interface AssessmentService {

    CompletableFuture<Assessment> getDetails(int assessmentId);

    CompletableFuture<List<Assessment>> getAll(LocalDateTime fromDate, LocalDateTime toDate);

    CompletableFuture<List<Assessment>> getAllTests();

    CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(int smeId);

    CompletableFuture<List<Employee>> getAllEmployees();

    CompletableFuture<Employee> getEmployeeById(int userId);

    CompletableFuture<List<Subject>> getAllSubjects();

    CompletableFuture<List<EvaluationCriteria>> getEvaluationCriterias();

    CompletableFuture<List<EvaluationCriteria>> getEvaluationCriteriasBySubject(int subjectId);

    CompletableFuture<Boolean> createTest(CreateTestRequest request);

    CompletableFuture<Boolean> addQuestion(int assessmentId, int questionId);

    CompletableFuture<Boolean> addQuestions(int assessmentId, List<QuestionBank> questions);

    CompletableFuture<Boolean> changeDuration(int assessmentId, String duration);

    CompletableFuture<Boolean> reschedule(int assessmentId, Date date);

    CompletableFuture<Boolean> removeQuestion(int assessmentId, int questionId);

    CompletableFuture<Boolean> removeQuestions(int[] testQuestions);

    CompletableFuture<Integer> createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions);

    CompletableFuture<List<Employee>> getSmeBySubject(int subjectId);

    CompletableFuture<List<Test>> getAllTests(Date fromDate, Date toDate);

    CompletableFuture<TestWithQuestions> getTestDetails(int testId);

    CompletableFuture<List<Question>> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId);

    CompletableFuture<Boolean> updateQuestion(Question question);

    CompletableFuture<Boolean> updateTestStatus(int testId, TestStatusUpdate status);

    CompletableFuture<Boolean> addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails);

    CompletableFuture<List<TestEmployeeDetails>> getAllTestByEmpId(int empId);

    CompletableFuture<List<SubjectQuestion>> getAllQuestionsBySubject(int subjectId);
}
