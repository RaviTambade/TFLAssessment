using AssessmentLib.Repositories.Interface;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using AssessmentLib.Entities;

namespace AssessmentLib.Repositories.Implementation
{
    public class SubjectRepository : ISubjectRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public SubjectRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
            
        }

        public async Task<List<SubjectModel>> GetAllSubject()
        {
            List<SubjectModel> subjects = new List<SubjectModel>();
            string query = @"SELECT * FROM Subjects";

            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand commmand = new MySqlCommand(query, connection);

            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = commmand.ExecuteReader();
                while (reader.Read())
                {
                    int id = int.Parse (reader["id"].ToString());
                    string title = reader["title"].ToString();
                    SubjectModel subject = new SubjectModel();

                    subject.Id = id;
                    subject.Title = title;
                    subjects.Add(subject);

                }
                await reader.CloseAsync();


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                connection.Close();
            }
            return subjects;

        }

        public async Task<Boolean> AddSubject(SubjectModel subject)
        {
            string query = "INSERT INTO subjects(title)VALUES(@Title)";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);

            {
                command.Parameters.AddWithValue("@Title", subject.Title);
                try
                {
                    await connection.OpenAsync();
                    await command.ExecuteNonQueryAsync();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return false;
                }
                finally
                {
                    await connection.CloseAsync();
                }
                return true;
            }
        }
        public async Task<Boolean> DeleteSubject(int subjectId)
        {
            string query = @"DELETE FROM Subjects WHERE id=@id";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            {
                command.Parameters.AddWithValue("@id", subjectId);
                {
                    try
                    {
                        await connection.OpenAsync();
                        await command.ExecuteNonQueryAsync();
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                        return false;
                    }
                    finally
                    {
                       await connection.CloseAsync();
                    }
                    return true;
                }

            }
        }
        
     }
}
