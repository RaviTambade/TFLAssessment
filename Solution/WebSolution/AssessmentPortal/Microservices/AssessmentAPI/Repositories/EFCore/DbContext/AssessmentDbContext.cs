using Microsoft.EntityFrameworkCore;
using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories
{
    public class AssessmentDbContext : DbContext
    {
        public AssessmentDbContext(DbContextOptions<AssessmentDbContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Subject> Subjects { get; set; }


    }
}
