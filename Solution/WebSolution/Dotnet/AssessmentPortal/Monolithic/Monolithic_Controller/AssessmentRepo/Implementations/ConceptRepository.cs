using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;


 
 public class ConceptRepository:IConceptRepository
{ 
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ConceptRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    
 public async Task <bool> UpdateConcept(int conceptId, int questionId)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString );
        string query = "update questionbank set conceptid=@conceptid where id=@QuestionId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@conceptid", conceptId);
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
        string query = "update concepts set subjectid= @SubjectId where id= @Id;";
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


    public async Task <bool> InsertConcept(Concepts concept)
    {
        Console.WriteLine(concept.SubjectId + " " + concept.Title);
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString );
        string query = "insert into concepts(title,subjectid) values ( @Title, @SubjectId)";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@SubjectId", concept.SubjectId);
        command.Parameters.AddWithValue("@Title", concept.Title);

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

    public async Task<List<Concepts>> GetConceptBySubjectId(int subjectId)
    {
        List<Concepts> concepts = new List<Concepts>();
        string query = @" SELECT * FROM concepts where subjectid=@subjectId;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@subjectId", subjectId);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {

                Concepts concept = new Concepts();
                concept.Id = int.Parse(reader["id"].ToString());
                concept.Title = reader["Title"].ToString();
                concept.SubjectId = int.Parse(reader["subjectid"].ToString());

                concepts.Add(concept);
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
        return concepts;
    }


    public async Task<List<ConceptQuestionCount>> getConceptQuestionCount(int subjectid)
    {
        string query = @"
           select count(q.title) as questionCount, e.title ,e.id as conceptid 
            from questionbank q
            join concepts e on e.id=q.conceptid 
            where q.subjectid=@subjectid
            group by(q.conceptid);";

        List<ConceptQuestionCount> conceptQuestionCount = new List<ConceptQuestionCount>();
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
                    ConceptQuestionCount questionCount = new ConceptQuestionCount();
                    Concepts concept = new Concepts();

                    questionCount.QuestionCount = Convert.ToInt32(reader["questionCount"]);
                    concept.Id = Convert.ToInt32(reader["conceptid"]);
                    concept.Title = reader["title"].ToString();
                    questionCount.Concept = concept;
                    conceptQuestionCount.Add(questionCount);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        return conceptQuestionCount;
    }

}