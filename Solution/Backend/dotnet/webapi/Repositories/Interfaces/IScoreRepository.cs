using backend.DTO.Responses;


namespace backend.Repositories.Interfaces
{
    public interface IScoreRepository
    {
        Task<AverageScores> GetAverageScoreByIdAsync(int studentId);
        Task<List<AverageScores>> GetAllStudentsAverageScoreAsync();
        Task<AssessmentScores> GetAssessmentResultData(int studentId, int assessmentId);

    }
}