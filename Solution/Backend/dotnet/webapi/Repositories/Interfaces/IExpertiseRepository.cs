using backend.Models;
namespace backend.Repositories.Interfaces;

using Backend.DTO.Responses;

public interface IExpertiseRepository
{
    Task<int> AddSmeExpertise(Expertise expertise);
    Task<ExpertiseOptions> GetExpertiseOptions();
}