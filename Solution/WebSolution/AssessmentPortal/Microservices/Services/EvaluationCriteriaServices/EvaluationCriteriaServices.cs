 using MySql.Data.MySqlClient;
using System.Data;
using EvaluationCriteriaEntities;
using EvaluationCriteriaInterfaces;
namespace EvaluationCriteriaServices;

 
 public class EvaluationCriteriaService:IEvaluationCriteriaService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
 public bool UpdateCriteria(int evaluationCriteriaId, int questionId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId where id=@questionId";

        MySqlCommand command = new MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@evaluationCriteriaId", evaluationCriteriaId);
        command.Parameters.AddWithValue("@questionId", questionId);

        try
        {
            connection.Open();
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
            connection.Close();
        }
        return status;
    }


    public bool InsertCriteria(EvaluationCriteria criteria)
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
            connection.Open();
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
            connection.Close();
        }
        return status;
    }

}