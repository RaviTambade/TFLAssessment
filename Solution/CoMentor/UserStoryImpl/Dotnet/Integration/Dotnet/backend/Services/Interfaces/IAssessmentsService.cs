using System.Collections.Generic;
using System.Threading.Tasks;

using backend.DTOs;
namespace backend.Services.Interfaces;
public interface IAssessmentsService
{
    Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessmentsService(long userId);
    Task<List<AllAssessmentDto>> GetAssessments();
}

