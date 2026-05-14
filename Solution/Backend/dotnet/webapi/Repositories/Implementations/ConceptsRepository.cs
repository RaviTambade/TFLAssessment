using backend.DTO.Requests;
using backend.DTO.Responses;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Repositories.Interfaces
{
    public class ConceptsRepository : IConceptsRepository
    {
        private readonly AppDbContext _context;

        public ConceptsRepository(AppDbContext context)
        {
            _context = context;
        }

        




    public async Task<List<Concepts>> GetConceptsAsync(List<long> frameworkIds)
        {
            if (frameworkIds == null || frameworkIds.Count == 0)
            {
                return await _context.Concepts
                    .Select(x => new Concepts
                    {
                        Id = x.Id,
                        Name = x.Name
                    })
                    .Distinct()
                    .ToListAsync();
            }

            return await _context.FrameworkConcepts
                .Where(x => frameworkIds.Contains(x.FrameworkId ?? 0))
                .Select(x => new Concepts
                {
                    Id = x.Concept!.Id,
                    Name = x.Concept!.Name
                })
                .Distinct()
                .ToListAsync();
        }

    
    }
}
