using backend.Models;
namespace backend.Repositories.Interfaces;

public interface IExpertiseRepository
{
    Task<int> AddSmeExpertise(Expertise expertise);
}