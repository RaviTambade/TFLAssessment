using backend.DTOs.Requests;
using backend.DTOs.Responses;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IScoreService
    {
        Task<AverageScore> GetAverageScoreByIdAsync(int studentId);

        Task<List<AverageScore>> GetAllStudentsAverageScoreAsync();

        Task<AssessmentScore> GetAssessmentResultData(int studentId, int assessmentId);

    }
}