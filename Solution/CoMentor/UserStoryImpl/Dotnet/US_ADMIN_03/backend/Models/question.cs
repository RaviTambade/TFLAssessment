using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class question
{
    public long question_id { get; set; }

    public string? description { get; set; }

    public string? question_type { get; set; }

    public string? difficulty_level { get; set; }

    public DateTime? created_at { get; set; }

    public string status { get; set; } = null!;

    public virtual ICollection<hands_on_result> hands_on_results { get; set; } = new List<hands_on_result>();

    public virtual ICollection<hands_on_submission> hands_on_submissions { get; set; } = new List<hands_on_submission>();

    public virtual ICollection<mcq_option> mcq_options { get; set; } = new List<mcq_option>();

    public virtual ICollection<problem_statement_answer> problem_statement_answers { get; set; } = new List<problem_statement_answer>();

    public virtual ICollection<question_framework_concept> question_framework_concepts { get; set; } = new List<question_framework_concept>();

    public virtual ICollection<test_question> test_questions { get; set; } = new List<test_question>();
}
