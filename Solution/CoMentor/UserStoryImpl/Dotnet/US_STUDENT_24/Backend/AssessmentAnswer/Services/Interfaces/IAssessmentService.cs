using System.Threading.Tasks;
using AssessmentAnswer.DTOs;

namespace AssessmentAnswer.Services.Interfaces;

public interface IAssessmentService
{
    Task<bool> SaveAssessmentAnswersAsync(AssessmentAnswersDto submission);
}
