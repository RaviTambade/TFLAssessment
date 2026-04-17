using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class JobDescription
{
    public long JobId { get; set; }

    public long? EmployerId { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? Location { get; set; }

    public string? JobType { get; set; }

    public virtual User? Employer { get; set; }

    public virtual ICollection<JobApplication> JobApplications { get; set; } = new List<JobApplication>();

    public virtual ICollection<ShortlistedCandidate> ShortlistedCandidates { get; set; } = new List<ShortlistedCandidate>();
}
