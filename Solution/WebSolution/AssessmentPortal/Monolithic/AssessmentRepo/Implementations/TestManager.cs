using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
using Assessment.Repositories.Interfaces;
namespace Assessment.Repositories.Implementations;

 
public class TestManager :ITestManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    public Test GetTestDetails(int testId) //*******
    {
            Test test=new Test();



            return  test;

    }
    public List<Test> GetAllTests(DateTime fromDate, DateTime toDate)  //******
    {
        List<Test> tests=new List<Test>();
        return tests;

    }
    public List<Test> GetAllTestsDesignedBy(int smeId)   //********
    {
        List<Test> tests=new List<Test>();
        return tests;

    }
    public bool AddQuestionToTest(int testId, int questionId)  //*******
    {
            bool status =false;
        return status;
    }
    public bool AddQuestionsToTest(int testId, List<int> questions) //****
    {
        return false;
        

    }
    public bool RemoveQuestionFromTest(int testid, int questionId){

            bool status =false;
        return status;

    }
    public bool ChangeTestDuration(int testId, int duration){
            bool status =false;
        return status;

    } //******
    public bool RescheduleTest(int testId, DateTime date){

        bool status =false;
        return status;


    }  //********
    public  List<CandidateResultDetails>  GetTestResult(int testId){
        List<CandidateResultDetails>   results=new List<CandidateResultDetails>();


        return results;



    } //********
    public CandidateResultDetails  GetCandidateTestResult(int testId, int candidateId){
            CandidateResultDetails result=new CandidateResultDetails();


            return result;

    }
   public List<CandidateResultDetails> GetAllCandidatesScore( int testId){
        List<CandidateResultDetails>  allCandidatesScore=new List<CandidateResultDetails>();
        return allCandidatesScore;

    }


}
