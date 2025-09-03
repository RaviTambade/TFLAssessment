using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;


 
 public class EvaluationCriteriaRepository:IEvaluationCriteriaRepository
{ 
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public EvaluationCriteriaRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    
 public async Task <bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString );
        string query = "update questionbank set evaluationcriteriaid=@EvaluationCriteriaId where id=@QuestionId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@EvaluationCriteriaId", evaluationCriteriaId);
        command.Parameters.AddWithValue("@QuestionId", questionId);

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

    public async Task <bool> UpdateSubject(int id, int subjectId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString );
        string query = "update evaluationcriterias set subjectid= @SubjectId where id= @Id;";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@Id", id);
        command.Parameters.AddWithValue("@SubjectId", subjectId);
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
        string query = "insert into evaluationcriterias(title,subjectid) values ( @Title, @SubjectId)";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@SubjectId", criteria.SubjectId);
        command.Parameters.AddWithValue("@Title", criteria.Title);

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