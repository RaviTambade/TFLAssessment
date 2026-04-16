using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class McqOption
{
    public int Id { get; set; }

    public string? OptionA { get; set; }

    public string? OptionB { get; set; }

    public string? OptionC { get; set; }

    public string? OptionD { get; set; }

    public string? CorrectAnswer { get; set; }

    public int? QuestionId { get; set; }
}
