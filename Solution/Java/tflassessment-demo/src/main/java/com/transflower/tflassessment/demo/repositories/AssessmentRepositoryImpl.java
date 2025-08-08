// package com.transflower.tflassessment.demo.repositories;

// import java.time.LocalDateTime;
// import java.util.ArrayList;
// import java.util.Date;
// import java.util.List;

// import com.transflower.tflassessment.demo.entities.*;

// public class AssessmentRepositoryImpl implements AssessmentRepository {

//     public List<Assessment> GetDetails(int assessmentId) {


//         List<Assessment> assessments=new ArrayList<Assessment>();

//         //jdbc code


//         return assessments;
//     }

//     public List<List<Assessment>> GetAll(LocalDateTime fromDate, LocalDateTime toDate) {

//         return null;
//     }

//     public List<List<Assessment>> GetAllTests() {
//         return null;
//     }

//     public List<List<Assessment>> GetAllBySubjectMatterExpert(int smeId) {
//         return null;
//     }

//     public List<Employee> GetAllEmployees() {
//         return null;
//     }

//     public List<Employee> GetEmployeeById(int userId) {
//         return null;
//     }

//     public List<List<Subject>> GetAllSubjects() {
//         return null;
//     }

//     public List<List<EvaluationCriteria>> GetEvalutionCriterias() {
//         return null;
//     }

//     public List<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId) {
//         return null;
//     }

//     public List<Boolean> CreateTest(CreateTestRequest request) {
//         return null;
//     }

//     public List<Boolean> AddQuestion(int assessmentId, int questionId) {
//         return null;
//     }

//     public List<Boolean> AddQuestions(int assessmentId, List<TestQuestion> questions) {
//         return null;
//     }

//     public List<Boolean> ChangeDuration(int assessmentId, String duration) {
//         return null;
//     }

//     public List<Boolean> Reschedule(int assessmentId, LocalDateTime date) {
//         return null;
//     }

//     public List<Boolean> RemoveQuestion(int assessmentId, int questionId) {
//         return null;
//     }

//     public List<Boolean> RemoveQuestions(int[] testQuestions) {
//         return null;
//     }

//     public List<Integer> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions) {
//         return null;
//     }

//     public List<List<SubjectQuestions>> GetAllQuestionsBySubject(int subjectId) {
//         return null;
//     }

//     public List<List<Employee>> GetSmeBySubject(int subjectId) {
//         return null;
//     }

//     public List<List<Test>> GetAllTests(LocalDateTime fromDate, LocalDateTime toDate) {
//         return null;
//     }

//     public List<TestWithQuestions> GetTestDetails(int testId) {
//         return null;
//     }

//     public List<List<Question>> GetQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
//         return null;
//     }

//     public List<Boolean> UpdateQuestion(Question question) {
//         return null;
//     }

//     @Override
//     public Assessment getDetails(int assessmentId) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getDetails'");
//     }

//     @Override
//     public List<Assessment> getAll(Date fromDate, Date toDate) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAll'");
//     }

//     @Override
//     public List<Assessment> getAllTests() {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAllTests'");
//     }

//     @Override
//     public List<Assessment> getAllBySubjectMatterExpert(int smeId) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAllBySubjectMatterExpert'");
//     }

//     @Override
//     public List<Employee> getAllEmployees() {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAllEmployees'");
//     }

//     @Override
//     public List<Subject> getAllSubjects() {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAllSubjects'");
//     }

//     @Override
//     public List<EvaluationCriteria> getEvaluationCriterias() {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getEvaluationCriterias'");
//     }

//     @Override
//     public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getEvaluationCriteriasBySubject'");
//     }

//     @Override
//     public boolean createTest(Assessment newTest) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'createTest'");
//     }

//     @Override
//     public boolean addQuestion(int assessmentId, int questionId) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'addQuestion'");
//     }

//     @Override
//     public boolean addQuestions(int assessmentId, List<TestQuestion> questions) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'addQuestions'");
//     }

//     @Override
//     public boolean changeDuration(int assessmentId, String duration) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'changeDuration'");
//     }

//     @Override
//     public boolean reschedule(int assessmentId, Date date) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'reschedule'");
//     }

//     @Override
//     public boolean removeQuestion(int assessmentId, int questionId) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'removeQuestion'");
//     }

//     @Override
//     public boolean removeQuestions(int[] testQuestions) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'removeQuestions'");
//     }
// }
 

