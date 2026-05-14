using backend.DTO.Requests;
using backend.DTO.Responses;
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

        public async Task<Questions> GetQuestionDetailsWithAnswer(int questionId)
        {
            return await _repository.GetQuestionDetailsWithAnswer(questionId);
        }

        public async Task<QuestionDetails> GetQuestionDetails(int questionId)
        {
            return await _repository.GetQuestionDetails(questionId);
        }
 


        public async Task<List<Dictionary<string, object>>> GetAllConcepts()
        {
            return await _repository.GetAllConcepts();
        }
           public async Task<List<string>> GetAllLanguages()
        {
              return await Task.FromResult(new List<string>());
        }
            public async Task<List<string>> GetAllFrameworks()
        {
              return await Task.FromResult(new List<string>());
        }
            public async Task<List<string>> GetAllLayers()
        {
              return await Task.FromResult(new List<string>());
        }
        public async Task<List<string>> GetAllQuestionTypes()
        {
              return await Task.FromResult(new List<string>());
        }
         public async Task<List<string>> GetAllQuestionByStatus(string status)
        {

    
              return await Task.FromResult(new List<string>());
        }
         

        public async Task<IEnumerable<AssessmentQuestionAnswers>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId)
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