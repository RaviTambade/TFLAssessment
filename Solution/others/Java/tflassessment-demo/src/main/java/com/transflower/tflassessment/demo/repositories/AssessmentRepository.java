package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import com.transflower.tflassessment.demo.entities.Assessment;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;
import com.transflower.tflassessment.demo.entities.CreateTestWithQuestions;
import com.transflower.tflassessment.demo.entities.Employee;
import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.entities.Question;
import com.transflower.tflassessment.demo.entities.QuestionBank;
import com.transflower.tflassessment.demo.entities.Test;
import com.transflower.tflassessment.demo.entities.TestAssignmentRequest;
import com.transflower.tflassessment.demo.entities.TestEmployeeDetails;
import com.transflower.tflassessment.demo.entities.TestStatusUpdate;
import com.transflower.tflassessment.demo.entities.TestWithQuestions;
import com.transflower.tflassessment.demo.entities.CreateTestRequest;
public interface AssessmentRepository {

    public Assessment getDetails(int assessmentId);

    List<Assessment> getAll(LocalDateTime fromDate, LocalDateTime toDate);

    public List<Assessment> getAllTests();

    public List<Assessment> getAllBySubjectMatterExpert(int smeId);

    public List<Employee> getAllEmployees();

    public Employee getEmployeeById(int userId);

    public List<com.transflower.tflassessment.demo.entities.Subject> getAllSubjects();

    public List<EvaluationCriteria> getEvaluationCriterias();

    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId);

    public boolean createTest(CreateTestRequest request);
    public boolean addQuestion(int assessmentId, int questionId);

    public boolean addQuestions(int assessmentId, List<QuestionBank> questions);

    public boolean changeDuration(int assessmentId, String duration);

  public boolean reschedule(int assessmentId, Date date);
  public boolean removeQuestion(int assessmentId, int questionId);
    public boolean removeQuestions(int[] testQuestions);
  //public int createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions);
 // public List<SubjectQuestions> getAllQuestionsBySubject(int subjectId);

    public List<Employee> getSmeBySubject(int subjectId);

    public List<Test> getAllTests(Date fromDate, Date toDate);

    public TestWithQuestions getTestDetails(int testId);

    public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId);

    public boolean updateQuestion(Question question);

    public boolean updateTestStatus(int testId, TestStatusUpdate status);

    public boolean addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails);

    public List<TestEmployeeDetails> getAllTestByEmpId(int empId);

}
