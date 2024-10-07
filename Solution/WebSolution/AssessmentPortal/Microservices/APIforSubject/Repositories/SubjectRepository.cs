using MySql.Data.MySqlClient;
using System.Data;
using Transflower.Entities;
using Transflower.SubjectAPI.Repositories.Interfaces;
namespace Transflower.SubjectAPI.Repositories;


public class SubjectRepository:ISubjectRepository
{ 
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public SubjectRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    public async Task <List<SubjectModel>> GetAllSubject()
    {
        List<SubjectModel> subjects=new List<SubjectModel>();
         string query = @"select * from subjects";
    
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            
            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Console.WriteLine("Inside while loop.....");
                    int id = int.Parse(reader["id"].ToString());
                    
                    string title = reader["title"].ToString();
                    
                    SubjectModel subject=new SubjectModel();

                    subject.Id = id;
                    subject.Title=title;           
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

    /*public Task <string> GetSubjectById(int id)
    {

    }*/
 
}