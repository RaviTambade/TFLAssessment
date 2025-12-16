using  Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Entities.Models;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IAssessmentRepository
{
  public Task<Assessment> GetDetails(int AssessmentId);
  public Task<List<Assessment>> GetAll(DateTime fromDate, DateTime toDate);
  public Task<List<Assessment>> GetAllTests();
  public Task<List<Assessment>> GetAllBySubjectMatterExpert(int smeId);

  public Task<List<Employee>> GetAllEmployees();

  public Task<Employee> GetEmployeeById(int userId);

  public Task<List<Subject>> GetAllSubjects();

  public Task<List<Concepts>> GetConcepts();

  public Task<List<Concepts>> GetConceptsBySubject(int subjectId);

  public Task<bool> CreateTest(CreateTestRequest request);
  public Task<bool> AddQuestion(int AssessmentId, int questionId);
  public Task<bool> AddQuestions(int AssessmentId, List<QuestionBank> questions);
  public Task<bool> ChangeDuration(int AssessmentId, string duration);
  public Task<bool> Reschedule(int AssessmentId, DateTime date);
  public Task<bool> RemoveQuestion(int Assessmentid, int questionId);
  public Task<bool> RemoveQuestions(int[] testQuestions);
  public Task<int> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions);
  public Task<List<SubjectQuestions>> GetAllQuestionsBySubject(int subjectId);
  public Task<List<Employee>> GetSmeBySubject(int subjectId);
  public Task<List<Test>> GetAllTests(DateTime fromDate, DateTime toDate);
  public Task<TestWithQuestions> GetTestDetails(int testId);
  public Task<List<Question>> GetQuestionsByConceptId(int ConceptId);
  //UpdateQuestion
  public Task<bool> UpdateQuestion(Question question);

  public Task<bool> UpdateTestStatus(int testId, TestStatusUpdate status);

  // public Task<List<Employee>> GetAllEmployees();
  public Task<bool> AddEmployeesToTest(TestAssignmentRequest request);

  public Task<List<TestEmployeeDetails>> GetAllTestByEmpId(int empId);

  public Task<int> GetTestCountByStatus(string status);
  public Task<List<TestDetails>> GetAllTestByStatus(string status);
  public  Task<List<Subject>> GetSubjectBySME(int smeid);
  
  public  Task<List<TestDetails>> GetSmeTestList(int smeId);
       public Task<List<CandidateAssesmentHistory>> GetAssesmentHistory(int candidateid);

}

