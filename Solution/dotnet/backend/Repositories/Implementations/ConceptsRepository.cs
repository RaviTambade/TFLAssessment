
using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Repositories
{
    public class ConceptsRepository : Interfaces.IConceptsRepository
    {
        private readonly AppDbContext _context;

        public ConceptsRepository(AppDbContext context)
        {
            _context = context;
        }

        




    public async Task<List<ConceptDto>> GetConceptsAsync(List<long> frameworkIds)
        {
            return await _context.FrameworkConcepts
                .Where(x => frameworkIds.Contains(x.FrameworkId ?? 0))
                .Select(x => new ConceptDto
                {
                    Id = x.Concept!.Id,
                    Name = x.Concept!.Name
                })
                .Distinct()
                .ToListAsync();
        }

    
    }
}