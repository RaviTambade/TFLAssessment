using Assessment.Entities;
using Assessment.Repositories.Interfaces;
namespace Assessment.Repositories.Implementations;
public class MockTestManager :IManager
{


    public List<Employee> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
         
        return employees;
    }

    public List<Subject> GetAllSubjects()
    {
        List<Subject> subjects = new List<Subject>();
        
        return subjects;
    }

    public List<EvaluationCriteria> GetEvalutionCriterias()
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        
        return criterias;
    }


    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId)
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
          
        return criterias;
    }


    public int GetCandidateScore(int candidateId, int testId)
    {
        int score=56;
        return score;
    }

    public List<TestQuestion> GetQuestions(int testId)
    {

        List<TestQuestion> questions = new List<TestQuestion>();
       return questions;
    }

    public bool InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
    {
        bool status = false;
        
        return status;
    }

    public bool SetTestStartTime(int candidateId, int testId, TestTime time)
    {

        bool status = false;

        return status;
       
    }

    public bool SetTestEndTime(int candidateId, int testId, TestTime time)
    {
        bool status = false;
  
        return status;
    }
    public List<Test> GetAllTests()
    {
        List<Test> tests = new List<Test>();
        
        return tests;
    }

    public string GetCriteria(string subject, int questionId)
    {
        string criteria = "";
          
        return criteria;
    }

    public TestQuestion GetQuestion(string subject, int questionid)
    {

        TestQuestion question = null;
       
        return question;
    }

    public bool InsertQuestion(NewQuestion question)
    {

        bool status = false;
        
        
        return status;
    }

    public bool InsertCriteria(NewCriteria criteria)
    {
        bool status=false;
        return status;
    }


    public bool UpdateCriteria(int evaluationCriteriaId, int questionId)
    {

        bool status = false;
    
        return status;
    }

    public List<Question> GetTestQuestion(int testId)
    {
        List<Question> questions = new List<Question>();
        return questions;
    }

    public List<InterviewedCandidates> GetAllInterviewedCandidatesInfo()
    {
        List<InterviewedCandidates> CandidatesInfo = new List<InterviewedCandidates>();
        return CandidatesInfo;
    }


    public bool DeleteQuestion(int[] testQuestions)
    {
        bool status = false;
        return status;
    }


    public List<InterviewedCandidates> GetInterviewedCandidatesSubjects(int candidateId)
    {
        List<InterviewedCandidates> interviewSubjectName = new List<InterviewedCandidates>();
         
        return interviewSubjectName;
    }

    public InterviewDetails GetInterviewDetails(int interviewId)
    {
        InterviewDetails interviewInfo=new InterviewDetails();

        return interviewInfo;
    }

    public int GetCandidateTestScore(int candidateId, int testId)
    {
        int score=0;
      
        return score;
    }

    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId)
    {
 
        CandidateResultDetails candidateResultDetails=null;
       
        return candidateResultDetails;
    }


    public bool DesignTest(Test newTest){

      bool status =false;
      
      return status;
    }

}
