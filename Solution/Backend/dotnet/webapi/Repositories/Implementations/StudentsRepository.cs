using MySql.Data.MySqlClient;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;
using System.Threading.Tasks;

namespace backend.Repositories.Implementations
{
    public class StudentsRepository : IStudentsRepository
    {
        private readonly IConfiguration _configuration;

        public StudentsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<StudentCounts> GetTotalStudents()
        {
            StudentCounts dto = new StudentCounts();

            string query = @"
                SELECT COUNT(DISTINCT user_id) AS total_students
                FROM user_roles
                WHERE role_id = 2;
            ";

            using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                MySqlCommand cmd = new MySqlCommand(query, con);

                await con.OpenAsync();

                object result = await cmd.ExecuteScalarAsync();

                if (result != null)
                {
                    dto.TotalStudents = Convert.ToInt32(result);
                }
            }

            return dto;
        }

        public async Task<List<StudentResponse>> GetAllStudents()
{
    List<StudentResponse> students = new List<StudentResponse>();

    string query = @"
        SELECT
            u.id,
            pi.full_name,
            u.contact,
            u.status
        FROM users u
        INNER JOIN user_roles ur
            ON u.id = ur.user_id
        INNER JOIN personal_informations pi
            ON u.id = pi.user_id
        WHERE ur.role_id = 2
        ORDER BY pi.full_name;
    ";

    using (MySqlConnection con =
        new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
    {
        await con.OpenAsync();

        MySqlCommand cmd = new MySqlCommand(query, con);

        using (var reader = await cmd.ExecuteReaderAsync())
        {
            while (await reader.ReadAsync())
            {
                students.Add(new StudentResponse
                {
                    Id = Convert.ToInt64(reader["id"]),
                    FullName = reader["full_name"].ToString(),
                    Contact = reader["contact"].ToString(),
                    Status = reader["status"].ToString()
                });
            }
        }
    }

    return students;
}

public async Task<StudentPerformanceResponse?> GetStudentPerformance(long studentId)
{
    StudentPerformanceResponse? performance = null;

    using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
    {
        string query = @"
            SELECT
                sar.student_id,
                COUNT(*) AS total_completed_assessments,
                ROUND(AVG(sar.percentage), 2) AS avg_score
            FROM student_assessment_results sar
            JOIN assessments a
                ON sar.assessment_id = a.id
            WHERE a.status = 'Completed'
              AND sar.student_id = @studentId
            GROUP BY sar.student_id;";

        using (MySqlCommand cmd = new MySqlCommand(query, con))
        {
        cmd.Parameters.AddWithValue("@studentId", studentId);

        await con.OpenAsync();

        using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
        {
            if (await reader.ReadAsync())
            {
                performance = new StudentPerformanceResponse
                {
                    StudentId = (int)reader.GetInt64("student_id"),
                    TotalCompletedAssessments = reader.GetInt32("total_completed_assessments"),
                    AverageScore = (decimal)reader.GetDouble("avg_score")
                };
            }
        }
        }
    }

    return performance;
}


    }
}