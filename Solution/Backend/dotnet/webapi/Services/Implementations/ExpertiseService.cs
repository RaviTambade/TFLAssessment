using backend.Models;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations;

public class ExpertiseService : IExpertiseService
{
    private readonly IExpertiseRepository _repo;

    public ExpertiseService(IExpertiseRepository repo)
    {
        _repo = repo;
    }

    public async Task<int> AddSmeExpertise(Expertise expertise)
    {


        return await _repo.AddSmeExpertise(expertise);
    }
}