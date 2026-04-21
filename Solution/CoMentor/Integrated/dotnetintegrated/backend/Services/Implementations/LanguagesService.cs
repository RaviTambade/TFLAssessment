


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

        

        public Task<List<LanguageDto>> GetLanguages(long runtimeId)
            => _repo.GetLanguages(runtimeId);

        
    }
}