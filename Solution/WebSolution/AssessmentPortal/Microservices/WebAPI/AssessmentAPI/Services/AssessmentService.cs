using Transflower.Assessment.WebAPI.AssessmentAPI.Entities;
using Transflower.Assessment.WebAPI.AssessmentAPI.Services.Interfaces;
using Transflower.Assessment.WebAPI.AssessmentAPI.Repositories.Interfaces;
namespace  Transflower.Assessment.WebAPI.AssessmentAPI.Services;

public class AssessmentService:IAssessmentService
{
    private readonly IAssessmentRepository _repository;
    public QuestionBankService(IAssessmentRepository repository)
    {
        _repository = repository;
    
    }
     public Assessment GetDetails(int AssessmentId){
        return _repository.GetDetails(AssessmentId); 
     }
  public List<Assessment> GetAll(DateTime fromDate, DateTime toDate)
    {
        return _repository.GetAll(fromDate, toDate); 
     }
  
  public List<Assessment> GetAllTests() {
        return _repository.GetAllTests(); 
     }
  public List<Assessment> GetAllBySubjectMatterExpert(int smeId) {
        return _repository.GetAllBySubjectMatterExpert(smeId); 
     }
  
  public List<Employee> GetAllEmployees(){
        return _repository.GetAllEmployees(); 
     }

  public List<Subject> GetAllSubjects(){
        return _repository.GetAllSubjects(); 
     }

  public List<EvaluationCriteria> GetEvalutionCriterias(){
        return _repository.GetEvalutionCriterias(); 
     }

  public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId){
        return _repository.GetEvalutionCriteriasBySubject(); 
     }

  public Task<bool> CreateTest(Assessment newTest){
        return _repository.CreateTest(newTest); 
     }
  public bool AddQuestion(int AssessmentId, int questionId){
        return _repository.AddQuestion(AssessmentId,questionId); 
     }
  public bool AddQuestions(int AssessmentId, List<TestQuestion> questions);
  public bool ChangeDuration(int AssessmentId, string duration);
  public bool Reschedule(int AssessmentId, DateTime date);
  public bool RemoveQuestion(int Assessmentid, int questionId);
  public bool RemoveQuestions(int[] testQuestions);


}