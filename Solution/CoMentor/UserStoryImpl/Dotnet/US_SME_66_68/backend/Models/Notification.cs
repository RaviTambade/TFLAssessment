using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Notification
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public long? NotificationCategoriesId { get; set; }

    public string? Message { get; set; }

    public DateTime? CreatedAt { get; set; }
}
