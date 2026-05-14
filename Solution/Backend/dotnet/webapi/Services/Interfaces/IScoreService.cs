using backend.DTO.Requests;
using backend.DTO.Responses;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IScoreService
    {
        Task<AverageScores> GetAverageScoreByIdAsync(int studentId);
    
        Task<List<AverageScores>> GetAllStudentsAverageScoreAsync();

        Task<AssessmentScores> GetAssessmentResultData(int studentId, int assessmentId);

    }
}