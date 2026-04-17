using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class QuestionFrameworkConcept
{
    public long Id { get; set; }

    public long? QuestionId { get; set; }

    public long? FrameworkId { get; set; }
}
