
using MySql.Data.MySqlClient;
using System.Data;
using Transflower.Assessment.WebAPI.QuestionBankAPI.Entities;
using Transflower.Assessment.WebAPI.QuestionBankAPI.Repositories.Interfaces;
namespace  Transflower.Assessment.WebAPI.QuestionBankAPI.Repositories;
public class QuestionBankRepository:IQuestionBankRepository
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    //Disconnected Data Access
    //No 

    public async Task<List<QuestionTitle>> GetAllQuestions(){
        await Task.Delay(2000);
        List<QuestionTitle> questions = new List<QuestionTitle>();
        string query = @"select * from questionbank";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
         DataSet ds=new DataSet();
         MySqlDataAdapter da=new MySqlDataAdapter(command);
         da.Fill(ds);

         //Disconnected Data (Offline data fetched from backend database)
         DataTable dtQuestionBank=ds.Tables[0];
         DataRowCollection rows=dtQuestionBank.Rows;
            foreach( DataRow row in rows)
            {
                int id = int.Parse(row["id"].ToString());
                string title = row["title"].ToString();
                
                QuestionTitle question = new QuestionTitle();
                question.Id = id;
                question.Title = title;

                questions.Add(question);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        return questions;
    }

    public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int id)
    {
        
        List<SubjectQuestion> questions = new List<SubjectQuestion>(); 
        string query = @"select questionbank.id as questionid, questionbank.title as question, subjects.title as subject, subjects.id as subjectid from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@subjectId";  
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", id);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int questionId = int.Parse(reader["questionid"].ToString());
                string strQuestion = reader["question"].ToString();
                int subjectId = int.Parse(reader["subjectid"].ToString());
                string subject = reader["subject"].ToString();
                

                SubjectQuestion question= new SubjectQuestion();
                question.QuestionId=questionId;
                question.Question=strQuestion;
                question.SubjectId=subjectId;
                question.Subject=subject;
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

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
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
            await connection.OpenAsync();
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

    public async Task<bool> UpdateAnswer(int id, char answerKey){
        bool status = false;
        string query = "update questionbank set answerkey=@answerkey where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            await connection.OpenAsync();   
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@id", id);
            command.Parameters.AddWithValue("@answerkey", answerKey);
           Console.WriteLine("Id : "+id);
           Console.WriteLine("Answerkey : "+answerKey);
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

    public async Task<Question> GetQuestion(int questionId)
    { 
        Question question = null;
        string query = @"select * from questionbank where id=@questionId";
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@questionId", questionId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if(await reader.ReadAsync())
            {
                int subjectId = int.Parse(reader["subjectid"].ToString());
                string strQuestion = reader["title"].ToString();
                string optionA =  reader["a"].ToString();
                string optionB = reader["b"].ToString();
                string optionC = reader["c"].ToString();
                string optionD = reader["d"].ToString();
                string correctAnswer = reader["answerkey"].ToString();
                int evaluationCriteriaId = int.Parse(reader["evaluationcriteriaid"].ToString());

                question= new Question();
                question.Id=questionId;
                question.SubjectId=subjectId;
                question.Title=strQuestion;
                question.A=optionA;
                question.B=optionB;
                question.C=optionC;
                question.D=optionD;
                question.AnswerKey=correctAnswer;
                question.EvaluationCriteriaId=evaluationCriteriaId;
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
        return question;
    }

    public async Task<List<Question>> GetQuestions(int testId)
    { 
        List<Question> questions = new List<Question>();
        string query = @"select * from questionbank inner join testquestions on testquestions.questionbankid = questionbank.id where testquestions.testid=@testId";
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testID", testId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader =command.ExecuteReader();
            while(await reader.ReadAsync())
            {
                int id=int.Parse(reader["id"].ToString());
                int subjectId = int.Parse(reader["subjectid"].ToString());
                string strQuestion = reader["title"].ToString();
                string optionA =  reader["a"].ToString();
                string optionB = reader["b"].ToString();
                string optionC = reader["c"].ToString();
                string optionD = reader["d"].ToString();
                int evaluationCriteriaId = int.Parse(reader["evaluationcriteriaid"].ToString());
                
                Question question =new Question();
                question.Id=id;
                question.SubjectId=subjectId;
                question.Title=strQuestion;
                question.A=optionA;
                question.B=optionB;
                question.C=optionC;
                question.D=optionD;
                question.EvaluationCriteriaId=evaluationCriteriaId;
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

    public async Task<bool> UpdateQuestionOptions(int id,Question options)
    {
        bool status = false;
        string query = "update questionbank set title=@title,a=@a,b=@b,c=@c,d=@d,answerkey=@answerKey where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
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
            int rowsAffected =await command.ExecuteNonQueryAsync();
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
    public async Task<bool> UpdateSubjectCriteria(int questionId,Question question)
    {
        bool status = false;
        string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId ,subjectid=@subjectId where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
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


    public async  Task<bool> InsertQuestion(NewQuestion question)
    {
        await Task.Delay(2000);
    bool status = true;
    MySqlConnection connection = new MySqlConnection(connectionString);
    try
    {
      string query = "select * from questionbank";
      MySqlCommand command = new MySqlCommand(query, connection);
      MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
      DataSet dataSet = new DataSet();
      MySqlCommandBuilder commandBuilder = new MySqlCommandBuilder(dataAdapter);
      dataAdapter.Fill(dataSet);
      DataTable dataTable = dataSet.Tables[0];

      DataRow row = dataTable.NewRow();
      row["subjectid"] = question.SubjectId;
      row["title"] = question.Title;
      row["a"] = question.A;
      row["b"] = question.B;
      row["c"] = question.C;
      row["d"] = question.D;
      row["answerKey"] = question.AnswerKey;
      row["evaluationCriteriaId"] = question.EvaluationCriteriaId;
      dataTable.Rows.Add(row);
      dataAdapter.Update(dataSet);
      status = true;

    }
    catch (Exception e)
    {
      throw e;
    }

    return status;
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

