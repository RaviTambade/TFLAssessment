

namespace backend.Services.Interfaces
{
    public interface ILayersService
    {
       
       
        Task<List<LayerDto>> GetLayers(long languageId);
        
    }
}