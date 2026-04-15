using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Language
{
    public long Id { get; set; }

    public string? Language1 { get; set; }

    public long? RuntimeId { get; set; }

    public virtual ICollection<Framework> Frameworks { get; set; } = new List<Framework>();

    public virtual Runtime? Runtime { get; set; }
}
