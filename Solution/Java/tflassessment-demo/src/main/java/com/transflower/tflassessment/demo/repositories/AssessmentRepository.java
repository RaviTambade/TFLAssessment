package com.transflower.tflassessment.demo.repositories;

import java.util.*;
import com.transflower.tflassessment.demo.entities.*;

public interface AssessmentRepository {

    // public Assessment getDetails(int assessmentId);

    // public List<Assessment> getAll(Date fromDate, Date toDate);

    // public List<Assessment> getAllTests();

    // public List<Assessment> getAllBySubjectMatterExpert(int smeId);

    // public List<Employee> getAllEmployees();

    // public Employee getEmployeeById(int userId);

    // public List<Subject> getAllSubjects();

    // public List<EvaluationCriteria> getEvaluationCriterias();

    // public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId);

    // public boolean createTest(CreateTestRequest request);

    // public boolean addQuestion(int assessmentId, int questionId);

    // public boolean addQuestions(int assessmentId, List<QuestionBank> questions);

    // public boolean changeDuration(int assessmentId, String duration);

    // public boolean reschedule(int assessmentId, Date date);

    // public boolean removeQuestion(int assessmentId, int questionId);

    // public boolean removeQuestions(int[] testQuestions);

    // public int createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions);

    // public List<SubjectQuestions> getAllQuestionsBySubject(int subjectId);

    // public List<Employee> getSmeBySubject(int subjectId);

    // public List<Test> getAllTests(Date fromDate, Date toDate);

    // public TestWithQuestions getTestDetails(int testId);

    public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId);

    public boolean updateQuestion(Question question);

    public boolean updateTestStatus(int testId, TestStatusUpdate status);

    public boolean addEmployeesToTest(TestAssignmentRequest request);

    public List<TestEmployeeDetails> getAllTestByEmpId(int empId);
}
