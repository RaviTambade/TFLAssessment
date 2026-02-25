using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

public class AuthRepository : IAuthRepository
{
    
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public AuthRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<User> GetUserWithRolesByEmail(string email, string password)
    {
        User? user = null;

        string query = @"
            SELECT u.id AS UserId, u.aadharid, u.firstname, u.lastname, u.email, u.contactnumber, u.password,
                   ur.id AS UserRoleId, ur.roleid, r.name AS RoleName, r.lob
            FROM users u
            LEFT JOIN userroles ur ON u.id = ur.userid
            LEFT JOIN roles r ON ur.roleid = r.id
            WHERE u.email = @Email AND u.password=@Password";

        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        {
            try
            {
                await connection.OpenAsync();
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@Password", password);
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            if (user == null)
                            {
                                user = new User
                                {
                                    Id = reader.GetInt32("UserId"),
                                    AadharId = reader.GetString("aadharid"),
                                    Firstname = reader.GetString("firstname"),
                                    Lastname = reader.GetString("lastname"),
                                    Email = reader.GetString("email"),
                                    ContactNumber = reader.GetString("contactnumber"),
                                    Password = reader.GetString("password"),
                                    UserRoles = new List<UserRole>()
                                };
                            }

                            // Only add role if role info is present
                            if (!reader.IsDBNull(reader.GetOrdinal("UserRoleId")))
                            {
                                var userRole = new UserRole
                                {
                                    Id = reader.GetInt32("UserRoleId"),
                                    UserId = user.Id,
                                    RoleId = reader.GetInt32("roleid"),
                                    Role = new Role
                                    {
                                        Id = reader.GetInt32("roleid"),
                                        Name = reader.GetString("RoleName"),
                                        Lob = reader.GetString("lob")
                                    }
                                };
                                user.UserRoles.Add(userRole);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error fetching user: " + ex.Message);
            }
        }

        return user;
    }
    public async Task<bool> AddUser(User user)
{
    string query = @"INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ( @Aadharid, @Firstname,@Lastname, @Email, @Contactnumber, @Password)";
    
    using (MySqlConnection connection = new MySqlConnection(_connectionString))
    using (MySqlCommand command = new MySqlCommand(query, connection))
    {
        command.Parameters.AddWithValue("@Aadharid", user.AadharId);
        command.Parameters.AddWithValue("@Firstname",user.Firstname);
        command.Parameters.AddWithValue("@Lastname",user.Lastname);
        command.Parameters.AddWithValue("@Email",user.Email);
        command.Parameters.AddWithValue("@Contactnumber",user.ContactNumber);
        command.Parameters.AddWithValue("@Password",user.Password);
        try
        {
           
             await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();

            return rowsAffected > 0;
        }
        catch (Exception e)
        {
             Console.WriteLine($"DB Error: {e.Message}");
            return false; // ❌ Return false on failure
        
        }
        finally
        {
            await connection.CloseAsync();
        }
    }
}

public async Task<bool> CheckOldPassword(string email, string oldPassword)
{
    string query = @"SELECT COUNT(*) 
                     FROM users 
                     WHERE email = @Email AND password = @Password";

    using (MySqlConnection connection = new MySqlConnection(_connectionString))
    {
        await connection.OpenAsync();

        using (MySqlCommand command = new MySqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Password", oldPassword);

            int count = Convert.ToInt32(await command.ExecuteScalarAsync());
             Console.WriteLine($"Counter: {count}");
            return count == 1;  // Found → correct password
        }
    }
}
public async Task<bool> UpdatePassword(string email, string newPassword)
{
    string query = @"UPDATE users 
                     SET password = @Password 
                     WHERE email = @Email";

    using (MySqlConnection connection = new MySqlConnection(_connectionString))
    {
        await connection.OpenAsync();

        using (MySqlCommand command = new MySqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Password", newPassword);

            int rows = await command.ExecuteNonQueryAsync();
            return rows > 0;   
        }
    }
}



}
