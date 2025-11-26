using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;

public class UserAnalyticsRepository : IUserAnalyticsRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public UserAnalyticsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }
    public async Task<double> GetTotalOnlineSecondsAsync(int userId)
    {
        double secondCount = 0;
        string query = @"SELECT 
                        TIMESTAMPDIFF(SECOND, login_time, COALESCE(logout_time, NOW())) AS DurationSeconds
                    FROM user_session where user_id=@uid;
                    ";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
       
        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@uid",userId);
            MySqlDataReader reader = command.ExecuteReader();

            reader.Read();
            secondCount = double.Parse(reader["DurationSeconds"].ToString());

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }

        return secondCount;
    }
    public async Task<int> GetActiveUsersCountAsync()
    {
        int activeUser = 0;
        string query = @"SELECT COUNT(DISTINCT user_id) as activeuser
                    FROM user_session
                    WHERE session_status = 'ACTIVE';
                    ";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            reader.Read();
            activeUser = int.Parse(reader["activeuser"].ToString());

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }

        return activeUser;
    }
    public async Task<int> GetUserCount()
    {
        int allUserCount = 0;
        string query = @"SELECT COUNT(DISTINCT user_id) AS allUserCount
                        FROM user_session;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            reader.Read();
            allUserCount = int.Parse(reader["allUserCount"].ToString());

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return allUserCount;
    }
    public async Task<List<User>> GetTopTenUser()
    {
        List<User> topUsers = new List<User>();

        string query = @"
        SELECT 
            us.user_id,
            e.firstname,
            e.lastname,
            e.email,
            GROUP_CONCAT(DISTINCT r.name) AS roles,
            SEC_TO_TIME(
                MAX(TIMESTAMPDIFF(SECOND, us.login_time, COALESCE(us.logout_time, NOW())))
            ) AS longest_session
        FROM user_session us
        JOIN employees e ON e.id = us.user_id
        LEFT JOIN userroles ur ON ur.userid = e.id
        LEFT JOIN roles r ON r.id = ur.roleid
        GROUP BY us.user_id, e.firstname, e.lastname
        ORDER BY longest_session DESC
        LIMIT 10;
    ";

        using MySqlConnection connection = new MySqlConnection(_connectionString);
        using MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                User user = new User
                {
                    Id = int.Parse(reader["user_id"].ToString()),
                    Firstname = reader["firstname"].ToString(),
                    Lastname = reader["lastname"].ToString(),
                    Email = reader["email"].ToString(),
                    UserRoles = new List<UserRole>()
                };

                string rolesString = reader["roles"] == DBNull.Value
                                     ? ""
                                     : reader["roles"].ToString();

                if (!string.IsNullOrEmpty(rolesString))
                {
                    foreach (var roleName in rolesString.Split(','))
                    {
                        user.UserRoles.Add(new UserRole
                        {
                            Role = new Role
                            {
                                Name = roleName.Trim()
                            }
                        });
                    }
                }

                topUsers.Add(user);
            }

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }

        return topUsers;
    }


    public async Task<String> GetAverageSessionDurationAsync()
    {
        String avgSessionSeconds=null;
        string query = @"SELECT 
                            TIME_FORMAT(
                                SEC_TO_TIME(
                                    AVG(
                                        TIMESTAMPDIFF(
                                            SECOND,
                                            login_time,
                                            COALESCE(logout_time, NOW())
                                        )
                                    )
                                ),
                                '%H:%i:%s'
                            ) AS AvgSessionDuration
                        FROM user_session
                        WHERE MONTH(login_time) = MONTH(CURRENT_DATE())
                        AND YEAR(login_time) = YEAR(CURRENT_DATE());";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            reader.Read();
            avgSessionSeconds = reader["AvgSessionDuration"].ToString();

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return avgSessionSeconds;

    }
    
    public async Task<List<User>> GetActiveUsers()
    {

        List<User> activeusers = new List<User>();

        string query = @"
                    SELECT 
                    u.id AS user_id,
                    u.firstname,
                    u.lastname,
                    u.email,
                    GROUP_CONCAT(DISTINCT r.name ORDER BY r.name) AS roles
                FROM user_session us
                JOIN employees u ON u.id = us.user_id
                LEFT JOIN userroles ur ON ur.userid = u.id
                LEFT JOIN roles r ON r.id = ur.roleid
                WHERE us.session_status = 'ACTIVE'
                GROUP BY u.id, u.firstname, u.lastname;
                ";

        using MySqlConnection connection = new MySqlConnection(_connectionString);
        using MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                User user = new User
                {
                    Id = int.Parse(reader["user_id"].ToString()),
                    Firstname = reader["firstname"].ToString(),
                    Lastname = reader["lastname"].ToString(),
                    Email = reader["email"].ToString(),
                UserRoles = new List<UserRole>()
                };

                string rolesString = reader["roles"] == DBNull.Value
                                     ? ""
                                     : reader["roles"].ToString();

                if (!string.IsNullOrEmpty(rolesString))
                {
                    foreach (var roleName in rolesString.Split(','))
                    {
                        user.UserRoles.Add(new UserRole
                        {
                            Role = new Role
                            {
                                Name = roleName.Trim()
                            }
                        });
                    }
                }

                activeusers.Add(user);
            }

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }

        return activeusers;
    }
    // Task<IEnumerable<UserSession>> GetUserSessionsAsync(long userId, DateTime? start, DateTime? end);

    public async Task<List<User>> GetAllUsers()
    {
        List<User> allusers = new List<User>();

        string query = @"
                    SELECT 
                    u.id AS user_id,
                    u.firstname,
                    u.lastname,
                    u.email,
                    GROUP_CONCAT(DISTINCT r.name) AS roles
                FROM user_session us
                JOIN employees u ON u.id = us.user_id
                LEFT JOIN userroles ur ON ur.userid = u.id
                LEFT JOIN roles r ON r.id = ur.roleid
                GROUP BY u.id, u.firstname, u.lastname, u.email;
                ";

        using MySqlConnection connection = new MySqlConnection(_connectionString);
        using MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                User user = new User
                {
                    Id = int.Parse(reader["user_id"].ToString()),
                    Firstname = reader["firstname"].ToString(),
                    Lastname = reader["lastname"].ToString(),
                    Email = reader["email"].ToString(),
                UserRoles = new List<UserRole>()
                };

                string rolesString = reader["roles"] == DBNull.Value
                                     ? ""
                                     : reader["roles"].ToString();

                if (!string.IsNullOrEmpty(rolesString))
                {
                    foreach (var roleName in rolesString.Split(','))
                    {
                        user.UserRoles.Add(new UserRole
                        {
                            Role = new Role
                            {
                                Name = roleName.Trim()
                            }
                        });
                    }
                }
                allusers.Add(user);
            }

            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }

        return allusers;
    }
}
