using backend.DTOs;

namespace backend.Services.Interfaces
{
    public interface IQuestionDetailsService
    {
        QuestionDetailsDto QuestionDetailsWithAns(int questionId);
    }
}