

namespace backend.Repositories.Interfaces
{
    public interface IConceptsRepository
    {
        
        
        Task<List<ConceptDto>> GetConcepts(List<long> frameworkIds);
       
    }
}