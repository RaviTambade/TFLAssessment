using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Concept
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual ICollection<FrameworkConcept> FrameworkConcepts { get; set; } = new List<FrameworkConcept>();

    public virtual ICollection<OralAssessment> OralAssessments { get; set; } = new List<OralAssessment>();

    public virtual ICollection<StudentConceptProgress> StudentConceptProgresses { get; set; } = new List<StudentConceptProgress>();
}
