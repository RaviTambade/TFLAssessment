using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Question
{
    public long QuestionId { get; set; }

    public string? Description { get; set; }

    public string? QuestionType { get; set; }

    public string? DifficultyLevel { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Status { get; set; }
}
