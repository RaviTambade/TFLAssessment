package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.Assessment;
import com.transflower.tflassessment.entities.CandidateTestDetails;
import com.transflower.tflassessment.entities.CreateTestRequest;
import com.transflower.tflassessment.entities.Employee;
import com.transflower.tflassessment.entities.EvaluationCriteria;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionBank;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.SubjectQuestions;
import com.transflower.tflassessment.entities.Test;
import com.transflower.tflassessment.entities.TestAssignmentRequest;
import com.transflower.tflassessment.entities.TestEmployeeDetails;
import com.transflower.tflassessment.entities.TestStatusUpdate;
import com.transflower.tflassessment.entities.TestWithQuestions;
import com.transflower.tflassessment.repositories.AssessmentRepository;


@Service
public class AssessmentServiceImpl implements AssessmentService {

    private final AssessmentRepository _repo;
    @Autowired
    public AssessmentServiceImpl(AssessmentRepository repo)
    {
        _repo=repo;
    }

    @Override
    public Assessment getDetails(int assessmentId) {
        return _repo.getDetails(assessmentId);
    }

    @Override
    public List<Assessment> getAll(LocalDateTime fromDate, LocalDateTime toDate) {
        return _repo.getAll(fromDate, toDate);
    }

    @Override
    public List<Assessment> getAllTests() {
       return _repo.getAllTests();
    }

    @Override
    public List<Assessment> getAllBySubjectMatterExpert(int smeId) {
       return _repo.getAllBySubjectMatterExpert(smeId);
    }

    @Override
    public List<Employee> getAllEmployees() {
       return _repo.getAllEmployees();
    }

    @Override
    public Employee getEmployeeById(int userId) {
      return _repo.getEmployeeById(userId);
    }

    @Override
    public List<Subject> getAllSubjects() {
       return _repo.getAllSubjects();
    }
    @Override
    public List<EvaluationCriteria> getEvaluationCriterias() {
        return _repo.getEvaluationCriterias();
    }

    @Override
    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId) {
       return _repo.getEvaluationCriteriasBySubject(subjectId);
    }

    @Override
    public boolean createTest(CreateTestRequest request) {
       return _repo.createTest(request);
    }

    @Override
    public boolean addQuestion(int assessmentId, int questionId) {
       return _repo.addQuestion(assessmentId, questionId);
    }

    @Override
    public boolean addQuestions(int assessmentId, List<QuestionBank> questions) {
      return _repo.addQuestions(assessmentId, questions);
    }

    @Override
    public boolean changeDuration(int assessmentId, String duration) {
       return _repo.changeDuration(assessmentId, duration);
    }

    @Override
    public boolean reschedule(int assessmentId, Date date) {
       return _repo.reschedule(assessmentId, date);
    }

    @Override
    public boolean removeQuestion(int assessmentId, int questionId) {
      return _repo.removeQuestion(assessmentId, questionId);
    }

    @Override
    public boolean removeQuestions(int[] testQuestions) {
      return _repo.removeQuestions(testQuestions);
    }

    @Override
    public List<Employee> getSmeBySubject(int subjectId) {
       return _repo.getSmeBySubject(subjectId);
    }

    @Override
    public List<Test> getAllTests(Date fromDate, Date toDate) {
        return _repo.getAllTests(fromDate, toDate);
    }

    @Override
    public TestWithQuestions getTestDetails(int testId) {
       return _repo.getTestDetails(testId);
    }

    @Override
    public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
       return _repo.getQuestionsByEvaluationCriteriaId(evaluationCriteriaId);
    }

    @Override
    public boolean updateQuestion(Question question) {
        return _repo.updateQuestion(question);
    }

    @Override
    public boolean updateTestStatus(int testId, TestStatusUpdate status) {
       return _repo.updateTestStatus(testId, status);
    }

    @Override
    public boolean addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails) {
       return _repo.addEmployeesToTest(request, candidateTestDetails);
    }

    @Override
    public List<TestEmployeeDetails> getAllTestByEmpId(int empId) {
        return _repo.getAllTestByEmpId(empId);
    }

    @Override
    public List<SubjectQuestions> getAllQuestionsBySubject(int subjectId) {
      // TODO Auto-generated method stub
      throw new UnsupportedOperationException("Unimplemented method 'getAllQuestionsBySubject'");
    }

   //  @Override
   //  public List<SubjectQuestions> getAllQuestionsBySubject(int subjectId) {
   //    return _repo.getAllQuestionsBySubject(subjectId);
   //  }
    
}
