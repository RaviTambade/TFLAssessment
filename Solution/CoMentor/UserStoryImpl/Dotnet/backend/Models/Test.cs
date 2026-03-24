using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public partial class Test
{
    public long Id { get; set; }

    public long? SmeId { get; set; }

    public string? Title { get; set; }

    public int? Duration { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Status { get; set; }
    

    
    [Column("difficulty_level")]
     public string? difficultylevel { get; set; }
}
