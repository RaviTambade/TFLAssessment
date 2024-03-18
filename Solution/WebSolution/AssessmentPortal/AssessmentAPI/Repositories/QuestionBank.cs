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
        string query = @"select * from questions";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
 
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["qid"].ToString());
                string question = reader["question"].ToString();
         
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

    public List<SubjectQuestions> GetSubjectWiseQuestions(string subject)
    {
        Console.WriteLine(subject);
        List<SubjectQuestions> swq = new List<SubjectQuestions>();
        
        string query = @"select questions.qid, questions.question, technicalskills.title from questions, technicalskills where questions.skillid=technicalskills.techskid and technicalskills.title=@subject";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subject", subject);

        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["qid"].ToString());
                string questionTitle = reader["question"].ToString();
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
}