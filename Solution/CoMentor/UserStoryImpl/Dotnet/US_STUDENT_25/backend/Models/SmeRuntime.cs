using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SmeRuntime
{
    public long SmeRuntimeId { get; set; }

    public long? UserRolesId { get; set; }

    public long? RuntimeId { get; set; }

    public virtual Runtime? Runtime { get; set; }

    public virtual ICollection<Test> Tests { get; set; } = new List<Test>();
}
