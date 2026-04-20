using Microsoft.EntityFrameworkCore;

namespace AssessmentAnswer.Data
{
    public class AppDbContext : DbContext
    {
        // 1. Constructor: Pass settings (like connection strings) to the base class
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // 2. Register your Tables (DbSets)
        // These names must match your SQL table names or be mapped properl
        
        // Even if you haven't created the table for individual answers yet, 
        // you need a DbSet for the StudentAnswer entity to save data to it.
        public DbSet<StudentAnswer> StudentAnswers { get; set; } = null!;


        // 3. Optional: Configure Table Mappings
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // If your SQL table name is different from your Class name, map it here:
            modelBuilder.Entity<StudentAssessmentResult>().ToTable("studentassessmentanswers");
            
            // This ensures EF knows 'id' is the primary key and auto-increments
            modelBuilder.Entity<StudentAssessmentResult>()
                .HasKey(s => s.Id);
        }
    }
}