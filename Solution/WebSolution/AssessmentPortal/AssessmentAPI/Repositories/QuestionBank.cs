using MySql.Data.MySqlClient;
using System.Data;
using Entities;
using Requests;

namespace Repositories.Tests;

public class QuestionBank
{

    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public List<QuestionO> GetAllQuestions(){
        
        List<QuestionO> questions = new List<QuestionO>();
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
         
                QuestionO question = new QuestionO();

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

    public List<SubjectQuestion> GetSubjectWiseQuestions(int subjectId)
    {
        
        List<SubjectQuestion> questions = new List<SubjectQuestion>();
        
        string query = @"select questionbank.id, questionbank.title, subjects.title from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@subjectId";
         
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
                string questionTitle = reader["title"].ToString();
                string subjectTitle = reader["title"].ToString();
                

                SubjectQuestion question= new SubjectQuestion();
                question.Id=id;
                question.QuestionTitle=questionTitle;
                question.SubjectTitle=subjectTitle;
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

    public List<SubjectQuestion> GetSubjectCriteriaQuestions(int subjectId,int criteriaId)
    {
        
        List<SubjectQuestion> questions = new List<SubjectQuestion>();
        
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
                string questionTitle = reader["title"].ToString();
                string subjectTitle = reader["subject"].ToString();
                string criteriaTitle = reader["criteria"].ToString();
                
                SubjectQuestion question= new SubjectQuestion();
                
                question.Id=id;
                question.QuestionTitle=questionTitle;
                question.SubjectTitle=subjectTitle;
                question.CriteriaTitle=criteriaTitle;

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

}