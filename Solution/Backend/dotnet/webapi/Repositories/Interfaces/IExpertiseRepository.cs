using backend.Models;
namespace backend.Repositories.Interfaces;

public interface IExpertiseRepository
{
    Task<int> AddSmeExpertise(expertise expertize);
}