using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LearningResource
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? ResourceUrl { get; set; }

    public string? Type { get; set; }

    public long? UploadedBy { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Status { get; set; }
    public long? QuestionId { get; set; }

    public long? LanguageId { get; set; }

}
