using backend.Models; 

namespace backend.Services.Interfaces;
public interface IExpertiseService
{
     Task<int> AddSmeExpertise(Expertise expertise);
}