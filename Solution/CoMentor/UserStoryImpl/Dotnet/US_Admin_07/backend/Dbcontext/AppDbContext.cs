using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<StudentAssessmentResult> StudentAssessmentResults { get; set; }

    public DbSet<Assessment> Assessments { get; set; }
public DbSet<Test> Tests { get; set; }
public DbSet<User> Users { get; set; }
public DbSet<PersonalInformation> PersonalInformations { get; set; }
}