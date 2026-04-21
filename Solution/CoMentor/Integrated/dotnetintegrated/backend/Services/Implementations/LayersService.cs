

using backend.Repositories.Interfaces;

namespace backend.Services
{
    public class LayersService : Interfaces.ILayersService
    {
        private readonly ILayersRepository _repo;

        public LayersService(ILayersRepository repo)
        {
            _repo = repo;
        }

        

        

        public Task<List<LayerDto>> GetLayers(long languageId)
            => _repo.GetLayers(languageId);

       
    }
}