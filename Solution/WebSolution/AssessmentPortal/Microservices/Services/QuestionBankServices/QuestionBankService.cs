using MySql.Data.MySqlClient;
using System.Data;
using QuestionBankEntities;
using QuestionBankInterfaces;
namespace QuestionBankServices;

public class QuestionBankService:IQuestionBankService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    //Disconnected Data Access
    //No 

    public List<QuestionTitle> GetAllQuestions(){
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

    public List<SubjectQuestion> GetQuestionsBySubject(int id)
    {
        
        List<SubjectQuestion> questions = new List<SubjectQuestion>();
        
        string query = @"select questionbank.id as questionid, questionbank.title as question, subjects.title as subject, subjects.id as subjectid from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@subjectId";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", id);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
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
        return questions;
    }

    public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
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
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
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
            connection.Close();
        }
        return questions;
    }

    public bool UpdateAnswer(int id, char answerKey){
        bool status = false;
        string query = "update questionbank set answerkey=@answerkey where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            connection.Open();   
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@answerkey", answerKey);
            command.Parameters.AddWithValue("@id", id);
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

    public Question GetQuestion(int questionId)
    { 
        Question question = null;
        string query = @"select * from questionbank where id=@questionId";
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@questionId", questionId);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if(reader.Read())
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
        return question;
    }

    public List<Question> GetQuestions(int testId)
    { 
        List<Question> questions = new List<Question>();
        string query = @"select * from questionbank inner join testquestions on testquestions.questionbankid = questionbank.id where testquestions.testid=@testId";
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testID", testId);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while(reader.Read())
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
        return questions;
    }

    public bool UpdateQuestionOptions(int id,Question options){
        bool status = false;
        Console.WriteLine("ID "+id);
        Console.WriteLine("A "+options.A);
        Console.WriteLine("B "+options.B);
        Console.WriteLine("C "+options.C);
        Console.WriteLine("D "+options.D);
     //   string query = "update questionbank set a=@a,b=@b,c=@c,d=@d where id =@id";
        string query = "update questionbank set title=@title,a=@a,b=@b,c=@c,d=@d,answerkey=@answerKey where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            connection.Open();   
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@title", options.Title);
            command.Parameters.AddWithValue("@a", options.A);
            command.Parameters.AddWithValue("@b", options.B);
            command.Parameters.AddWithValue("@c", options.C);
            command.Parameters.AddWithValue("@d", options.D);
            command.Parameters.AddWithValue("@answerKey", options.AnswerKey);
            command.Parameters.AddWithValue("@id", id);
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

    public bool UpdateSubjectCriteria(int questionId,Question question){
        bool status = false;
        string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId ,subjectid=@subjectId where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            connection.Open();   
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@evaluationCriteriaId", question.EvaluationCriteriaId);
            command.Parameters.AddWithValue("@subjectId", question.SubjectId);
            
            command.Parameters.AddWithValue("@id", questionId);
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

     public bool InsertQuestion(NewQuestion question)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "insert into questionbank(subjectid, title, a, b, c, d, answerkey,evaluationcriteriaid) values (@subjectId, @title, @a, @b, @c, @d, @answerKey, @evaluationCriteriaId)";

        MySqlCommand command = new MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@subjectId", question.SubjectId);
        command.Parameters.AddWithValue("@title", question.Title);
        command.Parameters.AddWithValue("@a", question.A);
        command.Parameters.AddWithValue("@b", question.B);
        command.Parameters.AddWithValue("@c", question.C);
        command.Parameters.AddWithValue("@d", question.D);
        command.Parameters.AddWithValue("@answerKey", question.AnswerKey);
        command.Parameters.AddWithValue("@evaluationCriteriaId", question.EvaluationCriteriaId);

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


    public TestQuestion GetQuestion(string subject, int questionid)
    {

        TestQuestion question = null;
        string query = @" select questionbank.*,evaluationcriterias.title as criteria from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id
        inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid  WHERE subjects.title=@subject and questionbank.id=@questionId";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subject", subject);
        command.Parameters.AddWithValue("@questionId", questionid);

        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string a = reader["a"].ToString();
                string b = reader["b"].ToString();
                string c = reader["c"].ToString();
                string d = reader["d"].ToString();
                int evaluationCriteriaId = int.Parse(reader["evaluationcriteriaid"].ToString());
                string criteria = reader["criteria"].ToString();

                question = new TestQuestion();
                question.Id = id;
                question.Title = title;
                question.A = a;
                question.B = b;
                question.C = c;
                question.D = d;
                question.EvaluationCriteriaId = evaluationCriteriaId;
                question.Criteria = criteria;
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
        return question;
    }
}