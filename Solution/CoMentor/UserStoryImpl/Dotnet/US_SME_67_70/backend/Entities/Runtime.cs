using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class Runtime
{
    public long Id { get; set; }

    public string RuntimeName { get; set; } = null!;

    public virtual ICollection<Language> Languages { get; set; } = new List<Language>();

    public virtual ICollection<SmeRuntime> SmeRuntimes { get; set; } = new List<SmeRuntime>();
}
