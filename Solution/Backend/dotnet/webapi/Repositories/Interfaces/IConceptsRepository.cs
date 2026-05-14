using backend.DTO.Requests;
using backend.DTO.Responses;


namespace backend.Repositories.Interfaces
{
    public interface IConceptsRepository
    {
        
        
        Task<List<Concepts>> GetAllConceptsAsync();
       
    }
}