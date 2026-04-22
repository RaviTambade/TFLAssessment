

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
}