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
                string question = reader["title"].ToString();
         
                QuestionO ques = new QuestionO();
                ques.Id = id;
                ques.Title = question;
                questions.Add(ques);
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
        Console.WriteLine(questions);
    }

    public List<SubjectQuestions> GetSubjectWiseQuestions(int subjectId)
    {
        
        List<SubjectQuestions> swq = new List<SubjectQuestions>();
        
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
                

                SubjectQuestions subjectQuestions= new SubjectQuestions();
                subjectQuestions.Id=id;
                subjectQuestions.QuestionTitle=questionTitle;
                subjectQuestions.SubjectTitle=subjectTitle;
                swq.Add(subjectQuestions);
                Console.WriteLine(swq);
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
        return swq;
    }

    public List<SubjectQuestions> GetSubjectCriteriaQuestions(int subjectId,int criteriaId)
    {
        
        List<SubjectQuestions> subcrique = new List<SubjectQuestions>();
        
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
                

                SubjectQuestions subjectQuestions= new SubjectQuestions();
                subjectQuestions.Id=id;
                subjectQuestions.QuestionTitle=questionTitle;
                subjectQuestions.SubjectTitle=subjectTitle;
                subjectQuestions.CriteriaTitle=criteriaTitle;
                subcrique.Add(subjectQuestions);
                Console.WriteLine(subcrique);
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
        return subcrique;
    }
}