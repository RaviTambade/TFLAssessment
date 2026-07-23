using backend.DTO.Responses;
using backend.DTOs.Requests;
using backend.DTOs.Responses;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IScoreService
    {
        Task<AverageScore> GetAverageScoreByIdAsync(int studentId);

        Task<List<AverageScore>> GetAllStudentsAverageScoreAsync();

        Task<AssessmentScores> GetAssessmentResultData(long studentId, long assessmentId);

        Task<List<StudentAssessmentAnswerDetail>> GetAssessmentAnswerDetailsAsync(int studentId, int assessmentId);

    }
}