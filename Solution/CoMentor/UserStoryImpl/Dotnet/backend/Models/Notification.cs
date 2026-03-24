using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Notification
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public long? NotificationCategoriesId { get; set; }

    public string? Message { get; set; }

    public DateTime? CreatedAt { get; set; }
}
