using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class test
{
    public long id { get; set; }

    public long? sme_runtime_id { get; set; }

    public string? title { get; set; }

    public long? duration { get; set; }

    public string? description { get; set; }

    public string? difficulty { get; set; }

    public DateTime? created_at { get; set; }

    public bool? status { get; set; }

    public virtual ICollection<assessment> assessments { get; set; } = new List<assessment>();

    public virtual sme_runtime? sme_runtime { get; set; }

    public virtual ICollection<test_question> test_questions { get; set; } = new List<test_question>();
}
