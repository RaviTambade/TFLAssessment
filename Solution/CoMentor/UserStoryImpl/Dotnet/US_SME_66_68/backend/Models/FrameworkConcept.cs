using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class FrameworkConcept
{
    public int Id { get; set; }

    public int? FrameworkId { get; set; }

    public int? ConceptId { get; set; }
}
