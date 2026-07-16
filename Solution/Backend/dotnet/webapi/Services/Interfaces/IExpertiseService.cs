
using Backend.DTO.Responses;
using backend.Models;
namespace backend.Services.Interfaces;

public interface IExpertiseService
{
     Task<int> AddSmeExpertise(Expertise expertise);
     Task<ExpertiseOptions> GetExpertiseOptions();
}