using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LearningPathProgress
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public decimal? OverallScore { get; set; }

    public decimal? AveragePercentage { get; set; }

    public decimal? ImprovementRate { get; set; }

    public long? PerformanceLevelId { get; set; }

    public int? MinScore { get; set; }

    public int? MaxScore { get; set; }
}
