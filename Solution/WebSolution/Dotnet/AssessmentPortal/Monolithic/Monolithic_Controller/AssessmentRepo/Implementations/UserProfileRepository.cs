using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;

public class UserProfileRepository : IUserProfileRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public UserProfileRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }
    public async Task<User> GetUserProfileById(int userId)
    {

        string query = @"select * from users where id=@Id";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        User userData = new User();

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@Id", userId);
            MySqlDataReader reader = command.ExecuteReader();

            reader.Read();

            int id = int.Parse(reader["id"].ToString());
            string aadharid = reader["aadharid"].ToString();
            string firstname = reader["firstname"].ToString();
            string lastname = reader["lastname"].ToString();
            string email = reader["email"].ToString();
            string contactnumber = reader["contactnumber"].ToString();


            userData.Id = id;
            userData.AadharId = aadharid;
            userData.Firstname = firstname;
            userData.Lastname = lastname;
            userData.Email = email;
            userData.ContactNumber = contactnumber;

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
        return userData;
    }


    public async Task<User> GetUserByContactNo(string contactno)
    {

        string query = @"select id,firstname,lastname,email,contactnumber from users where contactnumber=@contactno";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        User userData = new User();

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@contactno", contactno);
            MySqlDataReader reader = command.ExecuteReader();

            reader.Read();
            int id = int.Parse(reader["id"].ToString());
            string firstname = reader["firstname"].ToString();
            string lastname = reader["lastname"].ToString();
            string email = reader["email"].ToString();
            string contactnumber = reader["contactnumber"].ToString();


            userData.Id = id;
            userData.Firstname = firstname;
            userData.Lastname = lastname;
            userData.Email = email;
            userData.ContactNumber = contactnumber;

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
        return userData;
    }


    public async Task<List<Role>> GetRolesByUser(int userid)
    {
        List<Role> userRole=new List<Role>();
        string query = @" select r.name as rolename from roles r 
                            join userroles ur on ur.roleid=r.id 
                            join users u on u.id=ur.userid
                            where  u.id=@userid;
                            ";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@userid", userid);
            MySqlDataReader reader = command.ExecuteReader();

            while(reader.Read())
            {

               Role role=new Role();
               role.Name= reader["rolename"].ToString();
                userRole.Add(role);
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
        return userRole;
    }

    public async Task<UserRoleAssign> GetUserRoleByContactNo(string contactnumber)
    {
        User user = await GetUserByContactNo(contactnumber);
        if(user==null)
        {
            return null;
        }

        List<Role> userRole= await GetRolesByUser(user.Id);

        UserRoleAssign userRoleAssign=new UserRoleAssign();

        userRoleAssign.Id=user.Id;
        userRoleAssign.Firstname=user.Firstname;
        userRoleAssign.Lastname=user.Lastname;
        userRoleAssign.Email=user.Email;
        userRoleAssign.ContactNumber=user.ContactNumber;
        userRoleAssign.Roles=userRole;

        return userRoleAssign;
    }

    public async Task<bool> UpdateUserProfile(User user, int id)
    {
        bool status = false;
        string query = @"update users  set aadharid=@aadharid, firstname=@firstname, lastname=@lastname, contactnumber=@contactnumber where id=@Id";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@Id", id);
            command.Parameters.AddWithValue("@aadharid", user.AadharId);
            command.Parameters.AddWithValue("@firstname", user.Firstname);
            command.Parameters.AddWithValue("@lastname", user.Lastname);
            command.Parameters.AddWithValue("@contactnumber", user.ContactNumber);

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