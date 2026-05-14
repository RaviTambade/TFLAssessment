using backend.DTO.Requests;
using backend.DTO.Responses;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IQuestionsService
    {
        Task<Questions> GetQuestionDetailsWithAnswer(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswers>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);

        Task<List<string>> GetAllConcepts();
        Task<List<string>> GetAllLanguages();
         Task<List<string>> GetAllFrameworks();
         Task<List<string>> GetAllLayers();
         Task<List<string>> GetAllQuestionTypes();
         Task<List<string>> GetAllQuestionByStatus(string status);

               
        Task<QuestionDetails> GetQuestionDetails(int questionId);
    }
}
