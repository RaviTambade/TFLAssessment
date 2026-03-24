using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SmeRuntime
{
    public long SmeRuntimeId { get; set; }

    public long? UserId { get; set; }

    public long? RuntimeId { get; set; }
}
