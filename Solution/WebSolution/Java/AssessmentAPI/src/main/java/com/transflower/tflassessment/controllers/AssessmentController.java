package com.transflower.tflassessment.controllers;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.Assessment;
import com.transflower.tflassessment.entities.CandidateTestDetails;
import com.transflower.tflassessment.entities.CreateTestRequest;
import com.transflower.tflassessment.entities.CreateTestWithQuestions;
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
import com.transflower.tflassessment.services.AssessmentService;

//@RequestMapping("/api/assessment")
@RestController
public class AssessmentController {
   
    @Autowired
    private AssessmentService svc;

    @GetMapping("/api/assessment/{id}")
    public Assessment getDetails (@PathVariable("id")int id){
        return svc.getDetails(id);
    }

    @GetMapping("/api/assessment/creationdate/fromDate/{fromDate}/toDate/{toDate}")
    public List<Assessment> getAll(@RequestBody LocalDateTime fromDate,@RequestBody LocalDateTime toDate){
        return svc.getAll(fromDate, toDate);
    }

    @GetMapping("/api/assessment/assessments")
    public List<Assessment> getAllTests(){
        return svc.getAllTests();
    }

    @GetMapping("/api/assessment/employees")
    public List<Employee> getAllEmployees(){
        return svc.getAllEmployees();
    }

    @GetMapping("/api/assessment/employee/{userId}")
    public Employee getEmployeeById (@PathVariable("userId")int userId){
        return svc.getEmployeeById(userId);
    }

    @GetMapping("/api/assessment/subjects")
    public List<Subject> getAllSubjects(){
        return svc.getAllSubjects();
    }

    @GetMapping("/api/assessment/criterias")
    public List<EvaluationCriteria> getEvaluationCriterias(){
        return svc.getEvaluationCriterias();
    }

    @GetMapping("/api/assessment/criterias/subjects/{subjectId}")
    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(@PathVariable("subjectId")int subjectId){
        return svc.getEvaluationCriteriasBySubject(subjectId);
    }

    @GetMapping("/api/assessment/subjectexperts/{smeId}")
    public List<Assessment> getAllBySubjectMatterExpert(@PathVariable("smeId")int smeId){
        return svc.getAllBySubjectMatterExpert(smeId);
    }

    @PostMapping("/api/assessment/createtest")
    public boolean createTest(@RequestBody CreateTestRequest request){
        return svc.createTest(request);
    }

    @PostMapping("/api/assessment/addquestion/assessments/{assessmentId}/questions/{questionId}")
    public boolean addQuestion(@PathVariable("assessmentId")int assessmentId, @PathVariable("questionId")int questionId){
        return svc.addQuestion(assessmentId, questionId);
    }

    @PostMapping("/api/assessment/addmultiplequestions/assessments/{assessmentId}")
        public boolean addQuestions(@PathVariable("assessmentId")int assessmentId, @RequestBody List<QuestionBank> questions){
            return svc.addQuestions(assessmentId, questions);
        }

    @DeleteMapping("/api/assessment/{assessmentId}/questions/{questionId}")
    public boolean removeQuestion(@PathVariable("assessmentId")int assessmentId,@PathVariable("questionId")int questionId){
        return svc.removeQuestion(assessmentId, questionId);
    }

    @PutMapping("/api/assessment/{assessmentId}/duration/{duration}")
    public boolean changeDuration(@PathVariable("assessmentId")int assessmentId, @PathVariable("duration")String duration){
        return svc.changeDuration(assessmentId, duration);
    }

    @PutMapping("/api/assessment/{assessmentId}/reschedule/{date}")
    public boolean reschedule(@PathVariable("assessmentId")int assessmentId,@RequestBody Date date){
        return svc.reschedule(assessmentId, date);
    }


    @DeleteMapping("/api/assessment/deletequestions")
    public boolean removeQuestions(@RequestBody int[] testQuestions){
        return svc.removeQuestions(testQuestions);
    }

    @PostMapping("/api/assessment/addtest")
    public int createTestWithQuestions(@RequestBody CreateTestWithQuestions createTestWithQuestions){
        return createTestWithQuestions(createTestWithQuestions);
    }

    @GetMapping("/api/assessment/allquestionsbysubject/{subjectId}")
    public List<SubjectQuestions> getAllQuestionsBySubject(@PathVariable("subjectId")int subjectId){
        return svc.getAllQuestionsBySubject(subjectId);
    }

    @GetMapping("/api/assessment/getsme/{subjectId}")
     public List<Employee> getSmeBySubject(@PathVariable("subjectId")int subjectId){
        return svc.getSmeBySubject(subjectId);
     }

    @GetMapping("/api/assessment/getalltest/from/{fromDate}/to/{toDate}")
    public List<Test> getAllTests(@RequestBody Date fromDate,@RequestBody Date toDate){
        return svc.getAllTests(fromDate, toDate);
    }

    @GetMapping("/api/assessment/testdetails/{testId}")
    public TestWithQuestions getTestDetails(@PathVariable("testId")int testId){
        return svc.getTestDetails(testId);
    }

    @GetMapping("/api/assessment/questionsbycriteria/{EvaluationCriteriaId}")
    public List<Question> getQuestionsByEvaluationCriteriaId(@PathVariable("evaluationCriteriaId")int evaluationCriteriaId){
        return svc.getQuestionsByEvaluationCriteriaId(evaluationCriteriaId);
    }

    @PutMapping("/api/assessment/updatequestion/{questionId}")
    public boolean updateQuestion(@RequestBody Question question){
        return svc.updateQuestion(question);
    }

    @PutMapping("/api/assessment/updateteststatus/{testId}")
    public boolean updateTestStatus(@PathVariable("testId")int testId, @RequestBody TestStatusUpdate status){
        return svc.updateTestStatus(testId, status);
    }

    @PostMapping("/api/assessment/addemployees")
    public boolean addEmployeesToTest(@RequestBody TestAssignmentRequest request, @RequestBody CandidateTestDetails candidateTestDetails){
        return svc.addEmployeesToTest(request, candidateTestDetails);

    }

    @GetMapping("/api/assessment/alltestbyempid/{empId}")
    public List<TestEmployeeDetails> getAllTestByEmpId(@PathVariable("empId")int empId){
        return svc.getAllTestByEmpId(empId);
    }

}
