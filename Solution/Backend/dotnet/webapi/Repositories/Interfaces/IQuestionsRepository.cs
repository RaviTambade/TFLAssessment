using backend.DTO.Requests;
using backend.DTO.Responses;
using API.DTOs;


namespace backend.Repositories.Interfaces
{
    public interface IQuestionsRepository
    {
        Task<List<Dictionary<string, object>>> GetAllConcepts();
        Task<Questions> GetQuestionDetailsWithAnswer(int questionId);
        Task<IEnumerable<AssessmentQuestionAnswers>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);
        Task<QuestionDetails> GetQuestionDetails(int questionId);
        Task<List<GetQuestionsByTestId>> GetQuestionsByTestId(long testId);
    }
  
}