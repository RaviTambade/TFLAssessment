using Microsoft.EntityFrameworkCore;

namespace Transflower.TFLAssessment.Repositories
{
    public class AssessmentDbContext : AssessmentDbContext
    {
    public AssessmentDbContext(DbContextOptions<AssessmentDbContext> options):base (options)
    {

    }
    public DbSet<Tests> Tests {get; set;}
    public DbSet<Employees> Employees {get; set;}
    public DbSet<Subjects> Subjects {get; set;}

      protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Tests>()
            .HasOne(t => t.Employees)
            .WithMany()
            .HasForeignKey(t => t.SmeId);
        }

    }
}