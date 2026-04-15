using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class mcq_option
{
    public long id { get; set; }

    public string? option_a { get; set; }

    public string? option_b { get; set; }

    public string? option_c { get; set; }

    public string? option_d { get; set; }

    public string? correct_answer { get; set; }

    public long? question_id { get; set; }

    public virtual question? question { get; set; }
}
