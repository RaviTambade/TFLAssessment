package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

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

    public Assessment getDetails(int assessmentId);

    List<Assessment> getAll(LocalDateTime fromDate, LocalDateTime toDate);

    public List<Assessment> getAllTests();

    public List<Assessment> getAllBySubjectMatterExpert(int smeId);

    public List<Employee> getAllEmployees();

    public Employee getEmployeeById(int userId);

    public List<Subject> getAllSubjects();

    public List<EvaluationCriteria> getEvaluationCriterias();

    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId);

    public boolean createTest(CreateTestRequest request);

    public boolean addQuestion(int assessmentId, int questionId);

    public boolean addQuestions(int assessmentId, List<QuestionBank> questions);

    public boolean changeDuration(int assessmentId, String duration);

    public boolean reschedule(int assessmentId, Date date);

    public boolean removeQuestion(int assessmentId, int questionId);

    public boolean removeQuestions(int[] testQuestions);
    public int createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions);

    public List<Employee> getSmeBySubject(int subjectId);

    public List<Test> getAllTests(Date fromDate, Date toDate);

    public TestWithQuestions getTestDetails(int testId);

    public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId);

    public boolean updateQuestion(Question question);

    public boolean updateTestStatus(int testId, TestStatusUpdate status);

    public boolean addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails);

    public List<TestEmployeeDetails> getAllTestByEmpId(int empId);

    public List<SubjectQuestion> getAllQuestionsBySubject(int subjectId);


}