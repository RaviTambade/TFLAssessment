using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProblemStatementAnswer
{
    public long Id { get; set; }

    public string? Answer { get; set; }

    public long? QuestionId { get; set; }

    public DateTime? SubmittedAt { get; set; }
}
