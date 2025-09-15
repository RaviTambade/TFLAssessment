using AssessmentLib.Entities;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZstdSharp.Unsafe;

namespace AssessmentLib.Repositories.Implementation
{
    public class EvalutionCriteriaRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public EvalutionCriteriaRepository(IConfiguration configuration)
        {
            _configuration= configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
        }
        public async Task<bool> UpdateCriteria(int EvalutionCriteriaId,int QuestionId)
        {
            bool status = false;
            String query = @"UPDATE questinbank SET evalutionCriteriaId=@EvalutionCriteriaId WHERE id=@QuestionId";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@EvalutionCriteriaId", EvalutionCriteriaId);
            command.Parameters.AddWithValue("@QustionId", QuestionId);
            try
            {
              await connection.OpenAsync();
              int rowAffected= command.ExecuteNonQuery();
                if (rowAffected > 0)
                {
                    status = true;
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            finally
            {
               await connection.CloseAsync();
            }
            return status;
        }
        public async Task<bool> UpdateSubject(int Id,int SubjectId)
        {
            bool status = false;
            MySqlConnection connection= new MySqlConnection(_connectionString);
            string query = @"Update evalutioncriterias set subjectid=@SubjectId WHERE iD=@Id;";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@SubjectId", SubjectId);
            command.Parameters.AddWithValue("@Id", Id);
            try
            {

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
               await connection.CloseAsync();
            }
            return status;
        }
        public async Task<bool> InsertCriteria(EvalutionCriteria criteria)
        {
            bool status = false;
            Console.WriteLine(criteria.SubjectId + " " + criteria.Title);
            MySqlConnection connection=new MySqlConnection(_connectionString);
            string query = @"INSERT into evalutioncriterias(title,subjectid)values(@Title,@SubjectId)";
            MySqlCommand command =new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@SubjectId", criteria.SubjectId);
            command.Parameters.AddWithValue("@Title", criteria.Title);

            try
            {
            await connection.OpenAsync();
            int rowAffected = command.ExecuteNonQuery();
                if (rowAffected > 0)
                {
                    status = true;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            finally
            {
                await connection.CloseAsync();
            }
            return status;
        }
    }
}
