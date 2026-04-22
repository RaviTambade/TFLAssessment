
namespace backend.Services.Interfaces
{
    public interface IConceptsService
    {
       
       
        Task<List<ConceptDto>> GetConcepts(List<long> frameworkIds);
       
    }
}