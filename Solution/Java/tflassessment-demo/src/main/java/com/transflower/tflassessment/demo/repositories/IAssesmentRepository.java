package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDate;
import java.util.*;
import java.util.concurrent.CompletableFuture;

import javax.security.auth.Subject;

import com.transflower.tflassessment.demo.entities.Assessment;
import com.transflower.tflassessment.demo.entities.CreateTestRequest;
import com.transflower.tflassessment.demo.entities.CreateTestWithQuestions;
import com.transflower.tflassessment.demo.entities.Employee;
import com.transflower.tflassessment.demo.entities.TestQuestion;

public interface IAssesmentRepository {
    
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

    public boolean addQuestions(int assessmentId, List<TestQuestionBank> questions);

    public boolean changeDuration(int assessmentId, String duration);

    public boolean reschedule(int assessmentId, Date date);

    public boolean removeQuestion(int assessmentId, int questionId);

    public boolean removeQuestions(int[] testQuestions);
}