using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class language
{
    public long id { get; set; }

    public string? language1 { get; set; }

    public long? runtime_id { get; set; }

    public virtual ICollection<framework> frameworks { get; set; } = new List<framework>();

    public virtual runtime? runtime { get; set; }
}
