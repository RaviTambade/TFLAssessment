
using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;
public interface ITestManager
{

   public List<Employee> GetAllEmployees();
   public List<Subject> GetAllSubjects();
  public Test GetTestDetails(int testId);
  public List<Test> GetAllTests(DateTime fromDate, DateTime toDate);
  public List<Test> GetAllTestsDesignedBy(int smeId);
  public bool AddQuestionToTest(int testId, int questionId);
  public bool AddQuestionsToTest(int testId, List<int> questions);
  public bool RemoveQuestionFromTest(int testid, int questionId);
  public bool ChangeTestDuration(int testId, int duration);
  public bool RescheduleTest(int testId, DateTime date);
  public List<CandidateResultDetails> GetTestResult(int testId);
  public CandidateResultDetails GetCandidateTestResult(int testId, int candidateId);

  public List<CandidateResultDetails> GetAllCandidatesScore(int testId);
  public bool SetPassingLevel(int testId, int passingLevel);
    
  
}