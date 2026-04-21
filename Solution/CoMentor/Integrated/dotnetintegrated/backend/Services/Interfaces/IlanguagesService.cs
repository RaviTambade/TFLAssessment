

namespace backend.Services.Interfaces
{
    public interface ILanguagesService
    {
       
        Task<List<LanguageDto>> GetLanguages(long runtimeId);
        
    }
}