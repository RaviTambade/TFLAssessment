using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class framework_concept
{
    public long id { get; set; }

    public long? framework_id { get; set; }

    public long? concept_id { get; set; }

    public virtual concept? concept { get; set; }

    public virtual framework? framework { get; set; }

    public virtual ICollection<question_framework_concept> question_framework_concepts { get; set; } = new List<question_framework_concept>();
}
