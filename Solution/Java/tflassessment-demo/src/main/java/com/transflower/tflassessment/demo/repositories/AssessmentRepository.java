package com.transflower.tflassessment.demo.repositories;
import java.util.*;
import com.transflower.tflassessment.demo.entities.*;


public interface AssessmentRepository {
    
    public Assessment getDetails(int assessmentId);

    public List<Assessment> getAll(Date fromDate, Date toDate);

    public List<Assessment> getAllTests();

    public List<Assessment> getAllBySubjectMatterExpert(int smeId);

    public List<Employee> getAllEmployees();

    public List<Subject> getAllSubjects();

    public List<EvaluationCriteria> getEvaluationCriterias();

    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId);

    public boolean createTest(Assessment newTest);

    public boolean addQuestion(int assessmentId, int questionId);

    public boolean addQuestions(int assessmentId, List<TestQuestion> questions);

    public boolean changeDuration(int assessmentId, String duration);

    public boolean reschedule(int assessmentId, Date date);

    public boolean removeQuestion(int assessmentId, int questionId);

    public boolean removeQuestions(int[] testQuestions);
}