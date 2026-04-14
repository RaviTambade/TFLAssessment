using Microsoft.EntityFrameworkCore;

public partial class TflDbContext : DbContext
{
    public TflDbContext()
    {
    }

    public TflDbContext(DbContextOptions<TflDbContext> options)
        : base(options)
    {
    }
    public virtual DbSet<AssessmentStats> AssessmentStats { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AssessmentStats>().HasNoKey();
    }
}