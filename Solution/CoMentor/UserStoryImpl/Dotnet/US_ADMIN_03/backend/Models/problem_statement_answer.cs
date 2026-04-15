using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class problem_statement_answer
{
    public long id { get; set; }

    public string? answer { get; set; }

    public long? question_id { get; set; }

    public DateTime? submitted_at { get; set; }

    public virtual question? question { get; set; }
}
