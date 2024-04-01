
using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;
public interface ITestManager{
 

    public int GetCandidateScore(int candidateId, int testId);
    public List<CandidateResult> GetCandidatesScore( int testId);
 
    public bool SetCandidateTestStartTime(int candidateId, int testId, TestTime time);
    public bool SetCandidateTestEndTime(int candidateId, int testId, TestTime time);
    
    public List<Test> GetAllTests();
    public bool CreateTest(Test newTest);

    public Test GetTestDetails(int testId);  //*******
    public List<Test> GetAllTests(DateTime fromDate, DateTime toDate);  //******
    public List<Test> GetAllTestsDesignedBy(int smeId);   //********
    public bool AddQuestionToTest(int testId, int questionId);  //*******
    public bool AddQuestionsToTest(int testId, List<int> questions); //****
    public bool RemoveQuestionFromTest(int testid, int questionId); //****
    public bool ChangeTestDuration(int testId, int duration);  //******
    public bool RescheduleTest(int testId, DateTime date);   //********
    public  List<CandidateTestResult>  GetTestResult(int testId); //********
    public CandidateTestResult  GetCandidateTestResult(int testId, int candidateId); //********


    public List<TestQuestion> GetQuestions(int testId);
    public List<Question> GetTestQuestions(int testId);
    public TestQuestion GetQuestion(string subject, int questionid);
    public bool InsertQuestion(NewQuestion question);
    public bool DeleteQuestion(int[] testQuestions);

    public int GetCandidateTestScore(int candidateId, int testId);
    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId);
}