using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class learning_path_progress
{
    public long id { get; set; }

    public long? student_id { get; set; }

    public long? learning_path_id { get; set; }

    public decimal? overall_score { get; set; }

    public decimal? average_percentage { get; set; }

    public decimal? improvement_rate { get; set; }

    public int? min_score { get; set; }

    public int? max_score { get; set; }

    public virtual learning_path? learning_path { get; set; }

    public virtual user? student { get; set; }
}
