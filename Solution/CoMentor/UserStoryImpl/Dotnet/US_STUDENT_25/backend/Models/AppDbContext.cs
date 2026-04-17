using System;
using System.Collections.Generic;
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

    public virtual DbSet<Concept> Concepts { get; set; }

    public virtual DbSet<Framework> Frameworks { get; set; }

    public virtual DbSet<FrameworkConcept> FrameworkConcepts { get; set; }

    public virtual DbSet<HandsOnResult> HandsOnResults { get; set; }

    public virtual DbSet<HandsOnSubmission> HandsOnSubmissions { get; set; }

    public virtual DbSet<Interview> Interviews { get; set; }

    public virtual DbSet<JobApplication> JobApplications { get; set; }

    public virtual DbSet<JobDescription> JobDescriptions { get; set; }

    public virtual DbSet<Language> Languages { get; set; }

    public virtual DbSet<Layer> Layers { get; set; }

    public virtual DbSet<LearningPath> LearningPaths { get; set; }

    public virtual DbSet<LearningPathProgress> LearningPathProgresses { get; set; }

    public virtual DbSet<LearningResource> LearningResources { get; set; }

    public virtual DbSet<McqOption> McqOptions { get; set; }

    public virtual DbSet<MentorAppointment> MentorAppointments { get; set; }

    public virtual DbSet<MentorCounseling> MentorCounselings { get; set; }

    public virtual DbSet<MentorFeedback> MentorFeedbacks { get; set; }

    public virtual DbSet<MentorMentee> MentorMentees { get; set; }

    public virtual DbSet<Notification> Notifications { get; set; }

    public virtual DbSet<NotificationCategory> NotificationCategories { get; set; }

    public virtual DbSet<OralAssessment> OralAssessments { get; set; }

    public virtual DbSet<OralQuestionAnswer> OralQuestionAnswers { get; set; }

    public virtual DbSet<PerformanceSnapshot> PerformanceSnapshots { get; set; }

    public virtual DbSet<PersonalInformation> PersonalInformations { get; set; }

    public virtual DbSet<ProblemStatementAnswer> ProblemStatementAnswers { get; set; }

    public virtual DbSet<ProfessionalInformation> ProfessionalInformations { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<ProjectMember> ProjectMembers { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<QuestionFrameworkConcept> QuestionFrameworkConcepts { get; set; }

    public virtual DbSet<Referral> Referrals { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Runtime> Runtimes { get; set; }

    public virtual DbSet<ShortlistedCandidate> ShortlistedCandidates { get; set; }

    public virtual DbSet<SmeRuntime> SmeRuntimes { get; set; }

    public virtual DbSet<StudentAssessmentResult> StudentAssessmentResults { get; set; }

    public virtual DbSet<StudentConceptProgress> StudentConceptProgresses { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    public virtual DbSet<TestQuestion> TestQuestions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserLog> UserLogs { get; set; }

    public virtual DbSet<UserRole> UserRoles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;database=tflcomentor_db;user=root;password=password", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.32-mariadb"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("latin1_swedish_ci")
            .HasCharSet("latin1");

        modelBuilder.Entity<AcademicInformation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("academic_informations")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CollegeName)
                .HasMaxLength(255)
                .HasColumnName("college_name");
            entity.Property(e => e.EnrollmentYear)
                .HasColumnType("bigint(20)")
                .HasColumnName("enrollment_year");
            entity.Property(e => e.PassingYear)
                .HasColumnType("bigint(20)")
                .HasColumnName("passing_year");
            entity.Property(e => e.Percentage)
                .HasPrecision(5, 2)
                .HasColumnName("percentage");
            entity.Property(e => e.Specialization)
                .HasMaxLength(100)
                .HasColumnName("specialization");
            entity.Property(e => e.StreamName)
                .HasMaxLength(100)
                .HasColumnName("stream_name");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.AcademicInformations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("academic_informations_ibfk_1");
        });

        modelBuilder.Entity<Alumnus>(entity =>
        {
            entity.HasKey(e => e.AlumniId).HasName("PRIMARY");

            entity
                .ToTable("alumni")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.CompaniesId, "companies_id");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.AlumniId)
                .HasColumnType("bigint(20)")
                .HasColumnName("alumni_id");
            entity.Property(e => e.AddedAt)
                .HasColumnType("datetime")
                .HasColumnName("added_at");
            entity.Property(e => e.CompaniesId)
                .HasColumnType("bigint(20)")
                .HasColumnName("companies_id");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Companies).WithMany(p => p.Alumni)
                .HasForeignKey(d => d.CompaniesId)
                .HasConstraintName("alumni_ibfk_1");

            entity.HasOne(d => d.User).WithMany(p => p.Alumni)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("alumni_ibfk_2");
        });

        modelBuilder.Entity<Assessment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("assessments")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.AssignedBy, "fk_assessment_assigned_by");

            entity.HasIndex(e => e.StudentId, "fk_assessment_student");

            entity.HasIndex(e => e.TestId, "fk_assessment_test");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AssignedAt)
                .HasDefaultValueSql("current_timestamp()")
                .HasColumnType("datetime")
                .HasColumnName("assigned_at");
            entity.Property(e => e.AssignedBy)
                .HasColumnType("bigint(20)")
                .HasColumnName("assigned_by");
            entity.Property(e => e.ScheduledAt)
                .HasColumnType("datetime")
                .HasColumnName("scheduled_at");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'Pending'")
                .HasColumnType("enum('Assigned','Pending','Completed')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");
            entity.Property(e => e.TestId)
                .HasColumnType("bigint(20)")
                .HasColumnName("test_id");

            entity.HasOne(d => d.AssignedByNavigation).WithMany(p => p.AssessmentAssignedByNavigations)
                .HasForeignKey(d => d.AssignedBy)
                .HasConstraintName("fk_assessment_assigned_by");

            entity.HasOne(d => d.Student).WithMany(p => p.AssessmentStudents)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_assessment_student");

            entity.HasOne(d => d.Test).WithMany(p => p.Assessments)
                .HasForeignKey(d => d.TestId)
                .HasConstraintName("fk_assessment_test");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("companies")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .HasColumnName("company_name");
            entity.Property(e => e.CompanySize)
                .HasMaxLength(100)
                .HasColumnName("company_size");
            entity.Property(e => e.CompanyType)
                .HasColumnType("enum('STARTUP','PRODUCT','SERVICE')")
                .HasColumnName("company_type");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Industry)
                .HasMaxLength(100)
                .HasColumnName("industry");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .HasColumnName("website");
        });

        modelBuilder.Entity<Concept>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("concepts")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .HasColumnName("status");
        });

        modelBuilder.Entity<Framework>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("frameworks")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.LanguageId, "language_id");

            entity.HasIndex(e => e.LayerId, "layer_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.LanguageId)
                .HasColumnType("bigint(20)")
                .HasColumnName("language_id");
            entity.Property(e => e.LayerId)
                .HasColumnType("bigint(20)")
                .HasColumnName("layer_id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");

            entity.HasOne(d => d.Language).WithMany(p => p.Frameworks)
                .HasForeignKey(d => d.LanguageId)
                .HasConstraintName("frameworks_ibfk_2");

            entity.HasOne(d => d.Layer).WithMany(p => p.Frameworks)
                .HasForeignKey(d => d.LayerId)
                .HasConstraintName("frameworks_ibfk_1");
        });

        modelBuilder.Entity<FrameworkConcept>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("framework_concepts")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.ConceptId, "concept_id");

            entity.HasIndex(e => e.FrameworkId, "framework_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.ConceptId)
                .HasColumnType("bigint(20)")
                .HasColumnName("concept_id");
            entity.Property(e => e.FrameworkId)
                .HasColumnType("bigint(20)")
                .HasColumnName("framework_id");

            entity.HasOne(d => d.Concept).WithMany(p => p.FrameworkConcepts)
                .HasForeignKey(d => d.ConceptId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("framework_concepts_ibfk_2");

            entity.HasOne(d => d.Framework).WithMany(p => p.FrameworkConcepts)
                .HasForeignKey(d => d.FrameworkId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("framework_concepts_ibfk_1");
        });

        modelBuilder.Entity<HandsOnResult>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("hands_on_results")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.HasIndex(e => e.SmeId, "sme_id");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");
            entity.Property(e => e.Score)
                .HasColumnType("bigint(20)")
                .HasColumnName("score");
            entity.Property(e => e.SmeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("sme_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Question).WithMany(p => p.HandsOnResults)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("fk_question_results");

            entity.HasOne(d => d.Sme).WithMany(p => p.HandsOnResultSmes)
                .HasForeignKey(d => d.SmeId)
                .HasConstraintName("hands_on_results_ibfk_3");

            entity.HasOne(d => d.User).WithMany(p => p.HandsOnResultUsers)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("hands_on_results_ibfk_1");
        });

        modelBuilder.Entity<HandsOnSubmission>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("hands_on_submissions")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.GithubLink)
                .HasMaxLength(255)
                .HasColumnName("github_link");
            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");
            entity.Property(e => e.SubmittedAt)
                .HasColumnType("datetime")
                .HasColumnName("submitted_at");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Question).WithMany(p => p.HandsOnSubmissions)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("fk_question_submissions");

            entity.HasOne(d => d.User).WithMany(p => p.HandsOnSubmissions)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("hands_on_submissions_ibfk_2");
        });

        modelBuilder.Entity<Interview>(entity =>
        {
            entity.HasKey(e => e.InterviewId).HasName("PRIMARY");

            entity
                .ToTable("interviews")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.ApplicationId, "fk_interview_application");

            entity.Property(e => e.InterviewId)
                .HasColumnType("bigint(20)")
                .HasColumnName("interview_id");
            entity.Property(e => e.ApplicationId)
                .HasColumnType("bigint(20)")
                .HasColumnName("application_id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Mode)
                .HasMaxLength(50)
                .HasColumnName("mode");
            entity.Property(e => e.Outcome)
                .HasMaxLength(100)
                .HasColumnName("outcome");
            entity.Property(e => e.Remark)
                .HasColumnType("text")
                .HasColumnName("remark");
            entity.Property(e => e.RescheduledAt)
                .HasColumnType("datetime")
                .HasColumnName("rescheduled_at");
            entity.Property(e => e.ScheduledAt)
                .HasColumnType("datetime")
                .HasColumnName("scheduled_at");
            entity.Property(e => e.Status).HasColumnName("status");

            entity.HasOne(d => d.Application).WithMany(p => p.Interviews)
                .HasForeignKey(d => d.ApplicationId)
                .HasConstraintName("fk_interview_application");
        });

        modelBuilder.Entity<JobApplication>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("job_applications")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.JobId, "fk_app_job");

            entity.HasIndex(e => e.StudentId, "fk_app_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AppliedAt)
                .HasColumnType("datetime")
                .HasColumnName("applied_at");
            entity.Property(e => e.JobId)
                .HasColumnType("bigint(20)")
                .HasColumnName("job_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");

            entity.HasOne(d => d.Job).WithMany(p => p.JobApplications)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("fk_app_job");

            entity.HasOne(d => d.Student).WithMany(p => p.JobApplications)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_app_student");
        });

        modelBuilder.Entity<JobDescription>(entity =>
        {
            entity.HasKey(e => e.JobId).HasName("PRIMARY");

            entity
                .ToTable("job_descriptions")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.EmployerId, "fk_job_employer");

            entity.Property(e => e.JobId)
                .HasColumnType("bigint(20)")
                .HasColumnName("job_id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.EmployerId)
                .HasColumnType("bigint(20)")
                .HasColumnName("employer_id");
            entity.Property(e => e.JobType)
                .HasMaxLength(50)
                .HasColumnName("job_type");
            entity.Property(e => e.Location)
                .HasMaxLength(100)
                .HasColumnName("location");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");

            entity.HasOne(d => d.Employer).WithMany(p => p.JobDescriptions)
                .HasForeignKey(d => d.EmployerId)
                .HasConstraintName("fk_job_employer");
        });

        modelBuilder.Entity<Language>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("languages")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.RuntimeId, "runtime_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Language1)
                .HasMaxLength(100)
                .HasColumnName("language");
            entity.Property(e => e.RuntimeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("runtime_id");

            entity.HasOne(d => d.Runtime).WithMany(p => p.Languages)
                .HasForeignKey(d => d.RuntimeId)
                .HasConstraintName("languages_ibfk_1");
        });

        modelBuilder.Entity<Layer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("layers")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Layers)
                .HasMaxLength(50)
                .HasColumnName("layers");
        });

        modelBuilder.Entity<LearningPath>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("learning_paths")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.MentorId, "fk_learningpath_mentor");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Duration)
                .HasColumnType("int(11)")
                .HasColumnName("duration");
            entity.Property(e => e.MentorId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentor_id");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'1'")
                .HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(200)
                .HasColumnName("title");
            entity.Property(e => e.TotalModules)
                .HasColumnType("int(11)")
                .HasColumnName("total_modules");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");

            entity.HasOne(d => d.Mentor).WithMany(p => p.LearningPaths)
                .HasForeignKey(d => d.MentorId)
                .HasConstraintName("fk_learningpath_mentor");
        });

        modelBuilder.Entity<LearningPathProgress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("learning_path_progress")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.LearningPathId, "fk_progress_path");

            entity.HasIndex(e => new { e.StudentId, e.LearningPathId }, "student_id").IsUnique();

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AveragePercentage)
                .HasPrecision(6, 2)
                .HasColumnName("average_percentage");
            entity.Property(e => e.ImprovementRate)
                .HasPrecision(5, 2)
                .HasColumnName("improvement_rate");
            entity.Property(e => e.LearningPathId)
                .HasColumnType("bigint(20)")
                .HasColumnName("learning_path_id");
            entity.Property(e => e.MaxScore)
                .HasColumnType("int(11)")
                .HasColumnName("max_score");
            entity.Property(e => e.MinScore)
                .HasColumnType("int(11)")
                .HasColumnName("min_score");
            entity.Property(e => e.OverallScore)
                .HasPrecision(6, 2)
                .HasColumnName("overall_score");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");

            entity.HasOne(d => d.LearningPath).WithMany(p => p.LearningPathProgresses)
                .HasForeignKey(d => d.LearningPathId)
                .HasConstraintName("fk_progress_path");

            entity.HasOne(d => d.Student).WithMany(p => p.LearningPathProgresses)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_progress_student");
        });

        modelBuilder.Entity<LearningResource>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("learning_resources")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.UploadedBy, "fk_resource_user");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.ResourceUrl)
                .HasMaxLength(255)
                .HasColumnName("resource_url");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'ACTIVE'")
                .HasColumnType("enum('ACTIVE','INACTIVE','ARCHIVED')")
                .HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.Type)
                .HasColumnType("enum('VIDEO','DOC','LINK')")
                .HasColumnName("type");
            entity.Property(e => e.UploadedBy)
                .HasColumnType("bigint(20)")
                .HasColumnName("uploaded_by");

            entity.HasOne(d => d.UploadedByNavigation).WithMany(p => p.LearningResources)
                .HasForeignKey(d => d.UploadedBy)
                .HasConstraintName("fk_resource_user");
        });

        modelBuilder.Entity<McqOption>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("mcq_options")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CorrectAnswer)
                .HasMaxLength(10)
                .HasColumnName("correct_answer");
            entity.Property(e => e.OptionA)
                .HasMaxLength(255)
                .HasColumnName("option_a");
            entity.Property(e => e.OptionB)
                .HasMaxLength(255)
                .HasColumnName("option_b");
            entity.Property(e => e.OptionC)
                .HasMaxLength(255)
                .HasColumnName("option_c");
            entity.Property(e => e.OptionD)
                .HasMaxLength(255)
                .HasColumnName("option_d");
            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");

            entity.HasOne(d => d.Question).WithMany(p => p.McqOptions)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("mcq_options_ibfk_1");
        });

        modelBuilder.Entity<MentorAppointment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("mentor_appointments")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.MentorId, "fk_appointment_mentor");

            entity.HasIndex(e => e.StudentId, "fk_appointment_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Agenda)
                .HasColumnType("text")
                .HasColumnName("agenda");
            entity.Property(e => e.AppointmentDate).HasColumnName("appointment_date");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.MeetingLink)
                .HasMaxLength(255)
                .HasColumnName("meeting_link");
            entity.Property(e => e.MentorId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentor_id");
            entity.Property(e => e.StartTime)
                .HasColumnType("time")
                .HasColumnName("start_time");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'SCHEDULED'")
                .HasColumnType("enum('SCHEDULED','CANCELLED','COMPLETED')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");

            entity.HasOne(d => d.Mentor).WithMany(p => p.MentorAppointmentMentors)
                .HasForeignKey(d => d.MentorId)
                .HasConstraintName("fk_appointment_mentor");

            entity.HasOne(d => d.Student).WithMany(p => p.MentorAppointmentStudents)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_appointment_student");
        });

        modelBuilder.Entity<MentorCounseling>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("mentor_counselings")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.MenteeId, "fk_counseling_mentee");

            entity.HasIndex(e => e.MentorId, "fk_counseling_mentor");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CounselingDate)
                .HasColumnType("datetime")
                .HasColumnName("counseling_date");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.MeetingLink)
                .HasMaxLength(255)
                .HasColumnName("meeting_link");
            entity.Property(e => e.MenteeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentee_id");
            entity.Property(e => e.MentorId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentor_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.Subject)
                .HasMaxLength(100)
                .HasColumnName("subject");

            entity.HasOne(d => d.Mentee).WithMany(p => p.MentorCounselingMentees)
                .HasForeignKey(d => d.MenteeId)
                .HasConstraintName("fk_counseling_mentee");

            entity.HasOne(d => d.Mentor).WithMany(p => p.MentorCounselingMentors)
                .HasForeignKey(d => d.MentorId)
                .HasConstraintName("fk_counseling_mentor");
        });

        modelBuilder.Entity<MentorFeedback>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("mentor_feedbacks")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.MentorId, "fk_feedback_mentor");

            entity.HasIndex(e => e.StudentId, "fk_feedback_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.MentorId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentor_id");
            entity.Property(e => e.Rating)
                .HasColumnType("int(11)")
                .HasColumnName("rating");
            entity.Property(e => e.ReviewText)
                .HasColumnType("text")
                .HasColumnName("review_text");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");

            entity.HasOne(d => d.Mentor).WithMany(p => p.MentorFeedbackMentors)
                .HasForeignKey(d => d.MentorId)
                .HasConstraintName("fk_feedback_mentor");

            entity.HasOne(d => d.Student).WithMany(p => p.MentorFeedbackStudents)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_feedback_student");
        });

        modelBuilder.Entity<MentorMentee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("mentor_mentees")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.MenteeId, "mentee_id");

            entity.HasIndex(e => e.MentorId, "mentor_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AssignedOn).HasColumnName("assigned_on");
            entity.Property(e => e.MenteeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentee_id");
            entity.Property(e => e.MentorId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentor_id");

            entity.HasOne(d => d.Mentee).WithMany(p => p.MentorMenteeMentees)
                .HasForeignKey(d => d.MenteeId)
                .HasConstraintName("mentor_mentees_ibfk_2");

            entity.HasOne(d => d.Mentor).WithMany(p => p.MentorMenteeMentors)
                .HasForeignKey(d => d.MentorId)
                .HasConstraintName("mentor_mentees_ibfk_1");
        });

        modelBuilder.Entity<Notification>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("notifications")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.NotificationCategoriesId, "fk_notification_category");

            entity.HasIndex(e => e.UserId, "fk_notification_user");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Message)
                .HasColumnType("text")
                .HasColumnName("message");
            entity.Property(e => e.NotificationCategoriesId)
                .HasColumnType("bigint(20)")
                .HasColumnName("notification_categories_id");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.NotificationCategories).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.NotificationCategoriesId)
                .HasConstraintName("fk_notification_category");

            entity.HasOne(d => d.User).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fk_notification_user");
        });

        modelBuilder.Entity<NotificationCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("notification_categories")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.Category, "category").IsUnique();

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Category)
                .HasMaxLength(100)
                .HasColumnName("category");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
        });

        modelBuilder.Entity<OralAssessment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("oral_assessments")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.ConceptId, "fk_oa_concept");

            entity.HasIndex(e => e.SmeId, "fk_oa_sme");

            entity.HasIndex(e => e.StudentId, "fk_oa_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.ConceptId)
                .HasColumnType("bigint(20)")
                .HasColumnName("concept_id");
            entity.Property(e => e.SmeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("sme_id");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'PENDING'")
                .HasColumnType("enum('PENDING','IN_PROGRESS','COMPLETED')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");
            entity.Property(e => e.TimeScheduleAt)
                .HasColumnType("datetime")
                .HasColumnName("time_schedule_at");

            entity.HasOne(d => d.Concept).WithMany(p => p.OralAssessments)
                .HasForeignKey(d => d.ConceptId)
                .HasConstraintName("fk_oa_concept");

            entity.HasOne(d => d.Sme).WithMany(p => p.OralAssessmentSmes)
                .HasForeignKey(d => d.SmeId)
                .HasConstraintName("fk_oa_sme");

            entity.HasOne(d => d.Student).WithMany(p => p.OralAssessmentStudents)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_oa_student");
        });

        modelBuilder.Entity<OralQuestionAnswer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("oral_question_answers")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.SmeId, "fk_oqa_sme");

            entity.HasIndex(e => e.StudentId, "fk_oqa_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Answer)
                .HasColumnType("text")
                .HasColumnName("answer");
            entity.Property(e => e.Questions)
                .HasColumnType("text")
                .HasColumnName("questions");
            entity.Property(e => e.Rating)
                .HasColumnType("enum('POOR','AVERAGE','GOOD','VERY_GOOD','EXCELLENT')")
                .HasColumnName("rating");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.SmeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("sme_id");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");

            entity.HasOne(d => d.Sme).WithMany(p => p.OralQuestionAnswerSmes)
                .HasForeignKey(d => d.SmeId)
                .HasConstraintName("fk_oqa_sme");

            entity.HasOne(d => d.Student).WithMany(p => p.OralQuestionAnswerStudents)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_oqa_student");
        });

        modelBuilder.Entity<PerformanceSnapshot>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("performance_snapshots")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => new { e.StudentId, e.SnapshotDate }, "student_id").IsUnique();

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.PerformanceJson)
                .HasColumnType("json")
                .HasColumnName("performance_json");
            entity.Property(e => e.SnapshotDate).HasColumnName("snapshot_date");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");

            entity.HasOne(d => d.Student).WithMany(p => p.PerformanceSnapshots)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_snapshot_student");
        });

        modelBuilder.Entity<PersonalInformation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("personal_informations")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.DateOfBirth).HasColumnName("date_of_birth");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.FullName)
                .HasMaxLength(255)
                .HasComputedColumnSql("concat(`first_name`,_utf8mb4' ',`last_name`)", true)
                .HasColumnName("full_name");
            entity.Property(e => e.Gender)
                .HasColumnType("enum('MALE','FEMALE')")
                .HasColumnName("gender");
            entity.Property(e => e.LastName)
                .HasMaxLength(100)
                .HasColumnName("last_name");
            entity.Property(e => e.Pincode)
                .HasMaxLength(10)
                .HasColumnName("pincode");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.PersonalInformations)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("personal_informations_ibfk_1");
        });

        modelBuilder.Entity<ProblemStatementAnswer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("problem_statement_answers")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.QuestionId, "fk_psa_question");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Answer)
                .HasColumnType("text")
                .HasColumnName("answer");
            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");
            entity.Property(e => e.SubmittedAt)
                .HasColumnType("datetime")
                .HasColumnName("submitted_at");

            entity.HasOne(d => d.Question).WithMany(p => p.ProblemStatementAnswers)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("fk_psa_question");
        });

        modelBuilder.Entity<ProfessionalInformation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("professional_informations")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .HasColumnName("company_name");
            entity.Property(e => e.EmploymentType)
                .HasColumnType("enum('FULL_TIME','PART_TIME','INTERNSHIP')")
                .HasColumnName("employment_type");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.ExperienceYears)
                .HasColumnType("bigint(20)")
                .HasColumnName("experience_years");
            entity.Property(e => e.IsCurrentJob).HasColumnName("is_current_job");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(100)
                .HasColumnName("job_title");
            entity.Property(e => e.Location)
                .HasMaxLength(100)
                .HasColumnName("location");
            entity.Property(e => e.Skills)
                .HasColumnType("text")
                .HasColumnName("skills");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.ProfessionalInformations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("professional_informations_ibfk_1");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.ProjectId).HasName("PRIMARY");

            entity
                .ToTable("projects")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.MentorId, "fk_project_mentor");

            entity.Property(e => e.ProjectId)
                .HasColumnType("bigint(20)")
                .HasColumnName("project_id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.MentorId)
                .HasColumnType("bigint(20)")
                .HasColumnName("mentor_id");
            entity.Property(e => e.ProjectName)
                .HasMaxLength(255)
                .HasColumnName("project_name");
            entity.Property(e => e.RepositoryUrl)
                .HasMaxLength(255)
                .HasColumnName("repository_url");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'PENDING'")
                .HasColumnType("enum('IN_PROGRESS','PENDING','COMPLETED')")
                .HasColumnName("status");

            entity.HasOne(d => d.Mentor).WithMany(p => p.Projects)
                .HasForeignKey(d => d.MentorId)
                .HasConstraintName("fk_project_mentor");
        });

        modelBuilder.Entity<ProjectMember>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("project_members")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.ProjectId, "fk_pm_project");

            entity.HasIndex(e => e.StudentId, "fk_pm_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.JoinedDate)
                .HasDefaultValueSql("current_timestamp()")
                .HasColumnType("datetime")
                .HasColumnName("joined_date");
            entity.Property(e => e.ProjectId)
                .HasColumnType("bigint(20)")
                .HasColumnName("project_id");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");

            entity.HasOne(d => d.Project).WithMany(p => p.ProjectMembers)
                .HasForeignKey(d => d.ProjectId)
                .HasConstraintName("fk_pm_project");

            entity.HasOne(d => d.Student).WithMany(p => p.ProjectMembers)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_pm_student");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.QuestionId).HasName("PRIMARY");

            entity
                .ToTable("questions")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.DifficultyLevel)
                .HasColumnType("enum('BEGINNER','INTERMEDIATE','ADVANCE')")
                .HasColumnName("difficulty_level");
            entity.Property(e => e.QuestionType)
                .HasColumnType("enum('MCQ','PROBLEM_STATEMENT','HANDS_ON')")
                .HasColumnName("question_type");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'DRAFT'")
                .HasColumnType("enum('APPROVED','DRAFT','INACTIVE')")
                .HasColumnName("status");
        });

        modelBuilder.Entity<QuestionFrameworkConcept>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("question_framework_concepts")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.FrameworkConceptsId, "framework_concepts_id");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.FrameworkConceptsId)
                .HasColumnType("bigint(20)")
                .HasColumnName("framework_concepts_id");
            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");

            entity.HasOne(d => d.FrameworkConcepts).WithMany(p => p.QuestionFrameworkConcepts)
                .HasForeignKey(d => d.FrameworkConceptsId)
                .HasConstraintName("question_framework_concepts_ibfk_2");

            entity.HasOne(d => d.Question).WithMany(p => p.QuestionFrameworkConcepts)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("question_framework_concepts_ibfk_1");
        });

        modelBuilder.Entity<Referral>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("referrals")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.AlumniId, "alumni_id");

            entity.HasIndex(e => e.CompaniesId, "companies_id");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AlumniId)
                .HasColumnType("bigint(20)")
                .HasColumnName("alumni_id");
            entity.Property(e => e.CompaniesId)
                .HasColumnType("bigint(20)")
                .HasColumnName("companies_id");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Alumni).WithMany(p => p.Referrals)
                .HasForeignKey(d => d.AlumniId)
                .HasConstraintName("referrals_ibfk_3");

            entity.HasOne(d => d.Companies).WithMany(p => p.Referrals)
                .HasForeignKey(d => d.CompaniesId)
                .HasConstraintName("referrals_ibfk_1");

            entity.HasOne(d => d.User).WithMany(p => p.Referrals)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("referrals_ibfk_2");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity
                .ToTable("roles")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.RoleId)
                .HasColumnType("bigint(20)")
                .HasColumnName("role_id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.RoleName)
                .HasMaxLength(100)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<Runtime>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("runtimes")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.RuntimeName)
                .HasMaxLength(100)
                .HasColumnName("runtime_name");
        });

        modelBuilder.Entity<ShortlistedCandidate>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("shortlisted_candidates")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.JobId, "fk_sc_job");

            entity.HasIndex(e => e.UserId, "fk_sc_user");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.JobId)
                .HasColumnType("bigint(20)")
                .HasColumnName("job_id");
            entity.Property(e => e.RoundLevel)
                .HasMaxLength(50)
                .HasColumnName("round_level");
            entity.Property(e => e.ShortlistedAt)
                .HasDefaultValueSql("current_timestamp()")
                .HasColumnType("datetime")
                .HasColumnName("shortlisted_at");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Job).WithMany(p => p.ShortlistedCandidates)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("fk_sc_job");

            entity.HasOne(d => d.User).WithMany(p => p.ShortlistedCandidates)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fk_sc_user");
        });

        modelBuilder.Entity<SmeRuntime>(entity =>
        {
            entity.HasKey(e => e.SmeRuntimeId).HasName("PRIMARY");

            entity
                .ToTable("sme_runtimes")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.RuntimeId, "runtime_id");

            entity.HasIndex(e => e.UserRolesId, "user_id");

            entity.Property(e => e.SmeRuntimeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("sme_runtime_id");
            entity.Property(e => e.RuntimeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("runtime_id");
            entity.Property(e => e.UserRolesId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_roles_id");

            entity.HasOne(d => d.Runtime).WithMany(p => p.SmeRuntimes)
                .HasForeignKey(d => d.RuntimeId)
                .HasConstraintName("sme_runtimes_ibfk_2");
        });

        modelBuilder.Entity<StudentAssessmentResult>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("student_assessment_results")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.AssessmentId, "fk_result_assessment");

            entity.HasIndex(e => e.StudentId, "fk_result_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AssessmentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("assessment_id");
            entity.Property(e => e.Percentile).HasColumnName("percentile");
            entity.Property(e => e.Score).HasColumnName("score");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");
            entity.Property(e => e.TimeTakenMinutes)
                .HasColumnType("bigint(20)")
                .HasColumnName("time_taken_minutes");

            entity.HasOne(d => d.Assessment).WithMany(p => p.StudentAssessmentResults)
                .HasForeignKey(d => d.AssessmentId)
                .HasConstraintName("fk_result_assessment");

            entity.HasOne(d => d.Student).WithMany(p => p.StudentAssessmentResults)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_result_student");
        });

        modelBuilder.Entity<StudentConceptProgress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("student_concept_progress")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.ConceptId, "fk_scp_concept");

            entity.HasIndex(e => e.StudentId, "fk_scp_student");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CompletedAt)
                .HasColumnType("datetime")
                .HasColumnName("completed_at");
            entity.Property(e => e.ConceptId)
                .HasColumnType("bigint(20)")
                .HasColumnName("concept_id");
            entity.Property(e => e.InitiatedAt)
                .HasColumnType("datetime")
                .HasColumnName("initiated_at");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'PENDING'")
                .HasColumnType("enum('IN_PROGRESS','PENDING','COMPLETED')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId)
                .HasColumnType("bigint(20)")
                .HasColumnName("student_id");

            entity.HasOne(d => d.Concept).WithMany(p => p.StudentConceptProgresses)
                .HasForeignKey(d => d.ConceptId)
                .HasConstraintName("fk_scp_concept");

            entity.HasOne(d => d.Student).WithMany(p => p.StudentConceptProgresses)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("fk_scp_student");
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("tests")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.SmeRuntimeId, "fk_sme_runtime");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Difficulty)
                .HasColumnType("enum('BEGINNER','INTERMEDIATE','ADVANCE')")
                .HasColumnName("difficulty");
            entity.Property(e => e.Duration)
                .HasColumnType("bigint(20)")
                .HasColumnName("duration");
            entity.Property(e => e.SmeRuntimeId)
                .HasColumnType("bigint(20)")
                .HasColumnName("sme_runtime_id");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'1'")
                .HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");

            entity.HasOne(d => d.SmeRuntime).WithMany(p => p.Tests)
                .HasForeignKey(d => d.SmeRuntimeId)
                .HasConstraintName("fk_sme_runtime");
        });

        modelBuilder.Entity<TestQuestion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("test_questions")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.HasIndex(e => e.TestId, "test_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.QuestionId)
                .HasColumnType("bigint(20)")
                .HasColumnName("question_id");
            entity.Property(e => e.SequenceOrder)
                .HasColumnType("bigint(20)")
                .HasColumnName("sequence_order");
            entity.Property(e => e.TestId)
                .HasColumnType("bigint(20)")
                .HasColumnName("test_id");

            entity.HasOne(d => d.Question).WithMany(p => p.TestQuestions)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("test_questions_ibfk_2");

            entity.HasOne(d => d.Test).WithMany(p => p.TestQuestions)
                .HasForeignKey(d => d.TestId)
                .HasConstraintName("test_questions_ibfk_1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("users")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.Contact)
                .HasMaxLength(15)
                .HasColumnName("contact");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Password)
                .HasColumnType("text")
                .HasColumnName("password");
            entity.Property(e => e.Status)
                .HasColumnType("enum('ACTIVE','INACTIVE','BLOCKED')")
                .HasColumnName("status");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
        });

        modelBuilder.Entity<UserLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("user_logs")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.UserId, "fk_user_logs_user");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.LoginTime)
                .HasColumnType("datetime")
                .HasColumnName("login_time");
            entity.Property(e => e.LogoutTime)
                .HasColumnType("datetime")
                .HasColumnName("logout_time");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.UserLogs)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fk_user_logs_user");
        });

        modelBuilder.Entity<UserRole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("user_roles")
                .HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.RoleId, "role_id");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasColumnType("bigint(20)")
                .HasColumnName("id");
            entity.Property(e => e.AssignedAt)
                .HasColumnType("datetime")
                .HasColumnName("assigned_at");
            entity.Property(e => e.RoleId)
                .HasColumnType("bigint(20)")
                .HasColumnName("role_id");
            entity.Property(e => e.UserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Role).WithMany(p => p.UserRoles)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("user_roles_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.UserRoles)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("user_roles_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
