
using backend.DTOs;

using backend.Repositories.Interfaces;

namespace backend.Services
{
    public class RuntimesService : Interfaces.IRuntimesService
    {
        private readonly IRuntimesRepository _repo;

        public RuntimesService(IRuntimesRepository repo)
        {
            _repo = repo;
        }

        public Task<List<RuntimeDto>> GetRuntimes()
            => _repo.GetRuntimes();

       
    }
}