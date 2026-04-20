using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AssessmentAnswer.Data;
using AssessmentAnswer.Repositories.Interfaces;

namespace AssessmentAnswer.Repositories.Implementations
{
    public class AssessmentRepository : IAssessmentRepository
    {
        private readonly AppDbContext _context;

        public AssessmentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<bool> SaveAssessmentAnswersAsync( List<StudentAnswer>? answers)
        {
            if (answers != null && answers.Any())
            {
                await _context.StudentAnswers.AddRangeAsync(answers);
            }
            
            // 3. Save everything to the database
            var rowsAffected = await _context.SaveChangesAsync();

            return rowsAffected > 0;
        }
    }
}