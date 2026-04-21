namespace backend.Repositories.Interfaces
{
    public interface ILayersRepository
    {
        
        Task<List<LayerDto>> GetLayers(long languageId);
       
    }
}