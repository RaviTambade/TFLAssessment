using AssessmentRepo.Entities;
using AssessmentRepo.Interfaces;
namespace AssessmentRepo.Implementations;

using MySql.Data.MySqlClient;
using System.Data;

public class AssessmentManager :IAssessmentManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    public Assessment GetDetails(int AssessmentId) //*******
    {
            Assessment Assessment=new Assessment();

            return  Assessment;
    }
    public List<Assessment> GetAll(DateTime fromDate, DateTime toDate)  //******
    {
        List<Assessment> Assessments=new List<Assessment>();
        return Assessments;
    }
    public List<Assessment> GetAllBySubjectMatterExpert(int smeId)   //********
    {
        List<Assessment> Assessments=new List<Assessment>();
        return Assessments;
    }
    public bool AddQuestion(int AssessmentId, int questionId)  //*******
    {
         bool status =false;
        return status;
    }
    public bool AddQuestions(int AssessmentId, List<int> questions) //****
    {

        return false;
    }
    public bool RemoveQuestion(int Assessmentid, int questionId){

        bool status =false;
        return status;
    }
    public bool ChangeDuration(int AssessmentId, int duration){
        bool status =false;
        return status;
    } //******
    public bool Reschedule(int AssessmentId, DateTime date){
        bool status =false;
        return status;
    }  //********
    public  List<AssessmentResult>  GetCandidatesResults(int AssessmentId){
        List<AssessmentResult>   results=new List<AssessmentResult>();
        return results;
    } //********
    public AssessmentResult  GetCandidateResult(int AssessmentId, int candidateId){
        AssessmentResult result=new AssessmentResult();

        return result;
    }
 
}