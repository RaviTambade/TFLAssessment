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
        string query = @" select r.id as id, r.name as rolename from roles r 
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
               role.Id=int.Parse(reader["id"].ToString());
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
        string query1 = @"update users  set aadharid=@aadharid, firstname=@firstname, lastname=@lastname, contactnumber=@contactnumber where id=@Id";
        string query2 = @"update employees  set firstname=@firstname, lastname=@lastname, contact=@contactnumber where userId=@Id";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command1 = new MySqlCommand(query1, connection);
        MySqlCommand command2 = new MySqlCommand(query2, connection);

        try
        {
            await connection.OpenAsync();
            command1.Parameters.AddWithValue("@Id", id);
            command1.Parameters.AddWithValue("@aadharid", user.AadharId);
            command1.Parameters.AddWithValue("@firstname", user.Firstname);
            command1.Parameters.AddWithValue("@lastname", user.Lastname);
            command1.Parameters.AddWithValue("@contactnumber", user.ContactNumber);

            command2.Parameters.AddWithValue("@Id", id);
            command2.Parameters.AddWithValue("@firstname", user.Firstname);
            command2.Parameters.AddWithValue("@lastname", user.Lastname);
            command2.Parameters.AddWithValue("@contactnumber", user.ContactNumber);

            await command1.ExecuteNonQueryAsync();
            await command2.ExecuteNonQueryAsync();
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

    public async Task<List<User>> GetAllSmeUser()
    {
        string query = @"select e.id, e.firstname, e.lastname
                            from employees e
                            join userroles ur on ur.userid=e.userId
                            join roles r on r.id=ur.roleid where r.name='sme';";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        List<User> smeUser = new List<User>();

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while(reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                
                User userData=new User();
                userData.Id = id;
                userData.Firstname = firstname;
                userData.Lastname = lastname;

                smeUser.Add(userData);
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
        return smeUser;
    }

    public async Task<List<Subject>> GetSubjectBySmeId(int id)
    {

        string query = @"select s.title as subjectname
                            from subjects s
                            join subjectmatterexperts sme on sme.subjectid=s.id 
                            where sme.employeeid=@Id";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        List<Subject> subjects = new List<Subject>();

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@Id", id);
            MySqlDataReader reader = command.ExecuteReader();

            while(reader.Read())
            {

            string subjectname = reader["subjectname"].ToString();

            Subject subject=new Subject();
            subject.Title = subjectname;
            subjects.Add(subject);

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
        return subjects;
    }

    public async Task<List<UserSubjectAssign>> GetAllSmeDetails()
    {
        List<UserSubjectAssign> userSubjectAssign=new List<UserSubjectAssign>();
        List<User> smeUsers= await GetAllSmeUser();
        if(smeUsers==null)
        {
            return null;
        }

        foreach(User user in smeUsers )
        {
            List<Subject> smeSubjects= await GetSubjectBySmeId(user.Id);

            UserSubjectAssign newUser=new UserSubjectAssign();
            newUser.Id=user.Id;
            newUser.Firstname=user.Firstname;
            newUser.Lastname=user.Lastname;
            newUser.Email=user.Email;
            newUser.ContactNumber=user.ContactNumber;
            newUser.Subjects= smeSubjects;

            userSubjectAssign.Add(newUser);
        }

        return userSubjectAssign;
    }




  


}