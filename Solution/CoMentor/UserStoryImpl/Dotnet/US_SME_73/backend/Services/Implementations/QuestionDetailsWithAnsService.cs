using backend.DTOs;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations
{
    public class QuestionDetailsService : IQuestionDetailsService
    {
        private readonly IQuestionDetailsRepository _repository;

        public QuestionDetailsService(IQuestionDetailsRepository repository)
        {
            _repository = repository;
        }

        public QuestionDetailsDto QuestionDetailsWithAns(int questionId)
        {
            return _repository.QuestionDetailsWithAns(questionId);
        }
    }
}