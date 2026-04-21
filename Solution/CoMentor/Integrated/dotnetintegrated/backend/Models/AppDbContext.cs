using System;
using System.Collections.Generic;
using backend.DTOs;
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

    public virtual DbSet<HandsOn> HandsOns { get; set; }

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

    public virtual DbSet<ProblemStatement> ProblemStatements { get; set; }

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

    public virtual DbSet<StudentAnswer> StudentAnswers { get; set; }

    public DbSet<AssessmentQuestionDto> AssessmentQuestionResults { get; set; }
    public DbSet<AssessmentReportDto> StudentAssessmentReports { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=192.168.1.149;port=3306;database=tflcomentor_db;user=root;password=password", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.4.4-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<AcademicInformation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("academic_informations");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CollegeName)
                .HasMaxLength(255)
                .HasColumnName("college_name");
            entity.Property(e => e.EnrollmentYear).HasColumnName("enrollment_year");
            entity.Property(e => e.PassingYear).HasColumnName("passing_year");
            entity.Property(e => e.Percentage)
                .HasPrecision(5, 2)
                .HasColumnName("percentage");
            entity.Property(e => e.Specialization)
                .HasMaxLength(100)
                .HasColumnName("specialization");
            entity.Property(e => e.StreamName)
                .HasMaxLength(100)
                .HasColumnName("stream_name");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.AcademicInformations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("academic_informations_ibfk_1");
        });

        modelBuilder.Entity<Alumnus>(entity =>
        {
            entity.HasKey(e => e.AlumniId).HasName("PRIMARY");

            entity.ToTable("alumni");

            entity.Property(e => e.AlumniId).HasColumnName("alumni_id");
            entity.Property(e => e.AddedAt)
                .HasColumnType("datetime")
                .HasColumnName("added_at");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<Assessment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("assessments");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AssignedAt)
                .HasColumnType("datetime")
                .HasColumnName("assigned_at");
            entity.Property(e => e.AssignedBy).HasColumnName("assigned_by");
            entity.Property(e => e.ScheduledAt)
                .HasColumnType("datetime")
                .HasColumnName("scheduled_at");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("'Pending'")
                .HasColumnType("enum('Assigned','Pending','Completed')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
            entity.Property(e => e.TestId).HasColumnName("test_id");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("companies");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .HasColumnName("company_name");
            entity.Property(e => e.CompanySize)
                .HasMaxLength(100)
                .HasColumnName("company_size");
            entity.Property(e => e.CompanyType)
                .HasColumnType("enum('STARTUP','PRODUCT_BASE','SERVICE_BASE')")
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

            entity.ToTable("concepts");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasDefaultValueSql("'active'")
                .HasColumnName("status");
        });

        modelBuilder.Entity<Framework>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("frameworks");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.LanguageId).HasColumnName("language_id");
            entity.Property(e => e.LayerId).HasColumnName("layer_id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
        });

        modelBuilder.Entity<FrameworkConcept>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("framework_concepts");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ConceptId).HasColumnName("concept_id");
            entity.Property(e => e.FrameworkId).HasColumnName("framework_id");
        });

        modelBuilder.Entity<HandsOn>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("hands_on");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<HandsOnResult>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("hands_on_results");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.HandsOnId).HasColumnName("hands_on_id");
            entity.Property(e => e.Score).HasColumnName("score");
            entity.Property(e => e.SmeId).HasColumnName("sme_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.SubmittedAt)
                .HasColumnType("datetime")
                .HasColumnName("submitted_at");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<HandsOnSubmission>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("hands_on_submissions");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.GithubLink)
                .HasMaxLength(255)
                .HasColumnName("github_link");
            entity.Property(e => e.HandsOnId).HasColumnName("hands_on_id");
            entity.Property(e => e.SubmittedAt)
                .HasColumnType("datetime")
                .HasColumnName("submitted_at");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<Interview>(entity =>
        {
            entity.HasKey(e => e.InterviewId).HasName("PRIMARY");

            entity.ToTable("interviews");

            entity.Property(e => e.InterviewId).HasColumnName("interview_id");
            entity.Property(e => e.ApplicationId).HasColumnName("application_id");
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
        });

        modelBuilder.Entity<JobApplication>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("job_applications");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AppliedAt)
                .HasColumnType("datetime")
                .HasColumnName("applied_at");
            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
        });

        modelBuilder.Entity<JobDescription>(entity =>
        {
            entity.HasKey(e => e.JobId).HasName("PRIMARY");

            entity.ToTable("job_descriptions");

            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.EmployerId).HasColumnName("employer_id");
            entity.Property(e => e.JobType)
                .HasMaxLength(50)
                .HasColumnName("job_type");
            entity.Property(e => e.Location)
                .HasMaxLength(100)
                .HasColumnName("location");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
        });

        modelBuilder.Entity<Language>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("languages");

            entity.HasIndex(e => e.RuntimeId, "runtime_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Language1)
                .HasMaxLength(100)
                .HasColumnName("language");
            entity.Property(e => e.RuntimeId).HasColumnName("runtime_id");

            entity.HasOne(d => d.Runtime).WithMany(p => p.Languages)
                .HasForeignKey(d => d.RuntimeId)
                .HasConstraintName("languages_ibfk_1");
        });

        modelBuilder.Entity<Layer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("layers");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Layers)
                .HasMaxLength(50)
                .HasColumnName("layers");
        });

        modelBuilder.Entity<LearningPath>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("learning_paths");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.MentorId).HasColumnName("mentor_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(200)
                .HasColumnName("title");
            entity.Property(e => e.TotalModules).HasColumnName("total_modules");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
        });

        modelBuilder.Entity<LearningPathProgress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("learning_path_progress");

            entity.HasIndex(e => e.StudentId, "student_id").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AveragePercentage)
                .HasPrecision(6, 2)
                .HasColumnName("average_percentage");
            entity.Property(e => e.ImprovementRate)
                .HasPrecision(5, 2)
                .HasColumnName("improvement_rate");
            entity.Property(e => e.MaxScore).HasColumnName("max_score");
            entity.Property(e => e.MinScore).HasColumnName("min_score");
            entity.Property(e => e.OverallScore)
                .HasPrecision(6, 2)
                .HasColumnName("overall_score");
            entity.Property(e => e.PerformanceLevelId).HasColumnName("performance_level_id");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
        });

        modelBuilder.Entity<LearningResource>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("learning_resources");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.ResourceUrl)
                .HasMaxLength(255)
                .HasColumnName("resource_url");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.Type)
                .HasColumnType("enum('VIDEO','DOC','LINK')")
                .HasColumnName("type");
            entity.Property(e => e.UploadedBy).HasColumnName("uploaded_by");
        });

        modelBuilder.Entity<McqOption>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("mcq_options");

            entity.Property(e => e.Id).HasColumnName("id");
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
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
        });

        modelBuilder.Entity<MentorAppointment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("mentor_appointments");

            entity.Property(e => e.Id).HasColumnName("id");
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
            entity.Property(e => e.MentorId).HasColumnName("mentor_id");
            entity.Property(e => e.StartTime)
                .HasColumnType("time")
                .HasColumnName("start_time");
            entity.Property(e => e.Status)
                .HasColumnType("enum('SCHEDULED','CANCELLED','COMPLETED')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
        });

        modelBuilder.Entity<MentorCounseling>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("mentor_counselings");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CounselingDate)
                .HasColumnType("datetime")
                .HasColumnName("counseling_date");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.MeetingLink)
                .HasMaxLength(255)
                .HasColumnName("meeting_link");
            entity.Property(e => e.MenteeId).HasColumnName("mentee_id");
            entity.Property(e => e.MentorId).HasColumnName("mentor_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.Subject)
                .HasMaxLength(100)
                .HasColumnName("subject");
        });

        modelBuilder.Entity<MentorFeedback>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("mentor_feedbacks");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.MentorId).HasColumnName("mentor_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.ReviewText)
                .HasColumnType("text")
                .HasColumnName("review_text");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
        });

        modelBuilder.Entity<MentorMentee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("mentor_mentees");

            entity.HasIndex(e => e.MenteeId, "mentee_id");

            entity.HasIndex(e => e.MentorId, "mentor_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AssignedOn).HasColumnName("assigned_on");
            entity.Property(e => e.MenteeId).HasColumnName("mentee_id");
            entity.Property(e => e.MentorId).HasColumnName("mentor_id");

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

            entity.ToTable("notifications");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Message)
                .HasColumnType("text")
                .HasColumnName("message");
            entity.Property(e => e.NotificationCategoriesId).HasColumnName("notification_categories_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<NotificationCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("notification_categories");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Categories)
                .HasMaxLength(100)
                .HasColumnName("categories");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
        });

        modelBuilder.Entity<OralAssessment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("oral_assessments");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ConceptId).HasColumnName("concept_id");
            entity.Property(e => e.SmeId).HasColumnName("sme_id");
            entity.Property(e => e.Status)
                .HasColumnType("enum('In_progress','Pending','Completed')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
            entity.Property(e => e.TimeScheduleAt)
                .HasColumnType("datetime")
                .HasColumnName("time_schedule_at");
        });

        modelBuilder.Entity<OralQuestionAnswer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("oral_question_answers");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Answer)
                .HasColumnType("text")
                .HasColumnName("answer");
            entity.Property(e => e.Questions)
                .HasColumnType("text")
                .HasColumnName("questions");
            entity.Property(e => e.Rating)
                .HasColumnType("enum('poor','good','very_good','excellent','worst')")
                .HasColumnName("rating");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.SmeId).HasColumnName("sme_id");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
        });

        modelBuilder.Entity<PerformanceSnapshot>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("performance_snapshots");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PerformanceJson)
                .HasColumnType("json")
                .HasColumnName("performance_json");
            entity.Property(e => e.SnapshotDate).HasColumnName("snapshot_date");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
        });

        modelBuilder.Entity<PersonalInformation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("personal_informations");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id).HasColumnName("id");
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
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.PersonalInformations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("personal_informations_ibfk_1");
        });

        modelBuilder.Entity<ProblemStatement>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("problem_statements");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
        });

        modelBuilder.Entity<ProblemStatementAnswer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("problem_statement_answers");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Answer)
                .HasColumnType("text")
                .HasColumnName("answer");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
            entity.Property(e => e.SubmittedAt)
                .HasColumnType("datetime")
                .HasColumnName("submitted_at");
        });

        modelBuilder.Entity<ProfessionalInformation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("professional_informations");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .HasColumnName("company_name");
            entity.Property(e => e.EmploymentType)
                .HasColumnType("enum('FULL_TIME','PART_TIME','INTERNSHIP')")
                .HasColumnName("employment_type");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.ExperienceYears).HasColumnName("experience_years");
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
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.ProfessionalInformations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("professional_informations_ibfk_1");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.ProjectId).HasName("PRIMARY");

            entity.ToTable("projects");

            entity.Property(e => e.ProjectId).HasColumnName("project_id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.MentorId).HasColumnName("mentor_id");
            entity.Property(e => e.ProjectName)
                .HasMaxLength(255)
                .HasColumnName("project_name");
            entity.Property(e => e.RepositoryUrl)
                .HasMaxLength(255)
                .HasColumnName("repository_url");
            entity.Property(e => e.Status)
                .HasColumnType("enum('In_progress','Pending','Completed')")
                .HasColumnName("status");
        });

        modelBuilder.Entity<ProjectMember>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("project_members");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.JoinedDate)
                .HasColumnType("datetime")
                .HasColumnName("joined_date");
            entity.Property(e => e.ProjectId).HasColumnName("project_id");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.QuestionId).HasName("PRIMARY");

            entity.ToTable("questions");

            entity.Property(e => e.QuestionId).HasColumnName("question_id");
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
            entity.Property(e => e.Status).HasColumnName("status");
        });

        modelBuilder.Entity<QuestionFrameworkConcept>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("question_framework_concepts");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.FrameworkId).HasColumnName("framework_id");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
        });

        modelBuilder.Entity<Referral>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("referrals");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AlumniId).HasColumnName("alumni_id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.RoleId).HasColumnName("role_id");
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

            entity.ToTable("runtimes");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.RuntimeName)
                .HasMaxLength(100)
                .HasColumnName("runtime_name");
        });

        modelBuilder.Entity<ShortlistedCandidate>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("shortlisted_candidates");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.RoundLevel)
                .HasMaxLength(50)
                .HasColumnName("round_level");
            entity.Property(e => e.ShortlistedAt)
                .HasColumnType("datetime")
                .HasColumnName("shortlisted_at");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

       modelBuilder.Entity<SmeRuntime>(entity =>
{
    entity.HasKey(e => e.SmeRuntimeId).HasName("PRIMARY");

    entity.ToTable("sme_runtimes");

    entity.Property(e => e.SmeRuntimeId)
        .HasColumnName("sme_runtime_id");

    entity.Property(e => e.RuntimeId)
        .HasColumnName("runtime_id");

    // ✅ FIXED LINE
    entity.Property(e => e.UserRolesId)
        .HasColumnName("user_roles_id");
});

        modelBuilder.Entity<StudentAssessmentResult>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("student_assessment_results");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AssessmentId).HasColumnName("assessment_id");
            entity.Property(e => e.Percentile).HasColumnName("percentile");
            entity.Property(e => e.Score).HasColumnName("score");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
            entity.Property(e => e.TimeTakenMinutes).HasColumnName("time_taken_minutes");
        });

        modelBuilder.Entity<StudentConceptProgress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("student_concept_progress");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompletedAt)
                .HasColumnType("datetime")
                .HasColumnName("completed_at");
            entity.Property(e => e.ConceptId).HasColumnName("concept_id");
            entity.Property(e => e.InitiatedAt)
                .HasColumnType("datetime")
                .HasColumnName("initiated_at");
            entity.Property(e => e.Status)
                .HasColumnType("enum('In_progress','Pending','Completed')")
                .HasColumnName("status");
            entity.Property(e => e.StudentId).HasColumnName("student_id");
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("tests");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.Difficulty)
                .HasColumnType("enum('BIGINNER','INTERMEDIATE','ADVANCE')")
                .HasColumnName("difficulty");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.SmeId).HasColumnName("sme_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.SmeRuntimeId)
        .HasColumnName("sme_runtime_id");
        });

        modelBuilder.Entity<TestQuestion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("test_questions");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
            entity.Property(e => e.SequenceOrder).HasColumnName("sequence_order");
            entity.Property(e => e.TestId).HasColumnName("test_id");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("users");

            entity.Property(e => e.Id).HasColumnName("id");
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
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("updated_at");
        });

        modelBuilder.Entity<UserLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user_logs");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.LoginTime)
                .HasColumnType("datetime")
                .HasColumnName("login_time");
            entity.Property(e => e.LogoutTime)
                .HasColumnType("datetime")
                .HasColumnName("logout_time");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<UserRole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user_roles");

            entity.HasIndex(e => e.RoleId, "role_id");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AssignedAt)
                .HasColumnType("datetime")
                .HasColumnName("assigned_at");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Role).WithMany(p => p.UserRoles)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("user_roles_ibfk_2");

            entity.HasOne(d => d.User).WithMany(p => p.UserRoles)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("user_roles_ibfk_1");
        });
        modelBuilder.Entity<AssessmentQuestionDto>(entity =>
        {
            entity.HasNoKey(); // DTOs don't have Primary Keys
            entity.ToView(null); // Tells EF there is no physical table for this
        });
        
        modelBuilder.Entity<AssessmentAnswersDto>()
                .ToTable("studentanswers");

        modelBuilder.Entity<AssessmentReportDto>()
                .HasNoKey()      // no primary key
                .ToView(null);

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
