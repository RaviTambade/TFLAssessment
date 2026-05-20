using System;
using System.Collections.Generic;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace backend.Models;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AcademicInformation> AcademicInformations { get; set; }

    public virtual DbSet<Alumnus> Alumni { get; set; }

    public virtual DbSet<Assessment> Assessments { get; set; }

    public virtual DbSet<Company> Companies { get; set; }
     public virtual DbSet<HandsOn> HandsOns { get; set; }

    public virtual DbSet<HandsOnResult> HandsOnResults { get; set; }

    public virtual DbSet<HandsOnSubmission> HandsOnSubmissions { get; set; }

    public virtual DbSet<Interview> Interviews { get; set; }

    public virtual DbSet<JobApplication> JobApplications { get; set; }

    public virtual DbSet<JobDescription> JobDescriptions { get; set; }
 
    public virtual DbSet<LearningPath> LearningPaths { get; set; }

    public virtual DbSet<LearningPathProgress> LearningPathProgresses { get; set; }

    public virtual DbSet<LearningResource> LearningResources { get; set; }

    public virtual DbSet<McqOption> McqOptions { get; set; }

    public virtual DbSet<MentorAppointment> MentorAppointments { get; set; }

    public virtual DbSet<MentorCounseling> MentorCounselings { get; set; }

    public virtual DbSet<MentorFeedback> MentorFeedbacks { get; set; }

    // public virtual DbSet<MentorMentee> MentorMentees { get; set; }

    public virtual DbSet<Notification> Notifications { get; set; }

    public virtual DbSet<NotificationCategory> NotificationCategories { get; set; }

    public virtual DbSet<OralAssessment> OralAssessments { get; set; }

    public virtual DbSet<OralQuestionAnswer> OralQuestionAnswers { get; set; }

    public virtual DbSet<PerformanceSnapshot> PerformanceSnapshots { get; set; }

    public virtual DbSet<PersonalInformation> PersonalInformations { get; set; }

    public virtual DbSet<ProblemStatement> ProblemStatements { get; set; }

    public virtual DbSet<ProblemStatementAnswer> ProblemStatementAnswers { get; set; }

    public virtual DbSet<ProfessionalInformation> ProfessionalInformations { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<ProjectMember> ProjectMembers { get; set; }

    public virtual DbSet<Question> Questions { get; set; }
 
    public virtual DbSet<Referral> Referrals { get; set; }

    public virtual DbSet<Role> Roles { get; set; }
     public virtual DbSet<ShortlistedCandidate> ShortlistedCandidates { get; set; }
     public virtual DbSet<StudentAssessmentResult> StudentAssessmentResults { get; set; }

    public virtual DbSet<StudentConceptProgress> StudentConceptProgresses { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    public virtual DbSet<TestQuestion> TestQuestions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserLog> UserLogs { get; set; }

    public virtual DbSet<UserRole> UserRoles { get; set; }

    public virtual DbSet<StudentAnswer> StudentAnswers { get; set; }

    public DbSet<AssessmentQuestions> AssessmentQuestionResults { get; set; }
    public DbSet<AssessmentReports> StudentAssessmentReports { get; set; }

    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;database=tflcomentor_db;user=root;password=password", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.4.4-mysql"));

       partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
