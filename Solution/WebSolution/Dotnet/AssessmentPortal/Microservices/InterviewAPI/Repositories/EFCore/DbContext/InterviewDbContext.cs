using Transflower.TFLAssessment.Entities;
using Microsoft.EntityFrameworkCore;

namespace Transflower.TFLAssessment.Data
{
    public class TFLAssessmentDbContext : DbContext
    {
        public TFLAssessmentDbContext(DbContextOptions<TFLAssessmentDbContext> options) : base(options) { }

        public DbSet<Interview> Interviews { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<SubjectMatterExpert> SubjectMatterExperts { get; set; }
        public DbSet<Subject> Subjects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
