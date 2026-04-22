using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Repositories.Interfaces
{
    public interface IQuestionsRepository
    {
        Task<QuestionsDto> QuestionDetailsWithAns(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswersDto>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);
        Task<QuestionDetailsDto> ViewQuestionDetails(int questionId);
    }
  
}