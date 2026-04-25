using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IQuestionsService
    {
        Task<QuestionsDto> GetQuestionDetailsWithAnswer(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswersDto>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);

        Task<QuestionDetailsDto> GetQuestionDetails(int questionId);
    }
}
