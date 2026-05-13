



using backend.Repositories.Interfaces;

namespace backend.Services
{
    public class ConceptsService : Interfaces.IConceptsService
    {
        private readonly IConceptsRepository _repo;

        public ConceptsService(IConceptsRepository repo)
        {
            _repo = repo;
        }


        public Task<List<ConceptDto>> GetConceptsAsync(List<long> frameworkIds)
            => _repo.GetConceptsAsync(frameworkIds);

        
    }
}