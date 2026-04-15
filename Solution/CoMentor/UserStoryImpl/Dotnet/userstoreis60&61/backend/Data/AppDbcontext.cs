using Microsoft.EntityFrameworkCore;
using backend.DTO;

namespace backend.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<StudentResult> StudentResults { get; set; }

        // ✅ ADD THIS
        public DbSet<StudentResultDto> StudentResultDtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentResult>().ToTable("student_assessment_results");

            // ✅ IMPORTANT
            modelBuilder.Entity<StudentResultDto>().HasNoKey();
        }
    }
}