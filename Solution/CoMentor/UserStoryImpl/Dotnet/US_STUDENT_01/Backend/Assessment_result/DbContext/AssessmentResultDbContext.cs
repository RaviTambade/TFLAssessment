using Microsoft.EntityFrameworkCore;
using Assessment_result.Models;
using Microsoft.AspNetCore.Components;

namespace Assessment_result.Data
{

    public class AssessmentResultDbContext : DbContext
    {
        public AssessmentResultDbContext(DbContextOptions<AssessmentResultDbContext> options)
            : base(options)
        {
            
        }

        // ✅ Real tables (only if you need them elsewhere)
        public DbSet<AssessmentAnswer> AssessmentAnswers { get; set; }

        // If you don't have entity for mcq_option, you can skip DbSet
        // Same for assessment_result

        // ❗ IMPORTANT: For raw SQL DTO
        public DbSet<AssessmentReportDto> JoinedResults { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ✅ Map actual tables (if names differ in MySQL)
            modelBuilder.Entity<AssessmentAnswer>()
                .ToTable("studentanswer");

            // ❗ VERY IMPORTANT: Joined DTO has NO table
            modelBuilder.Entity<AssessmentReportDto>()
                .HasNoKey()      // no primary key
                .ToView(null);   // not mapped to any table
        }
    }
}