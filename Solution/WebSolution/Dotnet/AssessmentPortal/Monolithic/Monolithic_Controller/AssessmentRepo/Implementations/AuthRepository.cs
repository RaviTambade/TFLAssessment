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
}
