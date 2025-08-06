package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDateTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.*;

public class AssessmentRepositoryImpl implements AssessmentRepository {

    public List<Assessment> GetDetails(int assessmentId) {
        return null;
    }

    public List<Assessment> GetAll(LocalDateTime fromDate, LocalDateTime toDate) {
        return null;
    }

    public List<Assessment> GetAllTests() {
        return null;
    }

    public List<Assessment> GetAllBySubjectMatterExpert(int smeId) {
        return null;
    }

    public List<Employee> GetAllEmployees() {
        return null;
    }

    public List<Employee> GetEmployeeById(int userId) {
        return null;
    }

    public List<Subject> GetAllSubjects() {
        return null;
    }

    public List<EvaluationCriteria> GetEvalutionCriterias() {
        return null;
    }

    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId) {
        return null;
    }

    public List<Boolean> CreateTest(CreateTestRequest request) {
        return null;
    }

    public List<Boolean> AddQuestion(int assessmentId, int questionId) {
        return null;
    }

    public List<Boolean> AddQuestions(int assessmentId, List<TestQuestion> questions) {
        return null;
    }

    public List<Boolean> ChangeDuration(int assessmentId, String duration) {
        return null;
    }

    public List<Boolean> Reschedule(int assessmentId, LocalDateTime date) {
        return null;
    }

    public List<Boolean> RemoveQuestion(int assessmentId, int questionId) {
        return null;
    }

    public List<Boolean> RemoveQuestions(int[] testQuestions) {
        return null;
    }

    public List<Integer> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions) {
        return null;
    }

    public List<SubjectQuestions> GetAllQuestionsBySubject(int subjectId) {
        return null;
    }

    public List<Employee> GetSmeBySubject(int subjectId) {
        return null;
    }

    public List<Test> GetAllTests(LocalDateTime fromDate, LocalDateTime toDate) {
        return null;
    }

    public List<TestWithQuestions> GetTestDetails(int testId) {
        return null;
    }

    public List<Question> GetQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
        return null;
    }

    public List<Boolean> UpdateQuestion(Question question) {
        return null;
    }
}
