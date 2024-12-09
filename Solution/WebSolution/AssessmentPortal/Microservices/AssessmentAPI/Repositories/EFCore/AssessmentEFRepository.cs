using System.Collections.Generic;
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

        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeById(int userId)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(e => e.UserId == userId);
            return employee;
        }

        public async Task<List<Subject>> GetAllSubjects()
        {
            var subjects = await _context.Subjects.ToListAsync();
            return subjects;
        }

        public async Task<List<EvaluationCriteria>> GetEvalutionCriterias()
        {
            var criterias = await _context.EvaluationCriterias.ToListAsync();
            return criterias;
        }
        
    }
}
