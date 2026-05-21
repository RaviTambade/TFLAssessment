

using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;


public class StudentResultService : IStudentResultService
{
    private readonly IStudentResultRepository _repo;

    public StudentResultService(IStudentResultRepository repo)
    {
        _repo = repo;
    }

    public async Task<List<StudentResults>> GetStudentResultsAsync()
    {
        return await _repo.GetStudentResultsAsync();
    }
     public async Task<StudentAnswersResults> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId)
    {
        return await _repo.GetStudentAnswerResultAsync(questionId, studentId, assessmentId);
    }
}