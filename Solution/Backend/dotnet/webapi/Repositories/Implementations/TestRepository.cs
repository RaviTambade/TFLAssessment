using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using MySql.Data.MySqlClient;
using System.Data;
using backend.DTOs;
using backend.Repositories.Interfaces;

namespace backend.Repositories
{
    public class CreateTestRepository : ICreateTestRepository
    {
        private readonly AppDbContext _context;

        public CreateTestRepository(AppDbContext context)
        {
            _context = context;
        }


    public async Task<List<QuestionsDto>> GetQuestionsByConceptAsync(string concept)
        {
            List<QuestionsDto> questions = new List<QuestionsDto>();

            string query = @"SELECT  q.question_id, q.description, q.question_type,q.difficulty_level,
                            m.option_a,m.option_b,m.option_c,m.option_d, m.correct_answer
                            FROM questions q INNER JOIN mcq_options m ON q.question_id = m.question_id and language='" + concept + "';";

            string connectionString = "server=192.168.1.149;port=3306;database=tflcomentor_db;user=root;password='password'";
            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                await con.OpenAsync();
                using (MySqlCommand cmd = new MySqlCommand(query, con))
                {
                    using (var reader = await cmd.ExecuteReaderAsync())
                    {

                        while (await reader.ReadAsync())
                        {
                            questions.Add(new QuestionsDto
                            {
                                QuestionId = reader.GetInt32("question_id"),
                                Description = reader.GetString("description"),
                                QuestionType = reader.GetString("question_type"),
                                DifficultyLevel = reader.GetString("difficulty_level"),
                                OptionA = reader.GetString("option_a"),
                                OptionB = reader.GetString("option_b"),
                                OptionC = reader.GetString("option_c"),
                                OptionD = reader.GetString("option_d"),
                                CorrectAnswer = reader.GetString("correct_answer")
                            });
                        }
                    }
                }
            }

            return  questions;
        }

 public async Task<bool> CancelTestAsync(int id)
    {
        var test = await _context.Tests
            .FirstOrDefaultAsync(x => x.Id == id);

        if (test == null)
        {
            return false;
        }

        // Make inactive
        test.Status = false;

        await _context.SaveChangesAsync();

        return true;
    }


    public async Task<long> CreateTestAsync(CreateTestRequestDto dto)
        {

             if (dto.SmeId <= 0)
        throw new ArgumentException("SmeId must be supplied and greater than 0.");

    var smeExists = await _context.SmeRuntimes
                       .AnyAsync(sr => sr.SmeRuntimeId == dto.SmeId);
    if (!smeExists)
        throw new ArgumentException($"SmeRuntime with id {dto.SmeId} not found.");

            var test = new Test
            {
                Title = dto.Title,
                Duration = (int)dto.Duration,
        Difficulty = dto.SkillLevel,
        SmeRuntimeId = dto.SmeId,
         Description = dto.Description, 
                CreatedAt = DateTime.Now,
                Status = true
            };

            _context.Tests.Add(test);
            await _context.SaveChangesAsync();

            long seq = 1;

            if (dto.QuestionIds != null)
            {
                foreach (var q in dto.QuestionIds)
            {
                _context.TestQuestions.Add(new TestQuestion
                {
                        TestId = test.Id,
                        QuestionId = q,
                        SequenceOrder = (int)seq++
                });
            }
            }

            await _context.SaveChangesAsync();

            return test.Id;
        }
    }
}