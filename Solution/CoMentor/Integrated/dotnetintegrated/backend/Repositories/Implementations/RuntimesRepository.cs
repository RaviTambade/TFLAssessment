using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.DTOs;

namespace backend.Repositories
{
    public class RuntimesRepository : Interfaces.IRuntimesRepository
    {
        private readonly AppDbContext _context;

        public RuntimesRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<RuntimeDto>> GetRuntimes()
        {
            return await _context.Runtimes
                .Select(x => new RuntimeDto
                {
                    Id = x.Id,
                    Name = x.RuntimeName
                })
                .ToListAsync();
        }

    
}
}