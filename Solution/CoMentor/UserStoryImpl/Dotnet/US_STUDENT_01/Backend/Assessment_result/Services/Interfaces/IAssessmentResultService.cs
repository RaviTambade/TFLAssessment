using System.Threading.Tasks;
using Assessment_result.DTOs;

namespace Assessment_result.Services
{
    public interface IAssessmentResultService
    {
        Task<AssessmentResultResponseDto> GetResultData(AssessmentResultDto request);
    }
}