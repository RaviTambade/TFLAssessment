using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Models;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;
using System.Linq;

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

      public async Task<List<AssessmentResultDto>> GetAssessmentResults()
    {
        return await _repository.GetAssessmentResults();
    }

    public async Task<List<AssessmentQuestionDto>> GetAssessmentQuestions(int assessmentId)
    {
        return await _repository.GetAssessmentQuestions(assessmentId);
    }

    public async Task<bool> SaveAssessmentAnswersAsync(AssessmentAnswersDto submission)
    {
        // Convert DTO to List<StudentAnswer>
        var answers = submission.Answers?.Select(a => new StudentAnswer
        {
            StudentId = submission.StudentId,
            AssessmentId = submission.AssessmentId,
            QuestionId = a.QuestionId,
            SelectedOption = a.SelectedOption,
            TimeTakenMinutes = submission.TimeTakenMinutes,
            CreatedAt = DateTime.UtcNow
        }).ToList();

        return await _repository.SaveAssessmentAnswersAsync(answers);
    }

}