using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class framework
{
    public long id { get; set; }

    public string name { get; set; } = null!;

    public long? layer_id { get; set; }

    public long? language_id { get; set; }

    public DateTime? created_at { get; set; }

    public DateTime? updated_at { get; set; }

    public virtual ICollection<framework_concept> framework_concepts { get; set; } = new List<framework_concept>();

    public virtual language? language { get; set; }

    public virtual layer? layer { get; set; }
}
