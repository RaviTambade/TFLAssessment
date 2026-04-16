using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class hands_on_submission
{
    public long id { get; set; }

    public long? question_id { get; set; }

    public long? user_id { get; set; }

    public string? github_link { get; set; }

    public DateTime? submitted_at { get; set; }

    public virtual question? question { get; set; }

    public virtual user? user { get; set; }
}
