using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class FrameworkConcept
{
    public long Id { get; set; }

    public long? FrameworkId { get; set; }

    public long? ConceptId { get; set; }

    public virtual Concept? Concept { get; set; }

    public virtual Framework? Framework { get; set; }

    public virtual ICollection<QuestionFrameworkConcept> QuestionFrameworkConcepts { get; set; } = new List<QuestionFrameworkConcept>();
}
