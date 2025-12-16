using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Entities.Models;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Services;

public class AssessmentService : IAssessmentService
{
   private readonly IAssessmentRepository _repository;
   public AssessmentService(IAssessmentRepository repository)
   {
      _repository = repository;

   }
   public async Task<Assessment> GetDetails(int AssessmentId)
   {
      return await _repository.GetDetails(AssessmentId);
   }
   public async Task<List<Assessment>> GetAll(DateTime fromDate, DateTime toDate)
   {
      return await _repository.GetAll(fromDate, toDate);
   }

   public async Task<List<Assessment>> GetAllTests()
   {
      return await _repository.GetAllTests();
   }
   public async Task<List<Assessment>> GetAllBySubjectMatterExpert(int smeId)
   {
      return await _repository.GetAllBySubjectMatterExpert(smeId);
   }

   public async Task<List<Employee>> GetAllEmployees()
   {
      return await _repository.GetAllEmployees();
   }

   public async Task<Employee> GetEmployeeById(int userId)
   {
      return await _repository.GetEmployeeById(userId);
   }

   public async Task<List<Subject>> GetAllSubjects()
   {
      return await _repository.GetAllSubjects();
   }

   public async Task<List<Concepts>> GetConcepts()
   {
      return await _repository.GetConcepts();
   }

   public async Task<List<Concepts>> GetConceptsBySubject(int subjectId)
   {
      return await _repository.GetConceptsBySubject(subjectId);
   }

   public async Task<bool> CreateTest(CreateTestRequest request)
   {
      return await _repository.CreateTest(request);
   }

   public async Task<bool> AddQuestion(int AssessmentId, int questionId)
   {
      return await _repository.AddQuestion(AssessmentId, questionId);
   }

   public async Task<bool> AddQuestions(int AssessmentId, List<QuestionBank> questions)
   {
      return await _repository.AddQuestions(AssessmentId, questions);
   }

   public async Task<bool> ChangeDuration(int AssessmentId, string duration)
   {
      return await _repository.ChangeDuration(AssessmentId, duration);
   }

   public async Task<bool> Reschedule(int AssessmentId, DateTime date)
   {
      return await _repository.Reschedule(AssessmentId, date);
   }

   public async Task<bool> RemoveQuestion(int Assessmentid, int questionId)
   {
      return await _repository.RemoveQuestion(Assessmentid, questionId);
   }

   public async Task<bool> RemoveQuestions(int[] testQuestions)
   {
      return await _repository.RemoveQuestions(testQuestions);
   }
   public async Task<int> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions)
   {
      return await _repository.CreateTestWithQuestionsAsync(createTestWithQuestions);
   }
   public async Task<List<SubjectQuestions>> GetAllQuestionsBySubject(int subjectId)
   {
      return await _repository.GetAllQuestionsBySubject(subjectId);
   }


   public async Task<List<Employee>> GetSmeBySubject(int subjectId)
   {
      // Assuming the repository has a method to get SMEs by subject
      return await _repository.GetSmeBySubject(subjectId);
   }
   public async Task<List<Test>> GetAllTests(DateTime fromDate, DateTime toDate)
   {
      return await _repository.GetAllTests(fromDate, toDate);
   }
   public async Task<TestWithQuestions> GetTestDetails(int testId)
   {
      return await _repository.GetTestDetails(testId);
   }
   public async Task<List<Question>> GetQuestionsByConceptId(int conceptId)
   {
      return await _repository.GetQuestionsByConceptId(conceptId);
   }
   public async Task<bool> UpdateQuestion(Question question)
   {
      return await _repository.UpdateQuestion(question);
   }
   public async Task<bool> UpdateTestStatus(int testId, TestStatusUpdate status)
   {
      return await _repository.UpdateTestStatus(testId, status);
   }

   public async Task<bool> AddEmployeesToTest(TestAssignmentRequest request)
   {
      return await _repository.AddEmployeesToTest(request);
   }
   public async Task<List<TestEmployeeDetails>> GetAllTestByEmpId(int empId)
   {
      return await _repository.GetAllTestByEmpId(empId);
   }

   public async Task<int> GetTestCountByStatus(string status)
    {
      return await _repository.GetTestCountByStatus(status);
   }

   public async Task<List<TestDetails>> GetAllTestByStatus(string status)
    {
      return await _repository.GetAllTestByStatus(status);

   }
   

   public async  Task<List<Subject>> GetSubjectBySME(int smeid)
   {
         return await _repository.GetSubjectBySME(smeid);
   }
   
   public async Task<List<TestDetails>> GetSmeTestList(int smeId)
   {
      return  await _repository.GetSmeTestList(smeId);
   }
    public async Task<List<CandidateAssesmentHistory>> GetAssesmentHistory(int candidateid){
            return  await _repository.GetAssesmentHistory(candidateid);

    }
   
}