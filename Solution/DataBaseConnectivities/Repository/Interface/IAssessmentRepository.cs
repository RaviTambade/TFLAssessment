using  DataBaseConnectivities.Entities;
namespace DataBaseConnectivities.Repositories.Interfaces;

public interface IAssessmentRepository
{
  public Task <Assessment> GetDetails(int AssessmentId);
  public Task <List<Assessment>> GetAll(DateTime fromDate, DateTime toDate);
  public Task <List<Assessment>> GetAllTests();
  public Task <List<Assessment>> GetAllBySubjectMatterExpert(int smeId);
  
  public Task <List<Employee>> GetAllEmployees();

  public Task <List<Subject>> GetAllSubjects();

  public Task <List<EvaluationCriteria>> GetEvalutionCriterias();

  public Task <List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId);

  public Task <bool> CreateTest(Assessment newTest);
  public Task <bool> AddQuestion(int AssessmentId, int questionId);
  public Task <bool> AddQuestions(int AssessmentId, List<TestQuestion> questions);
  public Task <bool> ChangeDuration(int AssessmentId, string duration);
  public Task <bool> Reschedule(int AssessmentId, DateTime date);
  public Task <bool> RemoveQuestion(int Assessmentid, int questionId);
  public Task <bool> RemoveQuestions(int[] testQuestions);

}
