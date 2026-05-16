using System.Threading.Tasks;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services
{
    public class ScoreService : IScoreService
    {
        private readonly IScoreRepository _scoreRepository;

        public ScoreService(IScoreRepository scoreRepository)
        {
            _scoreRepository = scoreRepository;
        }

        public async Task<AverageScores> GetAverageScoreByIdAsync(int studentId)
        {
            return await _scoreRepository.GetAverageScoreByIdAsync(studentId);
        }
         public async Task<List<AverageScores>> GetAllStudentsAverageScoreAsync()
        {
            return await _scoreRepository.GetAllStudentsAverageScoreAsync();
        }
         public async Task<AssessmentScores> GetAssessmentResultData(int studentId, int assessmentId)
        {
            return await _scoreRepository.GetAssessmentResultData(studentId, assessmentId);
        }
    }
}