


using backend.Repositories.Interfaces;

namespace backend.Services
{
    public class LanguagesService : Interfaces.ILanguagesService
    {
        private readonly ILanguagesRepository _repo;

        public LanguagesService(ILanguagesRepository repo)
        {
            _repo = repo;
        }

        

        public Task<List<LanguageDto>> GetLanguagesAsync(long runtimeId)
            => _repo.GetLanguagesAsync(runtimeId);

        
    }
}