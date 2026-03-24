using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class UserLog
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public DateTime? LoginTime { get; set; }

    public DateTime? LogoutTime { get; set; }
}
