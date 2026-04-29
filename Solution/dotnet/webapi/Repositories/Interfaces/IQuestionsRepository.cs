using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Repositories.Interfaces
{
    public interface IQuestionsRepository
    {
        Task<QuestionsDto> GetQuestionDetailsWithAnswer(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswersDto>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);
        Task<QuestionDetailsDto> GetQuestionDetails(int questionId);
    }
  
}