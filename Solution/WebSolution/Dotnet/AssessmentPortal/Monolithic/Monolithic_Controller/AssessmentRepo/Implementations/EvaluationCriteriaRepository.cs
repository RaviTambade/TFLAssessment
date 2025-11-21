using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
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

    public async Task<List<EvaluationCriteria>> GetCriteriaBySubjectId(int subjectId)
    {
        List<EvaluationCriteria> evaluationCriteria = new List<EvaluationCriteria>();
        string query = @" SELECT * FROM evaluationcriterias where subjectid=@subjectId;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@subjectId", subjectId);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {

                EvaluationCriteria criteria = new EvaluationCriteria();
                criteria.Id = int.Parse(reader["id"].ToString());
                criteria.Title = reader["Title"].ToString();
                criteria.SubjectId = int.Parse(reader["subjectid"].ToString());

                evaluationCriteria.Add(criteria);
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
        return evaluationCriteria;
    }


    public async Task<List<CriteriaQuestionCount>> getCriteriaQuestionCount(int subjectid)
    {
        string query = @"
           select count(q.title) as questionCount, e.title ,e.id as criteriaId 
            from questionbank q
            join evaluationcriterias e on e.id=q.evaluationcriteriaid 
            where q.subjectid=@subjectid
            group by(q.evaluationcriteriaid);";

        List<CriteriaQuestionCount> criteriaQuestionCount = new List<CriteriaQuestionCount>();
        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        using (MySqlCommand command = new MySqlCommand(query, connection))
        {
            try
            {
                await connection.OpenAsync();
                command.Parameters.AddWithValue("@subjectid",subjectid);
                MySqlDataReader reader = command.ExecuteReader();
                // MySqlDataReader reader = await command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    CriteriaQuestionCount questionCount = new CriteriaQuestionCount();
                    EvaluationCriteria criteria = new EvaluationCriteria();

                    questionCount.QuestionCount = Convert.ToInt32(reader["questionCount"]);
                    criteria.Id = Convert.ToInt32(reader["criteriaId"]);
                    criteria.Title = reader["title"].ToString();
                    questionCount.Criteria = criteria;
                    criteriaQuestionCount.Add(questionCount);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        return criteriaQuestionCount;
    }

}