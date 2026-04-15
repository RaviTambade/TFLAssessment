using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using AssessmentQuestions.DTOs; // Ensure this namespace is correct

namespace AssessmentQuestions.Repositories
{
    public class AssessmentQuestionRepository:IAssessmentQuestionRepository
    {
        // Adding '?' makes it nullable, or initialize with 'default!' 
        // to tell the compiler: "Trust me, DI will provide this."
        private readonly AppDbContext _context;

        public AssessmentQuestionRepository(AppDbContext context)
        {
            // The ?? throw ensures the context is never null
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<List<AssessmentQuestionDto>> GetAssessmentQuestions(int assessmentId)
        {
            // We use .Set<T>() to access the keyless entity defined in the Context
            return await _context.Set<AssessmentQuestionDto>()
                .FromSqlInterpolated($@"
                    SELECT
                    ques.question_id        AS QuestionId,
                     ques.description        AS Description,
                    ques.question_type      AS QuestionType,
                    mcq.option_a            AS OptionA,
                    mcq.option_b            AS OptionB,
                    mcq.option_c            AS OptionC,
                    mcq.option_d            AS OptionD
                    FROM assessments AS asm
                    INNER JOIN tests AS tst
                    ON asm.test_id = tst.id
                    INNER JOIN test_questions AS testQues
                     ON testQues.test_id = tst.id
                    INNER JOIN questions AS ques
                    ON ques.question_id = testQues.question_id
                    INNER JOIN mcq_options AS mcq
                     ON mcq.question_id = ques.question_id
                    WHERE asm.id = 4
                    ORDER BY testQues.sequence_order ASC;
                ")
                .ToListAsync();
        }
    }
}