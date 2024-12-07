using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Repositories
{
    public class AssessmentEFRepository : IAssessmentRepository
    {
        private readonly AssessmentDbContext _context;

        public AssessmentEFRepository(AssessmentDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<Assessment> GetDetails(int assessmentId)
        {
            return await _context.Tests
                .Where(t => t.Id == assessmentId)
                .Select(t => new Assessment
                {
                    Id = t.Id,
                    TestName = t.Name,
                    SubjectExpertId = t.Smeid,
                    SubjectId = t.SubjectId,
                    ScheduledDate = t.ScheduledDate,
                    Status = t.Status,
                    PassingLevel = t.PassingLevel,
                    FirstName = t.Employee.FirstName,
                    LastName = t.Employee.LastName
                })
                .FirstOrDefaultAsync();
        }
    }
}