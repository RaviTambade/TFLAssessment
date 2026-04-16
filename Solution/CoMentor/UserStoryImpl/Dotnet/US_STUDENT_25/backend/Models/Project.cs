using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Project
{
    public long ProjectId { get; set; }

    public long? MentorId { get; set; }

    public string? ProjectName { get; set; }

    public string? Description { get; set; }

    public string? RepositoryUrl { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User? Mentor { get; set; }

    public virtual ICollection<ProjectMember> ProjectMembers { get; set; } = new List<ProjectMember>();
}
