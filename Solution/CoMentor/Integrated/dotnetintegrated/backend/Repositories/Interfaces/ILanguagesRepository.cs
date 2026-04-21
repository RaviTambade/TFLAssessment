namespace backend.Repositories.Interfaces
{
    public interface ILanguagesRepository
    {
        
        Task<List<LanguageDto>> GetLanguages(long runtimeId);
      
    }
}