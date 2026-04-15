using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LearningPathProgress
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public long? LearningPathId { get; set; }

    public decimal? OverallScore { get; set; }

    public decimal? AveragePercentage { get; set; }

    public decimal? ImprovementRate { get; set; }

    public int? MinScore { get; set; }

    public int? MaxScore { get; set; }

    public virtual LearningPath? LearningPath { get; set; }

    public virtual User? Student { get; set; }
}
