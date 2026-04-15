using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class question_framework_concept
{
    public long id { get; set; }

    public long? question_id { get; set; }

    public long? framework_concepts_id { get; set; }

    public virtual framework_concept? framework_concepts { get; set; }

    public virtual question? question { get; set; }
}
