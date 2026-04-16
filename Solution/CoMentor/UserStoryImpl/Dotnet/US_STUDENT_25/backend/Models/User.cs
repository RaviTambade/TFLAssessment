using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class User
{
    public long Id { get; set; }

    public string? Contact { get; set; }

    public string? Password { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<AcademicInformation> AcademicInformations { get; set; } = new List<AcademicInformation>();

    public virtual ICollection<Alumnus> Alumni { get; set; } = new List<Alumnus>();

    public virtual ICollection<Assessment> AssessmentAssignedByNavigations { get; set; } = new List<Assessment>();

    public virtual ICollection<Assessment> AssessmentStudents { get; set; } = new List<Assessment>();

    public virtual ICollection<HandsOnResult> HandsOnResultSmes { get; set; } = new List<HandsOnResult>();

    public virtual ICollection<HandsOnResult> HandsOnResultUsers { get; set; } = new List<HandsOnResult>();

    public virtual ICollection<HandsOnSubmission> HandsOnSubmissions { get; set; } = new List<HandsOnSubmission>();

    public virtual ICollection<JobApplication> JobApplications { get; set; } = new List<JobApplication>();

    public virtual ICollection<JobDescription> JobDescriptions { get; set; } = new List<JobDescription>();

    public virtual ICollection<LearningPathProgress> LearningPathProgresses { get; set; } = new List<LearningPathProgress>();

    public virtual ICollection<LearningPath> LearningPaths { get; set; } = new List<LearningPath>();

    public virtual ICollection<LearningResource> LearningResources { get; set; } = new List<LearningResource>();

    public virtual ICollection<MentorAppointment> MentorAppointmentMentors { get; set; } = new List<MentorAppointment>();

    public virtual ICollection<MentorAppointment> MentorAppointmentStudents { get; set; } = new List<MentorAppointment>();

    public virtual ICollection<MentorCounseling> MentorCounselingMentees { get; set; } = new List<MentorCounseling>();

    public virtual ICollection<MentorCounseling> MentorCounselingMentors { get; set; } = new List<MentorCounseling>();

    public virtual ICollection<MentorFeedback> MentorFeedbackMentors { get; set; } = new List<MentorFeedback>();

    public virtual ICollection<MentorFeedback> MentorFeedbackStudents { get; set; } = new List<MentorFeedback>();

    public virtual ICollection<MentorMentee> MentorMenteeMentees { get; set; } = new List<MentorMentee>();

    public virtual ICollection<MentorMentee> MentorMenteeMentors { get; set; } = new List<MentorMentee>();

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    public virtual ICollection<OralAssessment> OralAssessmentSmes { get; set; } = new List<OralAssessment>();

    public virtual ICollection<OralAssessment> OralAssessmentStudents { get; set; } = new List<OralAssessment>();

    public virtual ICollection<OralQuestionAnswer> OralQuestionAnswerSmes { get; set; } = new List<OralQuestionAnswer>();

    public virtual ICollection<OralQuestionAnswer> OralQuestionAnswerStudents { get; set; } = new List<OralQuestionAnswer>();

    public virtual ICollection<PerformanceSnapshot> PerformanceSnapshots { get; set; } = new List<PerformanceSnapshot>();

    public virtual ICollection<PersonalInformation> PersonalInformations { get; set; } = new List<PersonalInformation>();

    public virtual ICollection<ProfessionalInformation> ProfessionalInformations { get; set; } = new List<ProfessionalInformation>();

    public virtual ICollection<ProjectMember> ProjectMembers { get; set; } = new List<ProjectMember>();

    public virtual ICollection<Project> Projects { get; set; } = new List<Project>();

    public virtual ICollection<Referral> Referrals { get; set; } = new List<Referral>();

    public virtual ICollection<ShortlistedCandidate> ShortlistedCandidates { get; set; } = new List<ShortlistedCandidate>();

    public virtual ICollection<StudentAssessmentResult> StudentAssessmentResults { get; set; } = new List<StudentAssessmentResult>();

    public virtual ICollection<StudentConceptProgress> StudentConceptProgresses { get; set; } = new List<StudentConceptProgress>();

    public virtual ICollection<UserLog> UserLogs { get; set; } = new List<UserLog>();

    public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
}
