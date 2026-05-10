using backend.DTOs;

namespace backend.Repositories.Interfaces
{
    public interface IRuntimesRepository
    {
        Task<List<RuntimeDto>> GetRuntimesAsync();
       
    }
}