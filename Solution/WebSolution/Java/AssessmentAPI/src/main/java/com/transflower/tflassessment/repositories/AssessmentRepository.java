package com.transflower.tflassessment.repositories;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.*;
public interface AssessmentRepository {

    public CompletableFuture<Assessment> getDetails(int assessmentId);

    CompletableFuture<List<Assessment>> getAll(LocalDateTime fromDate, LocalDateTime toDate);

    public CompletableFuture<List<Assessment>> getAllTests();

    public CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(int smeId);

    public CompletableFuture<List<Employee>> getAllEmployees();

    public CompletableFuture<Employee> getEmployeeById(int userId);

    public CompletableFuture<List<Subject>> getAllSubjects();

    public CompletableFuture<List<Concepts>> getConcepts();

    public CompletableFuture<List<Concepts>> getConceptsBySubject(int subjectId);

    public CompletableFuture<Boolean> createTest(CreateTestRequest request);
    public CompletableFuture<Boolean> addQuestion(int assessmentId, int questionId);

    public CompletableFuture<Boolean> addQuestions(int assessmentId, List<QuestionBank> questions);

    public CompletableFuture<Boolean> changeDuration(int assessmentId, String duration);

  public CompletableFuture<Boolean> reschedule(int assessmentId, Date date);
  public CompletableFuture<Boolean> removeQuestion(int assessmentId, int questionId);
  public CompletableFuture<Boolean> removeQuestions(int[] testQuestions);
  public CompletableFuture<Integer> createTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions);
  public CompletableFuture<List<SubjectQuestions>> getAllQuestionsBySubject(int subjectId);

    public CompletableFuture<List<Employee>> getSmeBySubject(int subjectId);

    public CompletableFuture<List<Test>> getAllTests(Date fromDate, Date toDate);

    public CompletableFuture<TestWithQuestions> getTestDetails(int testId);

    public CompletableFuture<List<Question>> getQuestionsByConceptId(int ConceptId);

    public CompletableFuture<Boolean> updateQuestion(Question question);

    public CompletableFuture<Boolean> updateTestStatus(int testId, TestStatusUpdate status);

    public CompletableFuture<Boolean> addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails);

    public CompletableFuture<List<TestEmployeeDetails>> getAllTestByEmpId(int empId);

    CompletableFuture<Integer> GetTestCountByStatus(String status);

    CompletableFuture<List<TestDetails>> GetAllTestByStatus(String status);

    CompletableFuture<List<Subject>> GetSubjectBySME(int smeid);

    CompletableFuture<List<TestDetails>> GetSmeTestList(int smeId);

    CompletableFuture<List<CandidateAssessmentHistory>> GetAssesmentHistory(int candidateid);

    CompletableFuture<List<ConceptWithCorrectAns>> GetConceptwiseCorrectAnswer(int candidateid);

    CompletableFuture<List<TestEmployeeDetails>> GetAssessmentEmployeeDetails(int assessmentId, int candidateId);

    CompletableFuture<TimeConfig> GetBufferTimeAsync();

    CompletableFuture<Boolean> UpdateBufferTimeAsync(int bufferTime);
}
