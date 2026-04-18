using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class OralQuestionAnswer
{
    public long Id { get; set; }

    public string? Questions { get; set; }

    public long? StudentId { get; set; }

    public string? Answer { get; set; }

    public string? Rating { get; set; }

    public long? SmeId { get; set; }

    public string? Remark { get; set; }

    public virtual User? Sme { get; set; }

    public virtual User? Student { get; set; }
}
