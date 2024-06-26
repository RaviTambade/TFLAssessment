using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Repositories.Implementations;

//Providers
public class EvaluationCriteriaRepository :IEvaluationCriteriaRepository
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public async Task<List<EvaluationCriteria>> GetEvalutionCriterias()
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
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
            connection.CloseAsync();
        }
        return criterias;
    }

    public async Task<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId)
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias WHERE subjectid=@subjectId";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", subjectId);
        try
        {
            connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
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
            connection.CloseAsync();
        }
        return criterias;
    }

     public async Task<string> GetCriteria(string subject, int questionId)
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
            connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
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
            connection.CloseAsync();
        }
        return criteria;
    }
 
    public async Task<bool> InsertCriteria(NewCriteria criteria)
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
            connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
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
            connection.CloseAsync();
        }
        return status;
    }

    public async Task<bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId where id=@questionId";

        MySqlCommand command = new MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@evaluationCriteriaId", evaluationCriteriaId);
        command.Parameters.AddWithValue("@questionId", questionId);

        try
        {
            connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
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
            connection.CloseAsync();
        }
        return status;
    }

   public  async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {
        
        List<QuestionDetails> questions = new List<QuestionDetails>();
        
        string query = @"select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria
                            from questionbank, subjects,evaluationcriterias
                            where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id
                            and subjects.id=@subjectId and evaluationcriterias.id=@criteriaId";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", subjectId);
        command.Parameters.AddWithValue("@criteriaId", criteriaId);


        try
        {
            connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string strQuestion = reader["title"].ToString();
                string subject = reader["subject"].ToString();
                string criteria = reader["criteria"].ToString();
                
                QuestionDetails question= new QuestionDetails();
                
                question.Id=id;
                question.Question=strQuestion;
                question.Subject=subject;
                question.Criteria=criteria;

                questions.Add(question);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.CloseAsync();
        }
        return questions;
    }   
}
