<<<<<<< HEAD
﻿
using MySql.Data.MySqlClient;
using System.Data;
using QuestionBankEntity;

using QuestionBankInterfaces;
//Providers

=======
﻿using MySql.Data.MySqlClient;
using System.Data;
using QuestionBankEntity;
using QuestionBankInterfaces;
//Providers
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e
namespace QuestionBankServices;

public class QuestionBankService:IQuestionBankService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
<<<<<<< HEAD
    public List<QuestionTitle> GetAllQuestions(){
        
        List<QuestionTitle> questions = new List<QuestionTitle>();
        string query = @"select * from questionbank";
         
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
         
                QuestionTitle question = new QuestionTitle();

                question.Id = id;
                question.Title = title;
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

    public bool UpdateAnswer(Question answer,int id){
        bool status = false;
        string query = "update questionbank set answerkey=@answerkey where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            connection.Open();   
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@answerkey", answer.AnswerKey);
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
=======
    // public List<QuestionTitle> GetAllQuestions(){
        
    //     List<QuestionTitle> questions = new List<QuestionTitle>();
    //     string query = @"select * from questionbank";
         
    //     MySqlConnection connection = new MySqlConnection(connectionString);
    //     MySqlCommand command = new MySqlCommand(query, connection);
 
    //     try
    //     {
    //         connection.Open();
    //         MySqlDataReader reader = command.ExecuteReader();
    //         while (reader.Read())
    //         {
    //             int id = int.Parse(reader["id"].ToString());
    //             string title = reader["title"].ToString();
         
    //             QuestionTitle question = new QuestionTitle();

    //             question.Id = id;
    //             question.Title = title;
    //             questions.Add(question);
    //         }
    //         reader.Close();
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return questions;
    // }

    // public List<SubjectQuestion> GetQuestionsBySubject(int id)
    // {
        
    //     List<SubjectQuestion> questions = new List<SubjectQuestion>();
        
    //     string query = @"select questionbank.id as questionid, questionbank.title as question, subjects.title as subject, subjects.id as subjectid from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@subjectId";
         
    //     MySqlConnection connection = new MySqlConnection(connectionString);
    //     MySqlCommand command = new MySqlCommand(query, connection);
    //     command.Parameters.AddWithValue("@subjectId", id);
    //     try
    //     {
    //         connection.Open();
    //         MySqlDataReader reader = command.ExecuteReader();
    //         while (reader.Read())
    //         {
    //             int questionId = int.Parse(reader["questionid"].ToString());
    //             string strQuestion = reader["question"].ToString();
    //             int subjectId = int.Parse(reader["subjectid"].ToString());
    //             string subject = reader["subject"].ToString();
                

    //             SubjectQuestion question= new SubjectQuestion();
    //             question.QuestionId=questionId;
    //             question.Question=strQuestion;
    //              question.SubjectId=subjectId;
    //             question.Subject=subject;
    //             questions.Add(question);
    //         }
    //         reader.Close();
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return questions;
    // }

    // public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    // {
        
    //     List<QuestionDetails> questions = new List<QuestionDetails>();
        
    //     string query = @"select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria
    //                         from questionbank, subjects,evaluationcriterias
    //                         where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id
    //                         and subjects.id=@subjectId and evaluationcriterias.id=@criteriaId";
         
    //     MySqlConnection connection = new MySqlConnection(connectionString);
    //     MySqlCommand command = new MySqlCommand(query, connection);
    //     command.Parameters.AddWithValue("@subjectId", subjectId);
    //     command.Parameters.AddWithValue("@criteriaId", criteriaId);


    //     try
    //     {
    //         connection.Open();
    //         MySqlDataReader reader = command.ExecuteReader();
    //         while (reader.Read())
    //         {
    //             int id = int.Parse(reader["id"].ToString());
    //             string strQuestion = reader["title"].ToString();
    //             string subject = reader["subject"].ToString();
    //             string criteria = reader["criteria"].ToString();
                
    //             QuestionDetails question= new QuestionDetails();
                
    //             question.Id=id;
    //             question.Question=strQuestion;
    //             question.Subject=subject;
    //             question.Criteria=criteria;

    //             questions.Add(question);
    //         }
    //         reader.Close();
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return questions;
    // }

    // public bool UpdateAnswer(Question answer,int id){
    //     bool status = false;
    //     string query = "update questionbank set answerkey=@answerkey where id =@id";
    //     MySqlConnection connection = new MySqlConnection(connectionString);
    //     try
    //     {
    //         connection.Open();   
    //         MySqlCommand command = new MySqlCommand(query, connection);
    //         command.Parameters.AddWithValue("@answerkey", answer.AnswerKey);
    //         command.Parameters.AddWithValue("@id", id);
    //         int rowsAffected = command.ExecuteNonQuery();
    //         if (rowsAffected > 0)
    //         {
    //             status = true;
    //         }
            
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return status;
    // }
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e

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
<<<<<<< HEAD
                question.SkillId=subjectId;
=======
                question.SubjectId=subjectId;
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e
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

<<<<<<< HEAD
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
            command.Parameters.AddWithValue("@subjectId", question.SkillId);
            Console.WriteLine(question.SkillId);
            
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
}
=======
    // public bool UpdateQuestionOptions(int id,Question options){
    //     bool status = false;
    //     Console.WriteLine("ID "+id);
    //     Console.WriteLine("A "+options.A);
    //     Console.WriteLine("B "+options.B);
    //     Console.WriteLine("C "+options.C);
    //     Console.WriteLine("D "+options.D);
    //  //   string query = "update questionbank set a=@a,b=@b,c=@c,d=@d where id =@id";
    //     string query = "update questionbank set title=@title,a=@a,b=@b,c=@c,d=@d,answerkey=@answerKey where id =@id";
    //     MySqlConnection connection = new MySqlConnection(connectionString);
    //     try
    //     {
    //         connection.Open();   
    //         MySqlCommand command = new MySqlCommand(query, connection);
    //         command.Parameters.AddWithValue("@title", options.Title);
    //         command.Parameters.AddWithValue("@a", options.A);
    //         command.Parameters.AddWithValue("@b", options.B);
    //         command.Parameters.AddWithValue("@c", options.C);
    //         command.Parameters.AddWithValue("@d", options.D);
    //         command.Parameters.AddWithValue("@answerKey", options.AnswerKey);
    //         command.Parameters.AddWithValue("@id", id);
    //         int rowsAffected = command.ExecuteNonQuery();
    //         if (rowsAffected > 0)
    //         {
    //             status = true;
    //         }
            
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return status;
    // }

    // public bool UpdateSubjectCriteria(int questionId,Question question){
    //     bool status = false;
    //     string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId ,subjectid=@subjectId where id =@id";
    //     MySqlConnection connection = new MySqlConnection(connectionString);
    //     try
    //     {
    //         connection.Open();   
    //         MySqlCommand command = new MySqlCommand(query, connection);
    //         command.Parameters.AddWithValue("@evaluationCriteriaId", question.EvaluationCriteriaId);
    //         command.Parameters.AddWithValue("@subjectId", question.SkillId);
    //         Console.WriteLine(question.SkillId);
            
    //         command.Parameters.AddWithValue("@id", questionId);
    //         int rowsAffected = command.ExecuteNonQuery();
    //         if (rowsAffected > 0)
    //         {
    //             status = true;
    //         }
            
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return status;
    // }
}
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e
