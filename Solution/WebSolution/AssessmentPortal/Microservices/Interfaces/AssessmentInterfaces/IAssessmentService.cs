namespace AssessmentInterfaces;
using  AssessmentEntities;
public interface IAssessmentService
{
  public Assessment GetDetails(int AssessmentId);
  public List<Assessment> GetAll(DateTime fromDate, DateTime toDate);
  public List<Assessment> GetAllBySubjectMatterExpert(int smeId);
  public bool AddQuestion(int AssessmentId, int questionId);
  public bool AddQuestions(int AssessmentId, List<int> questions);
  public bool RemoveQuestion(int Assessmentid, int questionId);
  public bool ChangeDuration(int AssessmentId, int duration);
  public bool Reschedule(int AssessmentId, DateTime date);
}