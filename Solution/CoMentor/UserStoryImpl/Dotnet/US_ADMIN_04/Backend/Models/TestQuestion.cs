using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class TestQuestion
{
    public long Id { get; set; }

    public long? TestId { get; set; }

    public long? QuestionId { get; set; }

    public long? SequenceOrder { get; set; }

    public virtual Question? Question { get; set; }

    public virtual Test? Test { get; set; }
}
