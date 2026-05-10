using  AssessmentEntities;
namespace AssessmentInterfaces;
public interface IAssessmentService
{
  public Assessment GetDetails(int AssessmentId);
  public List<Assessment> GetAll(DateTime fromDate, DateTime toDate);
  public List<Assessment> GetAllTests();
  public List<Assessment> GetAllBySubjectMatterExpert(int smeId);
  
  public List<Employee> GetAllEmployees();

  public List<Subject> GetAllSubjects();

  public List<EvaluationCriteria> GetEvalutionCriterias();

  public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId);

  public Task<bool> CreateTest(Assessment newTest);
  public bool AddQuestion(int AssessmentId, int questionId);
  public bool AddQuestions(int AssessmentId, List<TestQuestion> questions);
  public bool ChangeDuration(int AssessmentId, string duration);
  public bool Reschedule(int AssessmentId, DateTime date);
  public bool RemoveQuestion(int Assessmentid, int questionId);
  public bool RemoveQuestions(int[] testQuestions);

}