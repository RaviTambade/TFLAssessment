using backend.DTOs;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;
using System.Threading.Tasks;

namespace backend.Services.Implementations
{
    public class QuestionsService : IQuestionsService
    {
        private readonly IQuestionsRepository _repository;

        public QuestionsService(IQuestionsRepository repository)
        {
            _repository = repository;
        }

        public async Task<QuestionsDto> QuestionDetailsWithAns(int questionId)
        {
            return await _repository.QuestionDetailsWithAns(questionId);
        }

        public async Task<QuestionDetailsDto> ViewQuestionDetails(int questionId)
        {
            return await _repository.ViewQuestionDetails(questionId);
        }
    }
}