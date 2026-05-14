using backend.DTO.Requests;
using backend.DTO.Responses;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IQuestionsService
    {
        Task<Questions> GetQuestionDetailsWithAnswer(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswers>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);

        Task<QuestionDetails> GetQuestionDetails(int questionId);
    }
}
