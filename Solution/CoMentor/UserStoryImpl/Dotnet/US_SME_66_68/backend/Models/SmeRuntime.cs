using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class SmeRuntime
{
    public long SmeRuntimeId { get; set; }

    public long? UserId { get; set; }

    public long? RuntimeId { get; set; }
}
