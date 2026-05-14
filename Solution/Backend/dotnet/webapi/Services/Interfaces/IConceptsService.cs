using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.Services.Interfaces
{
    public interface IConceptsService
    {
       
       
        Task<List<Concepts>> GetConceptsAsync(List<long> frameworkIds);
       
    }
}