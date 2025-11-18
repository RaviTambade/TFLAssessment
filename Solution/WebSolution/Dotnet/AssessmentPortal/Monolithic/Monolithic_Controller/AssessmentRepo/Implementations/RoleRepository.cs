using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;

public class RoleRepository : IRoleRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public RoleRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }
    public async Task<List<Role>> GetAllRoles()
    {
        string query = @"SELECT id,name FROM roles;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        List<Role> allRoles = new List<Role>();

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string role = reader["name"].ToString();
               

                Role roles = new Role();
                roles.Id = id;
                roles.Name = role;
                allRoles.Add(roles);
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
        return allRoles;
    }

    public async Task<bool> AddNewRole(Role role)
    {
        bool status=false;
        string query = @"insert into roles (name,lob) values (@rolename, @lob)";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        List<Role> allRoles = new List<Role>();

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@rolename",role.Name);
            command.Parameters.AddWithValue("@lob","assessment");
            await command.ExecuteNonQueryAsync();

            status =true;

        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

    public async  Task<bool> removeExistingRole(int roleid)
    {
        bool status = false;
        string query = @"delete from roles where id=@roleid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        List<Role> allRoles = new List<Role>();

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@roleid", roleid);
            await command.ExecuteNonQueryAsync();

            status = true;

        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }
}