using MySql.Data.MySqlClient;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Dapper;
using System.Data;

namespace Transflower.TFLAssessment.dapper.Repositories;
public class QuestionBankDapperRepository : IQuestionBankRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public QuestionBankDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    //Disconnected Data Access
    //No 

    public async Task<List<QuestionTitle>> GetAllQuestions()
    {
        await Task.Delay(2000);
        List<QuestionTitle> questions=new List<QuestionTitle>();

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
        var allQuestions = await con.QueryAsync<QuestionTitle>("SELECT * FROM questionbank");
        questions = allQuestions as List<QuestionTitle>;
        }
    return questions;
    }

    public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int id)
    {
        await Task.Delay(100);
        List<SubjectQuestion> questions=new List<SubjectQuestion>();   
        
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques = con.Query<SubjectQuestion>("select questionbank.id as questionid, questionbank.title as question, subjects.title as subject, subjects.id as subjectid from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@id", new{id});
            questions = ques as List<SubjectQuestion>;
        }
        return questions;
    }

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId, int criteriaId)
    {
        await Task.Delay(100);
        List<QuestionDetails> questions=new List<QuestionDetails>();   
        
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques = con.Query<QuestionDetails>("select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria from questionbank, subjects,evaluationcriterias where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id and subjects.id=@subjectId and evaluationcriterias.id=@criteriaId", new{subjectId,criteriaId});
            questions = ques as List<QuestionDetails>;
        }
        return questions;
    }

    public async Task<bool> UpdateAnswer(int id, char answerKey)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        { 
            var query = "update questionbank set answerkey="+answerKey+" where id="+id+""; 
            if(con.Execute(query) > 0)
            status = true;
        }
        return status;
    }

    public async Task<Question> GetQuestion(int questionId)
    {
        await Task.Delay(100);
        Question question=null;   
        
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques = con.Query<Question>("select * from questionbank where id=@questionId", new{questionId});
            question = ques as Question;
        }
        return question;
    }

    public async Task<List<Question>> GetQuestions(int testId)
    {
        List<Question> questions = new List<Question>();
        string query = @"select * from questionbank inner join testquestions on testquestions.questionbankid = questionbank.id where testquestions.testid=@testId";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testID", testId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int subjectId = int.Parse(reader["subjectid"].ToString());
                string strQuestion = reader["title"].ToString();
                string optionA = reader["a"].ToString();
                string optionB = reader["b"].ToString();
                string optionC = reader["c"].ToString();
                string optionD = reader["d"].ToString();
                int evaluationCriteriaId = int.Parse(reader["evaluationcriteriaid"].ToString());

                Question question = new Question();
                question.Id = id;
                question.SubjectId = subjectId;
                question.Title = strQuestion;
                question.A = optionA;
                question.B = optionB;
                question.C = optionC;
                question.D = optionD;
                question.EvaluationCriteriaId = evaluationCriteriaId;
                questions.Add(question);
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
        return questions;
    }

    public async Task<bool> UpdateQuestionOptions(int id, Question options)
    {
        bool status = false;
        string query = "update questionbank set title=@title,a=@a,b=@b,c=@c,d=@d,answerkey=@answerKey where id =@id";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            await connection.OpenAsync();
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@title", options.Title);
            command.Parameters.AddWithValue("@a", options.A);
            command.Parameters.AddWithValue("@b", options.B);
            command.Parameters.AddWithValue("@c", options.C);
            command.Parameters.AddWithValue("@d", options.D);
            command.Parameters.AddWithValue("@answerKey", options.AnswerKey);
            command.Parameters.AddWithValue("@id", id);
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
            await connection.CloseAsync();
        }
        return status;
    }


    //update only evaluationcriteriaid
    public async Task<bool> UpdateSubjectCriteria(int questionId, Question question)
    {
        bool status = false;
        string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId ,subjectid=@subjectId where id =@id";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            await connection.OpenAsync();
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@evaluationCriteriaId", question.EvaluationCriteriaId);
            command.Parameters.AddWithValue("@subjectId", question.SubjectId);

            command.Parameters.AddWithValue("@id", questionId);
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
            await connection.CloseAsync();
        }
        return status;
    }


    public async Task<bool> InsertQuestion(NewQuestion question)
    {
        await Task.Delay(2000);
        bool status = true;
        // MySqlConnection connection = new MySqlConnection(_connectionString);
        // try
        // {
        //     string query = "select * from questionbank";
        //     MySqlCommand command = new MySqlCommand(query, connection);
        //     MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
        //     DataSet dataSet = new DataSet();
        //     MySqlCommandBuilder commandBuilder = new MySqlCommandBuilder(dataAdapter);
        //     dataAdapter.Fill(dataSet);
        //     DataTable dataTable = dataSet.Tables[0];

        //     DataRow row = dataTable.NewRow();
        //     row["subjectid"] = question.SubjectId;
        //     row["title"] = question.Title;
        //     row["a"] = question.A;
        //     row["b"] = question.B;
        //     row["c"] = question.C;
        //     row["d"] = question.D;
        //     row["answerKey"] = question.AnswerKey;
        //     row["evaluationCriteriaId"] = question.EvaluationCriteriaId;
        //     dataTable.Rows.Add(row);
        //     dataAdapter.Update(dataSet);
        //     status = true;

        // }
        // catch (Exception e)
        // {
        //     throw e;
        // }

        return status;
    }

    public async Task<string> GetCriteria(string subject, int questionId)
    {
        string criteria = "";
        string query = @"select evaluationcriterias.title from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id
                       inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid WHERE subjects.title=@subject and questionbank.id=@questionId";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@subject", subject);
            command.Parameters.AddWithValue("@questionId", questionId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {

                string title = reader["title"].ToString();
                criteria = title;
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
        return criteria;

    }
}

