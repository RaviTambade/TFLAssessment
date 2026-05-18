using backend.DTOs.Responses;
using backend.DTOs.Requests;

namespace backend.Repositories.Interfaces
{
    public interface IScoreRepository
    {
        Task<AverageScore> GetAverageScoreByIdAsync(int studentId);
        Task<List<AverageScore>> GetAllStudentsAverageScoreAsync();
        Task<AssessmentScore> GetAssessmentResultData(int studentId, int assessmentId);

    }
}