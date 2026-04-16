using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class StudentConceptProgress
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public long? ConceptId { get; set; }

    public string? Status { get; set; }

    public DateTime? InitiatedAt { get; set; }

    public DateTime? CompletedAt { get; set; }
}
