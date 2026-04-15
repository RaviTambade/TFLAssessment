using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Framework
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public long? LayerId { get; set; }

    public long? LanguageId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<FrameworkConcept> FrameworkConcepts { get; set; } = new List<FrameworkConcept>();

    public virtual Language? Language { get; set; }

    public virtual Layer? Layer { get; set; }
}
