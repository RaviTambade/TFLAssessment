using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Contact { get; set; }

    public string? Password { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<AcademicInformation> AcademicInformations { get; set; } = new List<AcademicInformation>();

    public virtual ICollection<MentorMentee> MentorMenteeMentees { get; set; } = new List<MentorMentee>();

    public virtual ICollection<MentorMentee> MentorMenteeMentors { get; set; } = new List<MentorMentee>();

    public virtual ICollection<PersonalInformation> PersonalInformations { get; set; } = new List<PersonalInformation>();

    public virtual ICollection<ProfessionalInformation> ProfessionalInformations { get; set; } = new List<ProfessionalInformation>();

    public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
}
