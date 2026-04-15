using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class user
{
    public long id { get; set; }

    public string? contact { get; set; }

    public string? password { get; set; }

    public string? status { get; set; }

    public DateTime? created_at { get; set; }

    public DateTime? updated_at { get; set; }

    public virtual ICollection<academic_information> academic_informations { get; set; } = new List<academic_information>();

    public virtual ICollection<alumnus> alumni { get; set; } = new List<alumnus>();

    public virtual ICollection<assessment> assessmentassigned_byNavigations { get; set; } = new List<assessment>();

    public virtual ICollection<assessment> assessmentstudents { get; set; } = new List<assessment>();

    public virtual ICollection<hands_on_result> hands_on_resultsmes { get; set; } = new List<hands_on_result>();

    public virtual ICollection<hands_on_result> hands_on_resultusers { get; set; } = new List<hands_on_result>();

    public virtual ICollection<hands_on_submission> hands_on_submissions { get; set; } = new List<hands_on_submission>();

    public virtual ICollection<job_application> job_applications { get; set; } = new List<job_application>();

    public virtual ICollection<job_description> job_descriptions { get; set; } = new List<job_description>();

    public virtual ICollection<learning_path_progress> learning_path_progresses { get; set; } = new List<learning_path_progress>();

    public virtual ICollection<learning_path> learning_paths { get; set; } = new List<learning_path>();

    public virtual ICollection<learning_resource> learning_resources { get; set; } = new List<learning_resource>();

    public virtual ICollection<mentor_appointment> mentor_appointmentmentors { get; set; } = new List<mentor_appointment>();

    public virtual ICollection<mentor_appointment> mentor_appointmentstudents { get; set; } = new List<mentor_appointment>();

    public virtual ICollection<mentor_counseling> mentor_counselingmentees { get; set; } = new List<mentor_counseling>();

    public virtual ICollection<mentor_counseling> mentor_counselingmentors { get; set; } = new List<mentor_counseling>();

    public virtual ICollection<mentor_feedback> mentor_feedbackmentors { get; set; } = new List<mentor_feedback>();

    public virtual ICollection<mentor_feedback> mentor_feedbackstudents { get; set; } = new List<mentor_feedback>();

    public virtual ICollection<mentor_mentee> mentor_menteementees { get; set; } = new List<mentor_mentee>();

    public virtual ICollection<mentor_mentee> mentor_menteementors { get; set; } = new List<mentor_mentee>();

    public virtual ICollection<notification> notifications { get; set; } = new List<notification>();

    public virtual ICollection<oral_assessment> oral_assessmentsmes { get; set; } = new List<oral_assessment>();

    public virtual ICollection<oral_assessment> oral_assessmentstudents { get; set; } = new List<oral_assessment>();

    public virtual ICollection<oral_question_answer> oral_question_answersmes { get; set; } = new List<oral_question_answer>();

    public virtual ICollection<oral_question_answer> oral_question_answerstudents { get; set; } = new List<oral_question_answer>();

    public virtual ICollection<performance_snapshot> performance_snapshots { get; set; } = new List<performance_snapshot>();

    public virtual ICollection<personal_information> personal_informations { get; set; } = new List<personal_information>();

    public virtual ICollection<professional_information> professional_informations { get; set; } = new List<professional_information>();

    public virtual ICollection<project_member> project_members { get; set; } = new List<project_member>();

    public virtual ICollection<project> projects { get; set; } = new List<project>();

    public virtual ICollection<referral> referrals { get; set; } = new List<referral>();

    public virtual ICollection<shortlisted_candidate> shortlisted_candidates { get; set; } = new List<shortlisted_candidate>();

    public virtual ICollection<student_assessment_result> student_assessment_results { get; set; } = new List<student_assessment_result>();

    public virtual ICollection<student_concept_progress> student_concept_progresses { get; set; } = new List<student_concept_progress>();

    public virtual ICollection<user_log> user_logs { get; set; } = new List<user_log>();

    public virtual ICollection<user_role> user_roles { get; set; } = new List<user_role>();
}
