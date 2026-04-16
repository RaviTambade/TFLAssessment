using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<academic_information> academic_informations { get; set; }

    public virtual DbSet<alumnus> alumni { get; set; }

    public virtual DbSet<assessment> assessments { get; set; }

    public virtual DbSet<company> companies { get; set; }

    public virtual DbSet<concept> concepts { get; set; }

    public virtual DbSet<framework> frameworks { get; set; }

    public virtual DbSet<framework_concept> framework_concepts { get; set; }

    public virtual DbSet<hands_on_result> hands_on_results { get; set; }

    public virtual DbSet<hands_on_submission> hands_on_submissions { get; set; }

    public virtual DbSet<interview> interviews { get; set; }

    public virtual DbSet<job_application> job_applications { get; set; }

    public virtual DbSet<job_description> job_descriptions { get; set; }

    public virtual DbSet<language> languages { get; set; }

    public virtual DbSet<layer> layers { get; set; }

    public virtual DbSet<learning_path> learning_paths { get; set; }

    public virtual DbSet<learning_path_progress> learning_path_progresses { get; set; }

    public virtual DbSet<learning_resource> learning_resources { get; set; }

    public virtual DbSet<mcq_option> mcq_options { get; set; }

    public virtual DbSet<mentor_appointment> mentor_appointments { get; set; }

    public virtual DbSet<mentor_counseling> mentor_counselings { get; set; }

    public virtual DbSet<mentor_feedback> mentor_feedbacks { get; set; }

    public virtual DbSet<mentor_mentee> mentor_mentees { get; set; }

    public virtual DbSet<notification> notifications { get; set; }

    public virtual DbSet<notification_category> notification_categories { get; set; }

    public virtual DbSet<oral_assessment> oral_assessments { get; set; }

    public virtual DbSet<oral_question_answer> oral_question_answers { get; set; }

    public virtual DbSet<performance_snapshot> performance_snapshots { get; set; }

    public virtual DbSet<personal_information> personal_informations { get; set; }

    public virtual DbSet<problem_statement_answer> problem_statement_answers { get; set; }

    public virtual DbSet<professional_information> professional_informations { get; set; }

    public virtual DbSet<project> projects { get; set; }

    public virtual DbSet<project_member> project_members { get; set; }

    public virtual DbSet<question> questions { get; set; }

    public virtual DbSet<question_framework_concept> question_framework_concepts { get; set; }

    public virtual DbSet<referral> referrals { get; set; }

    public virtual DbSet<role> roles { get; set; }

    public virtual DbSet<runtime> runtimes { get; set; }

    public virtual DbSet<shortlisted_candidate> shortlisted_candidates { get; set; }

    public virtual DbSet<sme_runtime> sme_runtimes { get; set; }

    public virtual DbSet<student_assessment_result> student_assessment_results { get; set; }

    public virtual DbSet<student_concept_progress> student_concept_progresses { get; set; }

    public virtual DbSet<test> tests { get; set; }

    public virtual DbSet<test_question> test_questions { get; set; }

    public virtual DbSet<user> users { get; set; }

    public virtual DbSet<user_log> user_logs { get; set; }

    public virtual DbSet<user_role> user_roles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<academic_information>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.Property(e => e.college_name).HasMaxLength(255);
            entity.Property(e => e.percentage).HasPrecision(5, 2);
            entity.Property(e => e.specialization).HasMaxLength(100);
            entity.Property(e => e.stream_name).HasMaxLength(100);

            entity.HasOne(d => d.user).WithMany(p => p.academic_informations)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("academic_informations_ibfk_1");
        });

        modelBuilder.Entity<alumnus>(entity =>
        {
            entity.HasKey(e => e.alumni_id).HasName("PRIMARY");

            entity.HasIndex(e => e.companies_id, "companies_id");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.Property(e => e.added_at).HasColumnType("datetime");

            entity.HasOne(d => d.companies).WithMany(p => p.alumni)
                .HasForeignKey(d => d.companies_id)
                .HasConstraintName("alumni_ibfk_1");

            entity.HasOne(d => d.user).WithMany(p => p.alumni)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("alumni_ibfk_2");
        });

        modelBuilder.Entity<assessment>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.assigned_by, "fk_assessment_assigned_by");

            entity.HasIndex(e => e.student_id, "fk_assessment_student");

            entity.HasIndex(e => e.test_id, "fk_assessment_test");

            entity.Property(e => e.assigned_at)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime");
            entity.Property(e => e.scheduled_at).HasColumnType("datetime");
            entity.Property(e => e.status)
                .HasDefaultValueSql("'Pending'")
                .HasColumnType("enum('Assigned','Pending','Completed')");

            entity.HasOne(d => d.assigned_byNavigation).WithMany(p => p.assessmentassigned_byNavigations)
                .HasForeignKey(d => d.assigned_by)
                .HasConstraintName("fk_assessment_assigned_by");

            entity.HasOne(d => d.student).WithMany(p => p.assessmentstudents)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_assessment_student");

            entity.HasOne(d => d.test).WithMany(p => p.assessments)
                .HasForeignKey(d => d.test_id)
                .HasConstraintName("fk_assessment_test");
        });

        modelBuilder.Entity<company>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.Property(e => e.company_name).HasMaxLength(255);
            entity.Property(e => e.company_size).HasMaxLength(100);
            entity.Property(e => e.company_type).HasColumnType("enum('STARTUP','PRODUCT','SERVICE')");
            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.industry).HasMaxLength(100);
            entity.Property(e => e.updated_at).HasColumnType("datetime");
            entity.Property(e => e.website).HasMaxLength(255);
        });

        modelBuilder.Entity<concept>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasMaxLength(255);
            entity.Property(e => e.name).HasMaxLength(255);
            entity.Property(e => e.status).HasMaxLength(255);
        });

        modelBuilder.Entity<framework>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.language_id, "language_id");

            entity.HasIndex(e => e.layer_id, "layer_id");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.name).HasMaxLength(100);
            entity.Property(e => e.updated_at).HasColumnType("datetime");

            entity.HasOne(d => d.language).WithMany(p => p.frameworks)
                .HasForeignKey(d => d.language_id)
                .HasConstraintName("frameworks_ibfk_2");

            entity.HasOne(d => d.layer).WithMany(p => p.frameworks)
                .HasForeignKey(d => d.layer_id)
                .HasConstraintName("frameworks_ibfk_1");
        });

        modelBuilder.Entity<framework_concept>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.concept_id, "concept_id");

            entity.HasIndex(e => e.framework_id, "framework_id");

            entity.HasOne(d => d.concept).WithMany(p => p.framework_concepts)
                .HasForeignKey(d => d.concept_id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("framework_concepts_ibfk_2");

            entity.HasOne(d => d.framework).WithMany(p => p.framework_concepts)
                .HasForeignKey(d => d.framework_id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("framework_concepts_ibfk_1");
        });

        modelBuilder.Entity<hands_on_result>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.question_id, "question_id");

            entity.HasIndex(e => e.sme_id, "sme_id");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.HasOne(d => d.question).WithMany(p => p.hands_on_results)
                .HasForeignKey(d => d.question_id)
                .HasConstraintName("fk_question_results");

            entity.HasOne(d => d.sme).WithMany(p => p.hands_on_resultsmes)
                .HasForeignKey(d => d.sme_id)
                .HasConstraintName("hands_on_results_ibfk_3");

            entity.HasOne(d => d.user).WithMany(p => p.hands_on_resultusers)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("hands_on_results_ibfk_1");
        });

        modelBuilder.Entity<hands_on_submission>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.question_id, "question_id");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.Property(e => e.github_link).HasMaxLength(255);
            entity.Property(e => e.submitted_at).HasColumnType("datetime");

            entity.HasOne(d => d.question).WithMany(p => p.hands_on_submissions)
                .HasForeignKey(d => d.question_id)
                .HasConstraintName("fk_question_submissions");

            entity.HasOne(d => d.user).WithMany(p => p.hands_on_submissions)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("hands_on_submissions_ibfk_2");
        });

        modelBuilder.Entity<interview>(entity =>
        {
            entity.HasKey(e => e.interview_id).HasName("PRIMARY");

            entity.HasIndex(e => e.application_id, "fk_interview_application");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.mode).HasMaxLength(50);
            entity.Property(e => e.outcome).HasMaxLength(100);
            entity.Property(e => e.remark).HasColumnType("text");
            entity.Property(e => e.rescheduled_at).HasColumnType("datetime");
            entity.Property(e => e.scheduled_at).HasColumnType("datetime");

            entity.HasOne(d => d.application).WithMany(p => p.interviews)
                .HasForeignKey(d => d.application_id)
                .HasConstraintName("fk_interview_application");
        });

        modelBuilder.Entity<job_application>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.job_id, "fk_app_job");

            entity.HasIndex(e => e.student_id, "fk_app_student");

            entity.Property(e => e.applied_at).HasColumnType("datetime");
            entity.Property(e => e.updated_at).HasColumnType("datetime");

            entity.HasOne(d => d.job).WithMany(p => p.job_applications)
                .HasForeignKey(d => d.job_id)
                .HasConstraintName("fk_app_job");

            entity.HasOne(d => d.student).WithMany(p => p.job_applications)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_app_student");
        });

        modelBuilder.Entity<job_description>(entity =>
        {
            entity.HasKey(e => e.job_id).HasName("PRIMARY");

            entity.HasIndex(e => e.employer_id, "fk_job_employer");

            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.job_type).HasMaxLength(50);
            entity.Property(e => e.location).HasMaxLength(100);
            entity.Property(e => e.title).HasMaxLength(255);

            entity.HasOne(d => d.employer).WithMany(p => p.job_descriptions)
                .HasForeignKey(d => d.employer_id)
                .HasConstraintName("fk_job_employer");
        });

        modelBuilder.Entity<language>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.runtime_id, "runtime_id");

            entity.Property(e => e.language1)
                .HasMaxLength(100)
                .HasColumnName("language");

            entity.HasOne(d => d.runtime).WithMany(p => p.languages)
                .HasForeignKey(d => d.runtime_id)
                .HasConstraintName("languages_ibfk_1");
        });

        modelBuilder.Entity<layer>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.Property(e => e.layers).HasMaxLength(50);
        });

        modelBuilder.Entity<learning_path>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.mentor_id, "fk_learningpath_mentor");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.status).HasDefaultValueSql("'1'");
            entity.Property(e => e.title).HasMaxLength(200);
            entity.Property(e => e.updated_at).HasColumnType("datetime");

            entity.HasOne(d => d.mentor).WithMany(p => p.learning_paths)
                .HasForeignKey(d => d.mentor_id)
                .HasConstraintName("fk_learningpath_mentor");
        });

        modelBuilder.Entity<learning_path_progress>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.ToTable("learning_path_progress");

            entity.HasIndex(e => e.learning_path_id, "fk_progress_path");

            entity.HasIndex(e => new { e.student_id, e.learning_path_id }, "student_id").IsUnique();

            entity.Property(e => e.average_percentage).HasPrecision(6, 2);
            entity.Property(e => e.improvement_rate).HasPrecision(5, 2);
            entity.Property(e => e.overall_score).HasPrecision(6, 2);

            entity.HasOne(d => d.learning_path).WithMany(p => p.learning_path_progresses)
                .HasForeignKey(d => d.learning_path_id)
                .HasConstraintName("fk_progress_path");

            entity.HasOne(d => d.student).WithMany(p => p.learning_path_progresses)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_progress_student");
        });

        modelBuilder.Entity<learning_resource>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.uploaded_by, "fk_resource_user");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.resource_url).HasMaxLength(255);
            entity.Property(e => e.status)
                .HasDefaultValueSql("'ACTIVE'")
                .HasColumnType("enum('ACTIVE','INACTIVE','ARCHIVED')");
            entity.Property(e => e.title).HasMaxLength(255);
            entity.Property(e => e.type).HasColumnType("enum('VIDEO','DOC','LINK')");

            entity.HasOne(d => d.uploaded_byNavigation).WithMany(p => p.learning_resources)
                .HasForeignKey(d => d.uploaded_by)
                .HasConstraintName("fk_resource_user");
        });

        modelBuilder.Entity<mcq_option>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.question_id, "question_id");

            entity.Property(e => e.correct_answer).HasMaxLength(10);
            entity.Property(e => e.option_a).HasMaxLength(255);
            entity.Property(e => e.option_b).HasMaxLength(255);
            entity.Property(e => e.option_c).HasMaxLength(255);
            entity.Property(e => e.option_d).HasMaxLength(255);

            entity.HasOne(d => d.question).WithMany(p => p.mcq_options)
                .HasForeignKey(d => d.question_id)
                .HasConstraintName("mcq_options_ibfk_1");
        });

        modelBuilder.Entity<mentor_appointment>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.mentor_id, "fk_appointment_mentor");

            entity.HasIndex(e => e.student_id, "fk_appointment_student");

            entity.Property(e => e.agenda).HasColumnType("text");
            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.meeting_link).HasMaxLength(255);
            entity.Property(e => e.start_time).HasColumnType("time");
            entity.Property(e => e.status)
                .HasDefaultValueSql("'SCHEDULED'")
                .HasColumnType("enum('SCHEDULED','CANCELLED','COMPLETED')");
            entity.Property(e => e.updated_at).HasColumnType("datetime");

            entity.HasOne(d => d.mentor).WithMany(p => p.mentor_appointmentmentors)
                .HasForeignKey(d => d.mentor_id)
                .HasConstraintName("fk_appointment_mentor");

            entity.HasOne(d => d.student).WithMany(p => p.mentor_appointmentstudents)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_appointment_student");
        });

        modelBuilder.Entity<mentor_counseling>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.mentee_id, "fk_counseling_mentee");

            entity.HasIndex(e => e.mentor_id, "fk_counseling_mentor");

            entity.Property(e => e.counseling_date).HasColumnType("datetime");
            entity.Property(e => e.description).HasMaxLength(255);
            entity.Property(e => e.meeting_link).HasMaxLength(255);
            entity.Property(e => e.remark).HasMaxLength(255);
            entity.Property(e => e.subject).HasMaxLength(100);

            entity.HasOne(d => d.mentee).WithMany(p => p.mentor_counselingmentees)
                .HasForeignKey(d => d.mentee_id)
                .HasConstraintName("fk_counseling_mentee");

            entity.HasOne(d => d.mentor).WithMany(p => p.mentor_counselingmentors)
                .HasForeignKey(d => d.mentor_id)
                .HasConstraintName("fk_counseling_mentor");
        });

        modelBuilder.Entity<mentor_feedback>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.mentor_id, "fk_feedback_mentor");

            entity.HasIndex(e => e.student_id, "fk_feedback_student");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.review_text).HasColumnType("text");

            entity.HasOne(d => d.mentor).WithMany(p => p.mentor_feedbackmentors)
                .HasForeignKey(d => d.mentor_id)
                .HasConstraintName("fk_feedback_mentor");

            entity.HasOne(d => d.student).WithMany(p => p.mentor_feedbackstudents)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_feedback_student");
        });

        modelBuilder.Entity<mentor_mentee>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.mentee_id, "mentee_id");

            entity.HasIndex(e => e.mentor_id, "mentor_id");

            entity.HasOne(d => d.mentee).WithMany(p => p.mentor_menteementees)
                .HasForeignKey(d => d.mentee_id)
                .HasConstraintName("mentor_mentees_ibfk_2");

            entity.HasOne(d => d.mentor).WithMany(p => p.mentor_menteementors)
                .HasForeignKey(d => d.mentor_id)
                .HasConstraintName("mentor_mentees_ibfk_1");
        });

        modelBuilder.Entity<notification>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.notification_categories_id, "fk_notification_category");

            entity.HasIndex(e => e.user_id, "fk_notification_user");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.message).HasColumnType("text");

            entity.HasOne(d => d.notification_categories).WithMany(p => p.notifications)
                .HasForeignKey(d => d.notification_categories_id)
                .HasConstraintName("fk_notification_category");

            entity.HasOne(d => d.user).WithMany(p => p.notifications)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("fk_notification_user");
        });

        modelBuilder.Entity<notification_category>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.category, "category").IsUnique();

            entity.Property(e => e.category).HasMaxLength(100);
            entity.Property(e => e.description).HasColumnType("text");
        });

        modelBuilder.Entity<oral_assessment>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.concept_id, "fk_oa_concept");

            entity.HasIndex(e => e.sme_id, "fk_oa_sme");

            entity.HasIndex(e => e.student_id, "fk_oa_student");

            entity.Property(e => e.status)
                .HasDefaultValueSql("'PENDING'")
                .HasColumnType("enum('PENDING','IN_PROGRESS','COMPLETED')");
            entity.Property(e => e.time_schedule_at).HasColumnType("datetime");

            entity.HasOne(d => d.concept).WithMany(p => p.oral_assessments)
                .HasForeignKey(d => d.concept_id)
                .HasConstraintName("fk_oa_concept");

            entity.HasOne(d => d.sme).WithMany(p => p.oral_assessmentsmes)
                .HasForeignKey(d => d.sme_id)
                .HasConstraintName("fk_oa_sme");

            entity.HasOne(d => d.student).WithMany(p => p.oral_assessmentstudents)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_oa_student");
        });

        modelBuilder.Entity<oral_question_answer>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.sme_id, "fk_oqa_sme");

            entity.HasIndex(e => e.student_id, "fk_oqa_student");

            entity.Property(e => e.answer).HasColumnType("text");
            entity.Property(e => e.questions).HasColumnType("text");
            entity.Property(e => e.rating).HasColumnType("enum('POOR','AVERAGE','GOOD','VERY_GOOD','EXCELLENT')");
            entity.Property(e => e.remark).HasMaxLength(255);

            entity.HasOne(d => d.sme).WithMany(p => p.oral_question_answersmes)
                .HasForeignKey(d => d.sme_id)
                .HasConstraintName("fk_oqa_sme");

            entity.HasOne(d => d.student).WithMany(p => p.oral_question_answerstudents)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_oqa_student");
        });

        modelBuilder.Entity<performance_snapshot>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => new { e.student_id, e.snapshot_date }, "student_id").IsUnique();

            entity.Property(e => e.performance_json).HasColumnType("json");

            entity.HasOne(d => d.student).WithMany(p => p.performance_snapshots)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_snapshot_student");
        });

        modelBuilder.Entity<personal_information>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.Property(e => e.address).HasMaxLength(255);
            entity.Property(e => e.email).HasMaxLength(255);
            entity.Property(e => e.first_name).HasMaxLength(100);
            entity.Property(e => e.full_name)
                .HasMaxLength(255)
                .HasComputedColumnSql("concat(`first_name`,_utf8mb4' ',`last_name`)", true);
            entity.Property(e => e.gender).HasColumnType("enum('MALE','FEMALE')");
            entity.Property(e => e.last_name).HasMaxLength(100);
            entity.Property(e => e.pincode).HasMaxLength(10);

            entity.HasOne(d => d.user).WithMany(p => p.personal_informations)
                .HasForeignKey(d => d.user_id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("personal_informations_ibfk_1");
        });

        modelBuilder.Entity<problem_statement_answer>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.question_id, "fk_psa_question");

            entity.Property(e => e.answer).HasColumnType("text");
            entity.Property(e => e.submitted_at).HasColumnType("datetime");

            entity.HasOne(d => d.question).WithMany(p => p.problem_statement_answers)
                .HasForeignKey(d => d.question_id)
                .HasConstraintName("fk_psa_question");
        });

        modelBuilder.Entity<professional_information>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.Property(e => e.company_name).HasMaxLength(255);
            entity.Property(e => e.employment_type).HasColumnType("enum('FULL_TIME','PART_TIME','INTERNSHIP')");
            entity.Property(e => e.job_title).HasMaxLength(100);
            entity.Property(e => e.location).HasMaxLength(100);
            entity.Property(e => e.skills).HasColumnType("text");

            entity.HasOne(d => d.user).WithMany(p => p.professional_informations)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("professional_informations_ibfk_1");
        });

        modelBuilder.Entity<project>(entity =>
        {
            entity.HasKey(e => e.project_id).HasName("PRIMARY");

            entity.HasIndex(e => e.mentor_id, "fk_project_mentor");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.project_name).HasMaxLength(255);
            entity.Property(e => e.repository_url).HasMaxLength(255);
            entity.Property(e => e.status)
                .HasDefaultValueSql("'PENDING'")
                .HasColumnType("enum('IN_PROGRESS','PENDING','COMPLETED')");

            entity.HasOne(d => d.mentor).WithMany(p => p.projects)
                .HasForeignKey(d => d.mentor_id)
                .HasConstraintName("fk_project_mentor");
        });

        modelBuilder.Entity<project_member>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.project_id, "fk_pm_project");

            entity.HasIndex(e => e.student_id, "fk_pm_student");

            entity.Property(e => e.joined_date)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime");

            entity.HasOne(d => d.project).WithMany(p => p.project_members)
                .HasForeignKey(d => d.project_id)
                .HasConstraintName("fk_pm_project");

            entity.HasOne(d => d.student).WithMany(p => p.project_members)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_pm_student");
        });

        modelBuilder.Entity<question>(entity =>
        {
            entity.HasKey(e => e.question_id).HasName("PRIMARY");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.difficulty_level).HasColumnType("enum('BEGINNER','INTERMEDIATE','ADVANCE')");
            entity.Property(e => e.question_type).HasColumnType("enum('MCQ','PROBLEM_STATEMENT','HANDS_ON')");
            entity.Property(e => e.status)
                .HasDefaultValueSql("'DRAFT'")
                .HasColumnType("enum('APPROVED','DRAFT','INACTIVE')");
        });

        modelBuilder.Entity<question_framework_concept>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.framework_concepts_id, "framework_concepts_id");

            entity.HasIndex(e => e.question_id, "question_id");

            entity.HasOne(d => d.framework_concepts).WithMany(p => p.question_framework_concepts)
                .HasForeignKey(d => d.framework_concepts_id)
                .HasConstraintName("question_framework_concepts_ibfk_2");

            entity.HasOne(d => d.question).WithMany(p => p.question_framework_concepts)
                .HasForeignKey(d => d.question_id)
                .HasConstraintName("question_framework_concepts_ibfk_1");
        });

        modelBuilder.Entity<referral>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.alumni_id, "alumni_id");

            entity.HasIndex(e => e.companies_id, "companies_id");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.HasOne(d => d.alumni).WithMany(p => p.referrals)
                .HasForeignKey(d => d.alumni_id)
                .HasConstraintName("referrals_ibfk_3");

            entity.HasOne(d => d.companies).WithMany(p => p.referrals)
                .HasForeignKey(d => d.companies_id)
                .HasConstraintName("referrals_ibfk_1");

            entity.HasOne(d => d.user).WithMany(p => p.referrals)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("referrals_ibfk_2");
        });

        modelBuilder.Entity<role>(entity =>
        {
            entity.HasKey(e => e.role_id).HasName("PRIMARY");

            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.role_name).HasMaxLength(100);
        });

        modelBuilder.Entity<runtime>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.Property(e => e.runtime_name).HasMaxLength(100);
        });

        modelBuilder.Entity<shortlisted_candidate>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.job_id, "fk_sc_job");

            entity.HasIndex(e => e.user_id, "fk_sc_user");

            entity.Property(e => e.round_level).HasMaxLength(50);
            entity.Property(e => e.shortlisted_at)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime");

            entity.HasOne(d => d.job).WithMany(p => p.shortlisted_candidates)
                .HasForeignKey(d => d.job_id)
                .HasConstraintName("fk_sc_job");

            entity.HasOne(d => d.user).WithMany(p => p.shortlisted_candidates)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("fk_sc_user");
        });

        modelBuilder.Entity<sme_runtime>(entity =>
        {
            entity.HasKey(e => e.sme_runtime_id).HasName("PRIMARY");

            entity.HasIndex(e => e.runtime_id, "runtime_id");

            entity.HasIndex(e => e.user_roles_id, "user_id");

            entity.HasOne(d => d.runtime).WithMany(p => p.sme_runtimes)
                .HasForeignKey(d => d.runtime_id)
                .HasConstraintName("sme_runtimes_ibfk_2");
        });

        modelBuilder.Entity<student_assessment_result>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.assessment_id, "fk_result_assessment");

            entity.HasIndex(e => e.student_id, "fk_result_student");

            entity.HasOne(d => d.assessment).WithMany(p => p.student_assessment_results)
                .HasForeignKey(d => d.assessment_id)
                .HasConstraintName("fk_result_assessment");

            entity.HasOne(d => d.student).WithMany(p => p.student_assessment_results)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_result_student");
        });

        modelBuilder.Entity<student_concept_progress>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.ToTable("student_concept_progress");

            entity.HasIndex(e => e.concept_id, "fk_scp_concept");

            entity.HasIndex(e => e.student_id, "fk_scp_student");

            entity.Property(e => e.completed_at).HasColumnType("datetime");
            entity.Property(e => e.initiated_at).HasColumnType("datetime");
            entity.Property(e => e.status)
                .HasDefaultValueSql("'PENDING'")
                .HasColumnType("enum('IN_PROGRESS','PENDING','COMPLETED')");

            entity.HasOne(d => d.concept).WithMany(p => p.student_concept_progresses)
                .HasForeignKey(d => d.concept_id)
                .HasConstraintName("fk_scp_concept");

            entity.HasOne(d => d.student).WithMany(p => p.student_concept_progresses)
                .HasForeignKey(d => d.student_id)
                .HasConstraintName("fk_scp_student");
        });

        modelBuilder.Entity<test>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.sme_runtime_id, "fk_sme_runtime");

            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.description).HasColumnType("text");
            entity.Property(e => e.difficulty).HasColumnType("enum('BEGINNER','INTERMEDIATE','ADVANCE')");
            entity.Property(e => e.status).HasDefaultValueSql("'1'");
            entity.Property(e => e.title).HasMaxLength(255);

            entity.HasOne(d => d.sme_runtime).WithMany(p => p.tests)
                .HasForeignKey(d => d.sme_runtime_id)
                .HasConstraintName("fk_sme_runtime");
        });

        modelBuilder.Entity<test_question>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.question_id, "question_id");

            entity.HasIndex(e => e.test_id, "test_id");

            entity.HasOne(d => d.question).WithMany(p => p.test_questions)
                .HasForeignKey(d => d.question_id)
                .HasConstraintName("test_questions_ibfk_2");

            entity.HasOne(d => d.test).WithMany(p => p.test_questions)
                .HasForeignKey(d => d.test_id)
                .HasConstraintName("test_questions_ibfk_1");
        });

        modelBuilder.Entity<user>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.Property(e => e.contact).HasMaxLength(15);
            entity.Property(e => e.created_at).HasColumnType("datetime");
            entity.Property(e => e.password).HasColumnType("text");
            entity.Property(e => e.status).HasColumnType("enum('ACTIVE','INACTIVE','BLOCKED')");
            entity.Property(e => e.updated_at).HasColumnType("datetime");
        });

        modelBuilder.Entity<user_log>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.user_id, "fk_user_logs_user");

            entity.Property(e => e.login_time).HasColumnType("datetime");
            entity.Property(e => e.logout_time).HasColumnType("datetime");

            entity.HasOne(d => d.user).WithMany(p => p.user_logs)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("fk_user_logs_user");
        });

        modelBuilder.Entity<user_role>(entity =>
        {
            entity.HasKey(e => e.id).HasName("PRIMARY");

            entity.HasIndex(e => e.role_id, "role_id");

            entity.HasIndex(e => e.user_id, "user_id");

            entity.Property(e => e.assigned_at).HasColumnType("datetime");

            entity.HasOne(d => d.role).WithMany(p => p.user_roles)
                .HasForeignKey(d => d.role_id)
                .HasConstraintName("user_roles_ibfk_2");

            entity.HasOne(d => d.user).WithMany(p => p.user_roles)
                .HasForeignKey(d => d.user_id)
                .HasConstraintName("user_roles_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
