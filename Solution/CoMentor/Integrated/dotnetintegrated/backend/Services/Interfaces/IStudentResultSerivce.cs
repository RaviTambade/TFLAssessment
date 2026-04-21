
using backend.DTOs;

public interface IStudentResultService
{
    Task<List<StudentResultDto>> GetStudentResultsAsync();
}