using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class Question
{
    public long QuestionId { get; set; }

    public string? Description { get; set; }

    public string? QuestionType { get; set; }

    public string? DifficultyLevel { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<HandsOnResult> HandsOnResults { get; set; } = new List<HandsOnResult>();

    public virtual ICollection<HandsOnSubmission> HandsOnSubmissions { get; set; } = new List<HandsOnSubmission>();

    public virtual ICollection<McqOption> McqOptions { get; set; } = new List<McqOption>();

    public virtual ICollection<ProblemStatementAnswer> ProblemStatementAnswers { get; set; } = new List<ProblemStatementAnswer>();

    public virtual ICollection<QuestionFrameworkConcept> QuestionFrameworkConcepts { get; set; } = new List<QuestionFrameworkConcept>();

    public virtual ICollection<TestQuestion> TestQuestions { get; set; } = new List<TestQuestion>();
}
