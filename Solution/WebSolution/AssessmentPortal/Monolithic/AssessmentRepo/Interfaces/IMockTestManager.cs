using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;

public interface IMockTestManager
{



    // public List<InterviewCandidateDetails> GetAllInterviewedCandidatesInfo();
    public List<Employee> GetAllEmployees();
    public List<Subject> GetAllSubjects();
    public List<EvaluationCriteria> GetEvalutionCriterias();
    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId);
    public int GetCandidateScore(int candidateId, int testId);

    public List<TestQuestion> GetQuestions(int testId);
    public bool InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);

    public bool SetCandidateTestStartTime(int candidateId, int testId, TestTime time);

    public bool SetCandidateTestEndTime(int candidateId, int testId, TestTime time);

    public List<Test> GetAllTests();

    public string GetCriteria(string subject, int questionId);
    public TestQuestion GetQuestion(string subject, int questionid);

    public bool InsertQuestion(NewQuestion question);


    public bool InsertCriteria(NewCriteria criteria);
    public bool UpdateCriteria(int evaluationCriteriaId, int questionId);
    public  List<Question> GetTestQuestions(int testId);

    public bool DeleteQuestion(int[] testQuestions);
   public List<InterviewCandidateDetails> GetInterviewCandidateDetailsSubjects(int candidateId);

    public InterviewDetails GetInterviewDetails(int interviewId);
    public int GetCandidateTestScore(int candidateId, int testId);
    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId);

    public bool CreateTest(Test newTest);
}