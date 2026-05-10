

using backend.DTOs;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;


public class StudentResultService : IStudentResultService
{
    private readonly IStudentResultRepository _repo;

    public StudentResultService(IStudentResultRepository repo)
    {
        _repo = repo;
    }

    public async Task<List<StudentResultDto>> GetStudentResultsAsync()
    {
        return await _repo.GetStudentResultsAsync();
    }
     public async Task<StudentAnswersResultDto> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId)
    {
        return await _repo.GetStudentAnswerResultAsync(questionId, studentId, assessmentId);
    }
}