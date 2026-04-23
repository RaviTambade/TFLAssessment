
namespace backend.Services.Interfaces
{
    public interface IConceptsService
    {
       
       
        Task<List<ConceptDto>> GetConceptsAsync(List<long> frameworkIds);
       
    }
}