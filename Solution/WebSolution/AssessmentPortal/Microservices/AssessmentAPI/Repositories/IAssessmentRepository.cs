using  Transflower.TFLAssessment.Entities;
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

  public Task<List<EvaluationCriteria>> GetEvalutionCriterias();

  public Task<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId);

  public Task<bool> CreateTest(CreateTestRequest request);
  public Task<bool> AddQuestion(int AssessmentId, int questionId);
  public Task<bool> AddQuestions(int AssessmentId, List<TestQuestion> questions);
  public Task<bool> ChangeDuration(int AssessmentId, string duration);
  public Task<bool> Reschedule(int AssessmentId, DateTime date);
  public Task<bool> RemoveQuestion(int Assessmentid, int questionId);
  public Task<bool> RemoveQuestions(int[] testQuestions);
  public Task<int> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions);
  public Task<List<SubjectQuestions>> GetAllQuestionsBySubject(int subjectId);
  public Task<List<Employee>> GetSmeBySubject(int subjectId);
  public Task<List<Test>> GetAllTests(DateTime fromDate, DateTime toDate);
  public Task<TestWithQuestions> GetTestDetails(int testId);
  public Task<List<Question>> GetQuestionsByEvaluationCriteriaId(int EvaluationCriteriaId);
}

