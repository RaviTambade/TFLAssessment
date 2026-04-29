using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class HandsOnResult
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? HandsOnId { get; set; }

    public int? Score { get; set; }

    public long? SmeId { get; set; }

    public bool? Status { get; set; }

    public DateTime? SubmittedAt { get; set; }
}
