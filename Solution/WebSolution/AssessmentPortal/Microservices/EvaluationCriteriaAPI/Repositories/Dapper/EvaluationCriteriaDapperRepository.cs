using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;
using System.Data.SqlClient;
using Dapper;


 
 public class EvaluationCriteriaDapperRepository:IEvaluationCriteriaRepository
{ 
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public EvaluationCriteriaDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    public async Task<bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        await Task.Delay(100);
        bool status = false;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            string query = "UPDATE questionbank SET evaluationcriteriaid = @EvaluationCriteriaId WHERE id = @QuestionId";
            con.Execute(query, new { EvaluationCriteriaId = evaluationCriteriaId, QuestionId = questionId });
            status = true;

        }
        return status;
    }

    public async Task <bool> UpdateSubject(int id, int subjectId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString );
        string query = "update evaluationcriterias set subjectid= @subjectId where id= @id;";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", id);
        command.Parameters.AddWithValue("@subjectId", subjectId);
        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
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


    public async Task <bool> InsertCriteria(EvaluationCriteria criteria)
    {
        Console.WriteLine(criteria.SubjectId + " " + criteria.Title);
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString );
        string query = "insert into evaluationcriterias(title,subjectid) values ( @title, @subjectId)";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", criteria.SubjectId);
        command.Parameters.AddWithValue("@title", criteria.Title);

        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
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