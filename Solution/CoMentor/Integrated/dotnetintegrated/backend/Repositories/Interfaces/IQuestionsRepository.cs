using backend.DTOs;

namespace backend.Repositories.Interfaces
{
    public interface IQuestionsRepository
    {
        QuestionsDto QuestionDetailsWithAns(int questionId);
    }
}