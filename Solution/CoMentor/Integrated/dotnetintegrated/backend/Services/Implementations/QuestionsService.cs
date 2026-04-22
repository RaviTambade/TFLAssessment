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

        public async Task<IEnumerable<AssessmentQuestionAnswersDto>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId)
        {
            if (assessmentId <= 0 || studentId <= 0)
                throw new ArgumentException("AssessmentId and StudentId must be greater than 0.");

            var results = await _repository.GetStudentAssessmentQuestionsResultAsync(assessmentId, studentId);

            if (results == null || !results.Any())
                throw new KeyNotFoundException($"No assessment found for AssessmentId={assessmentId}, StudentId={studentId}.");

            return results;
        }
    }
}