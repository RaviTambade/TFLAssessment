using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class oral_question_answer
{
    public long id { get; set; }

    public string? questions { get; set; }

    public long? student_id { get; set; }

    public string? answer { get; set; }

    public string? rating { get; set; }

    public long? sme_id { get; set; }

    public string? remark { get; set; }

    public virtual user? sme { get; set; }

    public virtual user? student { get; set; }
}
