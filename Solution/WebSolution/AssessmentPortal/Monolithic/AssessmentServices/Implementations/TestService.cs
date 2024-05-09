using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories.Implementations;

 
public class TestService :ITestManager
{
    private readonly ITestRepository _repository;

    public EvaluationCriteriaService(ITestRepository repository)
    {
        _repository = repository;

    } 

    public Test GetTestDetails(int testId) //*******
    {
            return  _repository.GetTestDetails(testId);
    }
    public List<Test> GetAllTests(DateTime fromDate, DateTime toDate)  //******
    {
        
        return _repository.GetAllTests(fromDate, toDate);

    }
    public List<Test> GetAllTestsDesignedBy(int smeId)   //********
    {
        return _repository.GetAllTestsDesignedBy(smeId);
    }
    public bool AddQuestionToTest(int testId, int questionId)  //*******
    {
        return _repository.AddQuestionsToTest(testId, questionId);
    }
    public bool AddQuestionsToTest(int testId, List<int> questions) //****
    {
        return _repository.AddQuestionsToTest(testId,questions);
    }
    public bool RemoveQuestionFromTest(int testid, int questionId)
    {
        return _repository.RemoveQuestionFromTest(testid, questionId);
    }
    public bool ChangeTestDuration(int testId, int duration)
    {
        return _repository.ChangeTestDuration(testId, duration);
    }
    public bool RescheduleTest(int testId, DateTime date)
    {
        return _repository.RescheduleTest(testId, date);
    }
    public  List<CandidateResultDetails>  GetTestResult(int testId)
    {
        return _repository.GetTestResult(testId);
    } 

    public CandidateResultDetails  GetCandidateTestResult(int testId, int candidateId)
    {
            return _repository.GetCandidateTestResult(testId, candidateId);
    }
   public List<CandidateResultDetails> GetAllCandidatesScore( int testId)
   {
        return _repository.GetAllCandidatesScore(testId);
   }
   public  List<Employee>  GetAllEmployees()
   {
        return _repository.GetAllEmployees();
   } 

     public  List<Subject>  GetAllSubjects()
     {
        return _repository.GetAllSubjects();
     } 

    public bool SetPassingLevel(int testId, int passingLevel)
    {
        return _repository.SetPassingLevel(testId,passingLevel);
    }

}
