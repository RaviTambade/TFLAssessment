using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Repositories
{
    public class LayersRepository : Interfaces.ILayersRepository
    {
        private readonly AppDbContext _context;

        public LayersRepository(AppDbContext context)
        {
            _context = context;
        }

<<<<<<< HEAD
=======
        
>>>>>>> 9db25447bf6545f66a1ebd91a8c5fe7abddb966e
    public async Task<List<LayerDto>> GetLayersAsync(long languageId)
{
    return await _context.Layers
        .Select(l => new LayerDto
        {
            Id = l.Id,
            Name = l.Layers,

            Frameworks = _context.Frameworks
                .Where(f =>
                    f.LayerId == l.Id &&
                    (
                        f.LanguageId == languageId ||
                        f.LayerId == 3 ||
                        f.LayerId == 4 ||
                        f.LayerId == 5
                    )
                )
                .Select(f => new FrameworkDto
                {
                    Id = f.Id,
                    Name = f.Name
                }).ToList()
        })
        .ToListAsync();
}
}
}