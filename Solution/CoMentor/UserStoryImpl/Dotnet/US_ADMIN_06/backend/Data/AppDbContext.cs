using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Assessment> Assessments => Set<Assessment>();
    public DbSet<Test> Tests => Set<Test>();
    public DbSet<PersonalInformation> PersonalInformations => Set<PersonalInformation>();
    public DbSet<StudentAssessmentResult> StudentAssessmentResults => Set<StudentAssessmentResult>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // ========================
        // Assessment
        // ========================
        modelBuilder.Entity<Assessment>().ToTable("assessments");
        modelBuilder.Entity<Assessment>().HasKey(a => a.Id);

        modelBuilder.Entity<Assessment>().Property(a => a.Id).HasColumnName("id");
        modelBuilder.Entity<Assessment>().Property(a => a.TestId).HasColumnName("test_id");
        modelBuilder.Entity<Assessment>().Property(a => a.StudentId).HasColumnName("student_id");
        modelBuilder.Entity<Assessment>().Property(a => a.Status).HasColumnName("status");

        // ========================
        // Test
        // ========================
        modelBuilder.Entity<Test>().ToTable("tests");
        modelBuilder.Entity<Test>().HasKey(t => t.Id);

        modelBuilder.Entity<Test>().Property(t => t.Id).HasColumnName("id");
        modelBuilder.Entity<Test>().Property(t => t.Title).HasColumnName("title");

        // ========================
        // Personal Info
        // ========================
        modelBuilder.Entity<PersonalInformation>().ToTable("personal_informations");
        modelBuilder.Entity<PersonalInformation>().HasKey(p => p.Id);

        modelBuilder.Entity<PersonalInformation>().Property(p => p.Id).HasColumnName("id");
        modelBuilder.Entity<PersonalInformation>().Property(p => p.UserId).HasColumnName("user_id");
        modelBuilder.Entity<PersonalInformation>().Property(p => p.FullName).HasColumnName("full_name");

        // ========================
        // Result
        // ========================
        modelBuilder.Entity<StudentAssessmentResult>().ToTable("student_assessment_results");
        modelBuilder.Entity<StudentAssessmentResult>().HasKey(s => s.Id);

        modelBuilder.Entity<StudentAssessmentResult>().Property(s => s.Id).HasColumnName("id");
        modelBuilder.Entity<StudentAssessmentResult>().Property(s => s.StudentId).HasColumnName("student_id");
        modelBuilder.Entity<StudentAssessmentResult>().Property(s => s.AssessmentId).HasColumnName("assessment_id");
        modelBuilder.Entity<StudentAssessmentResult>().Property(s => s.Score).HasColumnName("score");
        modelBuilder.Entity<StudentAssessmentResult>().Property(s => s.Percentile).HasColumnName("percentile");
        modelBuilder.Entity<StudentAssessmentResult>().Property(s => s.TimeTakenMinutes).HasColumnName("time_taken_minutes");
    }
}