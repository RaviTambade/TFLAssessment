using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;

public class MembershipRepository : IMembershipRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public MembershipRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Employee>> GetAllEmployee()
    {
        string query = @"select * from employees;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        List<Employee> allEmployee = new List<Employee>();

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                int userid = int.Parse(reader["userId"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                string email = reader["email"].ToString();
                string contactnumber = reader["contact"].ToString();

                Employee userData = new Employee();
                userData.Id = id;
                userData.FirstName = firstname;
                userData.LastName = lastname;
                userData.Email = email;
                userData.Contact = contactnumber;

                allEmployee.Add(userData);
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
        return allEmployee;
    }

    public async Task<bool> UpdateUserRole(int userid,Role roles)
    {
        string query = @"insert into userroles(userid,roleid) values(@userid,@roleid);";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        bool status = false;

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@userid", userid);
            command.Parameters.AddWithValue("@roleid", roles.Id);
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

    public async Task<Employee> GetEmployeeByUserId(int id)
    {
        string query = @"select * from employees where userId=@id;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        Employee empData = new Employee();

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id",id);
            MySqlDataReader reader = command.ExecuteReader();
            reader.Read();
            int eid = int.Parse(reader["id"].ToString());
            int userid = int.Parse(reader["userId"].ToString());
            string firstname = reader["firstname"].ToString();
            string lastname = reader["lastname"].ToString();
            string email = reader["email"].ToString();
            string contactnumber = reader["contact"].ToString();


            empData.Id = eid;
            empData.FirstName = firstname;
            empData.LastName = lastname;
            empData.Email = email;
            empData.Contact = contactnumber;

            
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
        return empData;
    }

    public async Task<bool> AddNewEmployee(Employee employee)
    {
        string query = @"insert into employees(userid,firstname,lastname,email,contact) values(@userid,@firstname,@lastname,@email,@contact)";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        bool status=false;

        try
        {
            await connection.OpenAsync();
            // command.Parameters.AddWithValue("@Id", employee.Id);
            command.Parameters.AddWithValue("@userid", employee.UserId);
            command.Parameters.AddWithValue("@firstname", employee.FirstName);
            command.Parameters.AddWithValue("@lastname", employee.LastName);
            command.Parameters.AddWithValue("@email", employee.Email);
            command.Parameters.AddWithValue("@contact", employee.Contact);
            await command.ExecuteNonQueryAsync();
            status=true;
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
  

  public async Task<bool> DeleteUserRole(int userid)
    {
        string query = @"delete from userroles where userid=@id;";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        bool status = false;

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id", userid);
            await  command.ExecuteNonQueryAsync();
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

    public async Task<bool> DeleteSmeSubject(int empId)
    {
        string query = @"delete from subjectmatterexperts where employeeid=@id;";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        bool status = false;

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id", empId);
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