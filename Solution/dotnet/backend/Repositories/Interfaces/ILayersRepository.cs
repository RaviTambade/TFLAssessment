namespace backend.Repositories.Interfaces
{
    public interface ILayersRepository
    {
        
        Task<List<LayerDto>> GetLayersAsync(long languageId);
       
    }
}