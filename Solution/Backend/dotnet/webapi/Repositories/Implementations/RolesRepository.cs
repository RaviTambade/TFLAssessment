using MySql.Data.MySqlClient;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;

namespace backend.Repositories;

public class RolesRepository : IRolesRepository
{
    private readonly IConfiguration _configuration;

    public RolesRepository(IConfiguration configuration)
    {
        _configuration = configuration;
    }

   
    public async Task<int> GetActiveRolesCount()
    {
        using MySqlConnection con = new MySqlConnection(
            _configuration.GetConnectionString("DefaultConnection"));

        string query = @"
            SELECT COUNT(DISTINCT r.role_id)
            FROM roles r
            INNER JOIN user_roles ur
                ON r.role_id = ur.role_id
            INNER JOIN users u
                ON ur.user_id = u.id
            WHERE u.status = 'ACTIVE'
            AND ur.status = 'ACTIVE';";

        MySqlCommand cmd = new MySqlCommand(query, con);

        await con.OpenAsync();

        return Convert.ToInt32(await cmd.ExecuteScalarAsync());
    }



    public async Task<List<ActiveRole>> GetActiveRoles()
    {
        List<ActiveRole> roles = new List<ActiveRole>();

        using MySqlConnection con = new MySqlConnection(
            _configuration.GetConnectionString("DefaultConnection"));

        string query = @"
            SELECT
                r.role_id,
                r.role_name,
                COUNT(u.id) AS UserCount
            FROM roles r
            INNER JOIN user_roles ur
                ON r.role_id = ur.role_id
            INNER JOIN users u
                ON ur.user_id = u.id
            WHERE
                u.status = 'ACTIVE'
                AND ur.status = 'ACTIVE'
            GROUP BY
                r.role_id,
                r.role_name
            ORDER BY
                r.role_name;";

        MySqlCommand cmd = new MySqlCommand(query, con);

        await con.OpenAsync();

        using MySqlDataReader reader =
            (MySqlDataReader)await cmd.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            roles.Add(new ActiveRole
            {
                RoleId = Convert.ToInt64(reader["role_id"]),
                RoleName = reader["role_name"].ToString()!,
                UserCount = Convert.ToInt32(reader["UserCount"])
            });
        }

        return roles;
    }

    // Get Users By Role
    public async Task<List<RoleUser>> GetUsersByRole(long roleId)
    {
        List<RoleUser> users = new List<RoleUser>();

        using MySqlConnection con = new MySqlConnection(
            _configuration.GetConnectionString("DefaultConnection"));

        string query = @"
            SELECT DISTINCT
                u.id,
                p.first_name,
                p.last_name,
                p.email,
                u.contact
            FROM users u
            INNER JOIN user_roles ur
                ON u.id = ur.user_id
            INNER JOIN personal_informations p
                ON u.id = p.user_id
            WHERE
                ur.role_id = @roleId
                AND u.status = 'ACTIVE'
                AND ur.status = 'ACTIVE'
            ORDER BY
                p.first_name;";

        MySqlCommand cmd = new MySqlCommand(query, con);

        cmd.Parameters.AddWithValue("@roleId", roleId);

        await con.OpenAsync();

        using MySqlDataReader reader =
            (MySqlDataReader)await cmd.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            users.Add(new RoleUser
            {
                UserId = Convert.ToInt64(reader["id"]),
                FirstName = reader["first_name"].ToString()!,
                LastName = reader["last_name"].ToString()!,
            });
        }

        return users;
    }
}