using System.Linq;
using System.Threading.Tasks;
using Assessment_result.DTOs;
using Assessment_result.Repositories;

namespace Assessment_result.Services;

public class AssessmentResultService : IAssessmentResultService
{
    private readonly IAssessmentResultRepository _repository;

    public AssessmentResultService(IAssessmentResultRepository repository)
    {
        _repository = repository;
    }

   public async Task<AssessmentResultResponseDto> GetResultData(AssessmentResultDto request)
{
    var result = await _repository.GetResultData(request.StudentId, request.AssessmentId);

    if (result == null)
        return null;

    return new AssessmentResultResponseDto
    {
        StudentId = result.StudentId,
        AssessmentId = result.AssessmentId,
        Score = result.Score,
        TotalQuestions = result.TotalQuestions,
        CorrectAnswers = result.CorrectAnswers,
        WrongAnswers = result.WrongAnswers,
        Percentage = result.Percentage,

        // ❗ No details because this SP returns only summary
        Details = null
    };
}
}