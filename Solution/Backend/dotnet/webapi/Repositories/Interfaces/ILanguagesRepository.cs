namespace backend.Repositories.Interfaces
{
    public interface ILanguagesRepository
    {
        
        Task<List<LanguageDto>> GetLanguagesAsync(long runtimeId);
      
    }
}