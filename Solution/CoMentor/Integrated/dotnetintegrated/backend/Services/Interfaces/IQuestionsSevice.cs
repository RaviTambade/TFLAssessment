using backend.DTOs;

namespace backend.Services.Interfaces
{
    public interface IQuestionsService
    {
        QuestionsDto QuestionDetailsWithAns(int questionId);
    }
}