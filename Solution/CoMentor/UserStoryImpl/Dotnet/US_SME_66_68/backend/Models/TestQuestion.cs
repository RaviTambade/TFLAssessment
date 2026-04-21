using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class TestQuestion
{
    public int Id { get; set; }

    public long? TestId { get; set; }

    public long? QuestionId { get; set; }

    public int? SequenceOrder { get; set; }
}
