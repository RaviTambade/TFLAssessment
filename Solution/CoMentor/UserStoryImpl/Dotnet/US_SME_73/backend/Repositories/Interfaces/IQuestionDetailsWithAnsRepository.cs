using backend.DTOs;

namespace backend.Repositories.Interfaces
{
    public interface IQuestionDetailsRepository
    {
        QuestionDetailsDto QuestionDetailsWithAns(int questionId);
    }
}