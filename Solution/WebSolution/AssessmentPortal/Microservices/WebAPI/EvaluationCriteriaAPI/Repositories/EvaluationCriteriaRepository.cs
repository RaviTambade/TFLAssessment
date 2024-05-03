using MySql.Data.MySqlClient;
using System.Data;
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Entities;
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Repositories.Interfaces;
namespace Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Repositories;


 
 public class EvaluationCriteriaRepository:IEvaluationCriteriaRepository
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
 public async Task <bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId where id=@questionId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@evaluationCriteriaId", evaluationCriteriaId);
        command.Parameters.AddWithValue("@questionId", questionId);

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
        MySqlConnection connection = new MySqlConnection(connectionString);
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
        MySqlConnection connection = new MySqlConnection(connectionString);
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