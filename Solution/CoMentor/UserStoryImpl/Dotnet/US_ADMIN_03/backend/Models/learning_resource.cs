using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class learning_resource
{
    public long id { get; set; }

    public string title { get; set; } = null!;

    public string? description { get; set; }

    public string? resource_url { get; set; }

    public string? type { get; set; }

    public long? uploaded_by { get; set; }

    public string? status { get; set; }

    public DateTime? created_at { get; set; }

    public virtual user? uploaded_byNavigation { get; set; }
}
