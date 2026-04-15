using Microsoft.EntityFrameworkCore;
using AssessmentQuestions.DTOs;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // This allows EF to recognize the DTO for raw SQL queries
    public DbSet<AssessmentQuestionDto> AssessmentQuestionResults { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AssessmentQuestionDto>(entity =>
        {
            entity.HasNoKey(); // DTOs don't have Primary Keys
            entity.ToView(null); // Tells EF there is no physical table for this
        });
    }
}