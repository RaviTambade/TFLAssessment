using Microsoft.EntityFrameworkCore;
namespace US_Admin_01.Data;

public class AppDbContext : DbContext

{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<UserLog> UserLogs { get; set; }
    public DbSet<UserRole> UserRoles { get; set; }
    public DbSet<PersonalInformation> PersonalInformations { get; set; }

    public DbSet<Assessment> Assessments { get; set; }
    public DbSet<Test> Tests { get; set; }
    public DbSet<StudentAssessmentResult> StudentAssessmentResults { get; set; }

    
}

