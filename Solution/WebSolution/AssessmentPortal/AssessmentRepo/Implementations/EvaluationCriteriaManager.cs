using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
using Assessment.Repositories.Interfaces;
namespace Assessment.Repositories.Implementations;

//Providers
public class EvaluationCriteriaManager :IEvaluationCriteriaManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public List<EvaluationCriteria> GetEvalutionCriterias()
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                EvaluationCriteria criteria = new EvaluationCriteria();
                criteria.Id = id;
                criteria.Title = title;
                criterias.Add(criteria);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.Close();
        }
        return criterias;
    }

    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId)
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias WHERE subjectid=@subjectId";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", subjectId);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();

                EvaluationCriteria criteria = new EvaluationCriteria();
                criteria.Id = id;
                criteria.Title = title;

                Console.WriteLine(criteria.Id + "  " + criteria.Title);

                criterias.Add(criteria);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.Close();
        }
        return criterias;
    }

     public string GetCriteria(string subject, int questionId)
    {
        string criteria = "";
        string query = @"select evaluationcriterias.title from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id
                       inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid WHERE subjects.title=@subject and questionbank.id=@questionId";

        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@subject", subject);
            command.Parameters.AddWithValue("@questionId", questionId);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                string title = reader["title"].ToString();
                criteria = title;
            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.Close();
        }
        return criteria;
    }
 
    public bool InsertCriteria(NewCriteria criteria)
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
   
}
