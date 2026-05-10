

namespace backend.Services.Interfaces
{
    public interface ILayersService
    {
       
       
        Task<List<LayerDto>> GetLayersAsync(long languageId);
        
    }
}