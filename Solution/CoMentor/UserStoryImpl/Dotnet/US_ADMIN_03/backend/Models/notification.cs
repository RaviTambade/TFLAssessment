using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class notification
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public long? notification_categories_id { get; set; }

    public string? message { get; set; }

    public DateTime? created_at { get; set; }

    public virtual notification_category? notification_categories { get; set; }

    public virtual user? user { get; set; }
}
