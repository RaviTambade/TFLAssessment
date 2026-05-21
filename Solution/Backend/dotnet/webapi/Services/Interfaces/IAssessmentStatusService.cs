using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.Services.Interfaces;


public interface IAssessmentStatusService
{
    Task<List<AssessmentStatus>> GetAssessmentsByStatusAsync(string status);
}