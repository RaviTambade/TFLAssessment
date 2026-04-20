using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class NotificationCategory
{
    public long Id { get; set; }

    public string? Categories { get; set; }

    public string? Description { get; set; }
}
