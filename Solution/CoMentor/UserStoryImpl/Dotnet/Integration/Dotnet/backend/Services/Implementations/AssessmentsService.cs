using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations;


public class AssessmentsService : IAssessmentsService
{
    private readonly IAssessmentRepository _repository;

    public AssessmentsService(IAssessmentRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessmentsService(long userId)
    {
        return await _repository.GetAllUpcomingAssessments(userId); // Replace 0 with actual user ID if available
    }

      public async Task<List<AllAssessmentDto>> GetAssessments()
    {
        return await _repository.GetAllAssessments();
    }

    public async Task<List<TestDto>> GetTestsAsync()
    {
        return await _repository.GetTestsAsync();
    }

    public async Task<List<StudentDto>> GetStudentsAsync()
    {
        return await _repository.GetStudentsAsync();
    }

    public async Task AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        await _repository.AssignAssessmentAsync(dto);
    }



}