using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class hands_on_result
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public long? question_id { get; set; }

    public long? score { get; set; }

    public long? sme_id { get; set; }

    public bool? status { get; set; }

    public virtual question? question { get; set; }

    public virtual user? sme { get; set; }

    public virtual user? user { get; set; }
}
