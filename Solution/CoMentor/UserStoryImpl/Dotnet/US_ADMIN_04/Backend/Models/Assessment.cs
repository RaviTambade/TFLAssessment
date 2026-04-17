using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Assessment
{
    public long Id { get; set; }

    public long? TestId { get; set; }

    public long? StudentId { get; set; }

    public long? AssignedBy { get; set; }

    public DateTime? AssignedAt { get; set; }

    public DateTime? ScheduledAt { get; set; }

    public string Status { get; set; } = null!;

    public virtual User? AssignedByNavigation { get; set; }

    public virtual User? Student { get; set; }

    public virtual ICollection<StudentAssessmentResult> StudentAssessmentResults { get; set; } = new List<StudentAssessmentResult>();

    public virtual Test? Test { get; set; }
}
