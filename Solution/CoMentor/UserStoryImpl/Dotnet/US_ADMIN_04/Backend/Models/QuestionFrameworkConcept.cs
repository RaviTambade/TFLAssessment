using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class QuestionFrameworkConcept
{
    public long Id { get; set; }

    public long? QuestionId { get; set; }

    public long? FrameworkConceptsId { get; set; }

    public virtual FrameworkConcept? FrameworkConcepts { get; set; }

    public virtual Question? Question { get; set; }
}
