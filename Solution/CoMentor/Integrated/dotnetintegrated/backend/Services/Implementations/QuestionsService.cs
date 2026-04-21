using backend.DTOs;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations
{
    public class QuestionsService : IQuestionsService
    {
        private readonly IQuestionsRepository _repository;

        public QuestionsService(IQuestionsRepository repository)
        {
            _repository = repository;
        }

        public QuestionsDto QuestionDetailsWithAns(int questionId)
        {
            return _repository.QuestionDetailsWithAns(questionId);
        }
    }
}