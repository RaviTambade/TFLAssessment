using backend.DTO.Requests;
using backend.DTO.Responses;


namespace backend.Repositories.Interfaces
{
    public interface IQuestionsRepository
    {
        Task<Questions> GetQuestionDetailsWithAnswer(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswers>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);
        Task<QuestionDetails> GetQuestionDetails(int questionId);
    }
  
}