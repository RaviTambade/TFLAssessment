using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;

namespace backend.Services.Interfaces;

    public class ConceptsService : IConceptsService
    {
        private readonly IConceptsRepository _repo;

        public ConceptsService(IConceptsRepository repo)
        {
            _repo = repo;
        }


        public Task<List<Concepts>> GetConceptsAsync(List<long> frameworkIds)
            => _repo.GetConceptsAsync(frameworkIds);

        
    }
