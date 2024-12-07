using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Services;
using Transflower.TFLAssessment.Services.Interfaces;

public class AssessmentService : IAssessmentService
{
   private readonly IAssessmentRepository _repository;
   public AssessmentService(IAssessmentRepository repository)
   {
      _repository = repository;

   }
   // public async Task<Assessment> GetDetails(int AssessmentId)
   // {
   //    return await _repository.GetDetails(AssessmentId);
   // }
//    public async Task<List<Assessment>> GetAll(DateTime fromDate, DateTime toDate)
//    {
//       return await _repository.GetAll(fromDate, toDate);
//    }

//    public async Task<List<Assessment>> GetAllTests()
//    {
//       return await _repository.GetAllTests();
//    }
//    public async Task<List<Assessment>> GetAllBySubjectMatterExpert(int smeId)
//    {
//       return await _repository.GetAllBySubjectMatterExpert(smeId);
//    }

   public async Task<List<Employee>> GetAllEmployees()
   {
      return await _repository.GetAllEmployees();
   }
   
  public async Task<Employee> GetEmployeeById(int userId)
  {
      return await _repository.GetEmployeeById(userId);
   }

//    public async Task<List<Subject>> GetAllSubjects()
//    {
//       return await _repository.GetAllSubjects();
//    }

//    public async Task<List<EvaluationCriteria>> GetEvalutionCriterias()
//    {
//       return await _repository.GetEvalutionCriterias();
//    }

//    public async Task<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId)
//    {
//       return await _repository.GetEvalutionCriteriasBySubject(subjectId);
//    }

//    public async Task<bool> CreateTest(CreateTestRequest request)
//    {
//       return await _repository.CreateTest(request);
//    }

//    public async Task<bool> AddQuestion(int AssessmentId, int questionId)
//    {
//       return await _repository.AddQuestion(AssessmentId, questionId);
//    }
//    public async Task<bool> AddQuestions(int AssessmentId, List<TestQuestion> questions)
//    {
//       return await _repository.AddQuestions(AssessmentId, questions);
//    }
//    public async Task<bool> ChangeDuration(int AssessmentId, string duration)
//    {
//       return await _repository.ChangeDuration(AssessmentId, duration);
//    }
//    public async Task<bool> Reschedule(int AssessmentId, DateTime date)
//    {
//       return await _repository.Reschedule(AssessmentId, date);
//    }
//    public async Task<bool> RemoveQuestion(int Assessmentid, int questionId)
//    {
//       return await _repository.RemoveQuestion(Assessmentid, questionId);
//    }
//    public async Task<bool> RemoveQuestions(int[] testQuestions)
//    {
//       return await _repository.RemoveQuestions(testQuestions);
//    }


}