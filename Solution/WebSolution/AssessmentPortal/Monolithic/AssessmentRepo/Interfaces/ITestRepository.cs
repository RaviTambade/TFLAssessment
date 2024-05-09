using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface ITestRepository
{

   public Task <List<Employee>> GetAllEmployees();
   public Task <List<Subject>> GetAllSubjects();
  public Test GetTestDetails(int testId);
  public Test <List<Test>> GetAllTests(DateTime fromDate, DateTime toDate);
  public Task <List<Test>> GetAllTestsDesignedBy(int smeId);
  public Task <bool> AddQuestionToTest(int testId, int questionId);
  public Task <bool>  AddQuestionsToTest(int testId, List<int> questions);
  public Task <bool>  RemoveQuestionFromTest(int testid, int questionId);
  public Task <bool>  ChangeTestDuration(int testId, int duration);
  public Task <bool>  RescheduleTest(int testId, DateTime date);
  public Task <List<CandidateResultDetails>> GetTestResult(int testId);
  public Task <CandidateResultDetails> GetCandidateTestResult(int testId, int candidateId);

  public Task <List<CandidateResultDetails>> GetAllCandidatesScore(int testId);
  public Task <bool> SetPassingLevel(int testId, int passingLevel);
    
  
}

