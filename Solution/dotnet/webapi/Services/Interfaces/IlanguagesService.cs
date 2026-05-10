

namespace backend.Services.Interfaces
{
    public interface ILanguagesService
    {
       
        Task<List<LanguageDto>> GetLanguagesAsync(long runtimeId);
        
    }
}