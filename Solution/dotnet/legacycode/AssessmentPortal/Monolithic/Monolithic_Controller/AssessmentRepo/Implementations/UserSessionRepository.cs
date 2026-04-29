using MySql.Data.MySqlClient;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;

public class UserSessionRepository : IUserSessionRepository
{
 private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public UserSessionRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }

    // Create Login Session
public async Task<bool> CreateLoginAsync(long userId)
{
    using var con = new MySqlConnection(_connectionString);
    await con.OpenAsync();

    string query = @"
        INSERT INTO user_session (user_id, login_time, session_status)
        VALUES (@UserId, NOW(), 'ACTIVE');";

    using var cmd = new MySqlCommand(query, con);
    cmd.Parameters.AddWithValue("@UserId", userId);

    int rows = await cmd.ExecuteNonQueryAsync();
    return rows > 0;   // true = success
}

    public async Task<bool> LogoutAsync(long userId)
{
    using var con = new MySqlConnection(_connectionString);
    await con.OpenAsync();

    string query = @"
        UPDATE user_session
        SET logout_time = NOW(), session_status = 'INACTIVE'
        WHERE user_id = @UserId AND session_status = 'ACTIVE';
    ";

    using var cmd = new MySqlCommand(query, con);
    cmd.Parameters.AddWithValue("@UserId", userId);

    int rows = await cmd.ExecuteNonQueryAsync();
    return rows > 0;   // true = logout success
}
public async Task<IEnumerable<UserSession>> GetUserHistory(int userId)
{
    List<UserSession> history = new List<UserSession>();

    string query = @"SELECT id, user_id, login_time, logout_time, session_status
                     FROM user_session
                     WHERE user_id = @UserId
                     ORDER BY login_time DESC";

    using (MySqlConnection connection = new MySqlConnection(_connectionString))
    {
        await connection.OpenAsync();

        using (MySqlCommand cmd = new MySqlCommand(query, connection))
        {
            cmd.Parameters.AddWithValue("@UserId", userId);

            using (var reader = await cmd.ExecuteReaderAsync())
            {
                while (await reader.ReadAsync())
                {
                    history.Add(new UserSession
                    {
                        Id = reader.GetInt64(0),               
                        UserId = reader.GetInt32(1),             
                        LoginTime = reader.GetDateTime(2),       
                        LogoutTime = reader.IsDBNull(3)
                                    ? null
                                    : reader.GetDateTime(3),      
                        SessionStatus = reader.GetString(4)      
                    });
                }
            }
        }
    }

    return history;
}


 }




