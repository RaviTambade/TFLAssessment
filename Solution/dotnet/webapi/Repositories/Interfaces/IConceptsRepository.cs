

namespace backend.Repositories.Interfaces
{
    public interface IConceptsRepository
    {
        
        
        Task<List<ConceptDto>> GetConceptsAsync(List<long> frameworkIds);
       
    }
}