using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class concept
{
    public long id { get; set; }

    public string name { get; set; } = null!;

    public string? description { get; set; }

    public string? status { get; set; }

    public DateTime? created_at { get; set; }

    public virtual ICollection<framework_concept> framework_concepts { get; set; } = new List<framework_concept>();

    public virtual ICollection<oral_assessment> oral_assessments { get; set; } = new List<oral_assessment>();

    public virtual ICollection<student_concept_progress> student_concept_progresses { get; set; } = new List<student_concept_progress>();
}
