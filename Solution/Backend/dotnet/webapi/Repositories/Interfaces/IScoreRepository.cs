using backend.DTOs.Responses;
using backend.DTOs.Requests;
using backend.DTO.Responses;

namespace backend.Repositories.Interfaces
{
    public interface IScoreRepository
    {
        Task<AverageScore> GetAverageScoreByIdAsync(int studentId);
        Task<List<AverageScore>> GetAllStudentsAverageScoreAsync();
        Task<AssessmentScores> GetAssessmentResultData(int studentId, int assessmentId);

    }
}