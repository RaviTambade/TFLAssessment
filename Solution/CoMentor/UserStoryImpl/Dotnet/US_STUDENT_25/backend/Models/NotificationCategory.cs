using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class NotificationCategory
{
    public long Id { get; set; }

    public string Category { get; set; } = null!;

    public string? Description { get; set; }

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();
}
