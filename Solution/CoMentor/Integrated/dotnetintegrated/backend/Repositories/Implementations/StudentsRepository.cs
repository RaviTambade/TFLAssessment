using MySql.Data.MySqlClient;
using backend.DTOs;
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

        public async Task<StudentCountDto> GetTotalStudents()
        {
            StudentCountDto dto = new StudentCountDto();

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
    }
}