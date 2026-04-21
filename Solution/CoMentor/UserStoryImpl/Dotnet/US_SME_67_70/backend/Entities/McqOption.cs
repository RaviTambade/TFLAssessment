using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class McqOption
{
    public long Id { get; set; }

    public string? OptionA { get; set; }

    public string? OptionB { get; set; }

    public string? OptionC { get; set; }

    public string? OptionD { get; set; }

    public string? CorrectAnswer { get; set; }

    public long? QuestionId { get; set; }

    public virtual Question? Question { get; set; }
}
