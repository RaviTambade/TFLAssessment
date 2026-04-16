using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class test_question
{
    public long id { get; set; }

    public long? test_id { get; set; }

    public long? question_id { get; set; }

    public long? sequence_order { get; set; }

    public virtual question? question { get; set; }

    public virtual test? test { get; set; }
}
