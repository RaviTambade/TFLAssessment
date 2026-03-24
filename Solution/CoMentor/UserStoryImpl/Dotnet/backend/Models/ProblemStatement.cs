using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProblemStatement
{
    public long Id { get; set; }

    public int? QuestionId { get; set; }

    public string? Description { get; set; }

    public int? Duration { get; set; }
}
