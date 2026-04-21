using backend.DTOs;

namespace backend.Services.Interfaces
{
    public interface IRuntimesService
    {
        Task<List<RuntimeDto>> GetRuntimes();
       
    }
}