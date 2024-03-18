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

    public List<SubjectQuestions> GetSubjectWiseQuestions(int subjectId)
    {
        
        List<SubjectQuestions> swq = new List<SubjectQuestions>();
        
        string query = @"select questions.qid, questions.question, technicalskills.title from questions, technicalskills where questions.skillid=technicalskills.techskid and technicalskills.techskid=@subjectId";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", subjectId);

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

    public List<SubjectQuestions> GetSubjectCriteriaQuestions(int subjectId,int criteriaId)
    {
        
        List<SubjectQuestions> subcrique = new List<SubjectQuestions>();
        
        string query = @"select questions.qid, questions.question, technicalskills.title as subject ,evaluationcriterias.title as criteria
                            from questions, technicalskills,evaluationcriterias
                            where questions.skillid=technicalskills.techskid and questions.evacriid=evaluationcriterias.evacriid
                            and technicalskills.techskid=@subjectId and evaluationcriterias.evacriid=@criteriaId";
         
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
                int id = int.Parse(reader["qid"].ToString());
                string questionTitle = reader["question"].ToString();
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