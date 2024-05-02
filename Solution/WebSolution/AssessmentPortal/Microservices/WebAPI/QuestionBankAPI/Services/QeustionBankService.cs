namespace  Transflower.Assessment.WebAPI.QuestionBankAPI.Services;
using MySql.Data.MySqlClient;
using System.Data;

public class QuestionBankService:IQuestionBankService
{
    public List<QuestionTitle> GetAllQuestions(){
      
    }

    public List<SubjectQuestion> GetQuestionsBySubject(int id)
    {
        
    }

    public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {
       
    }

    public bool UpdateAnswer(int id, char answerKey){
       
    }

    public Question GetQuestion(int questionId)
    {   
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

    public bool UpdateQuestionOptions(int id,Question options)
    { 
       
      
    }


    //update only evaluationcriteriaid
    public bool UpdateSubjectCriteria(int questionId,Question question)
    {
        
       
    }


    public bool InsertQuestion(NewQuestion question)
    {

   
  }

    
    public string GetCriteria(string subject, int questionId)
    {
         
    }

    
}