
using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Repositories
{
    public class LanguagesRepository : Interfaces.ILanguagesRepository
    {
        private readonly AppDbContext _context;

        public LanguagesRepository(AppDbContext context)
        {
            _context = context;
        }

        

    public async Task<List<LanguageDto>> GetLanguages(long runtimeId)
        {
            return await _context.Languages
        .Where(x => x.RuntimeId == runtimeId)
                .Select(x => new LanguageDto
                {
                    Id = x.Id,
                    Name = x.Language1
                })
                .ToListAsync();
        }

    
    }
}