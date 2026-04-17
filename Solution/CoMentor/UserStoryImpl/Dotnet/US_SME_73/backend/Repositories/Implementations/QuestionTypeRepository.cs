using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Repositories.Interfaces;

namespace backend.Repositories.Implementations;
public class QuestionTypeRepository : IQuestionTypeRepository
{
    private readonly AppDbContext _context;

    public QuestionTypeRepository(AppDbContext context)
    {
        _context = context;
    }
    public async Task<List<string>> GetQuestionTypesAsync()
    {
        return await _context.Questions
            .Select(q => q.QuestionType)   // SELECT question_type
            .Distinct()                   // remove duplicates
            .ToListAsync();
    }
}