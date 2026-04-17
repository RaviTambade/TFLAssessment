using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class HandsOnResult
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public long? QuestionId { get; set; }

    public long? Score { get; set; }

    public long? SmeId { get; set; }

    public bool? Status { get; set; }

    public virtual Question? Question { get; set; }

    public virtual User? Sme { get; set; }

    public virtual User? User { get; set; }
}
