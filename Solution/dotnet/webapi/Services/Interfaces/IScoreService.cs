using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IScoreService
    {
        Task<AverageScoreDto> GetAverageScoreByIdAsync(int studentId);
    
        Task<List<AverageScoreDto>> GetAllStudentsAverageScoreAsync();

        Task<AssessmentScoreDto> GetAssessmentResultData(int studentId, int assessmentId);

    }
}