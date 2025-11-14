using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

public class UserRegistrationRepository : IUserRegistrationRepository
{
    
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public UserRegistrationRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
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
    
}
