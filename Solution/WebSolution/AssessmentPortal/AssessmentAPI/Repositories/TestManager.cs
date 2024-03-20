using MySql.Data.MySqlClient;
using System.Data;
using Entities;
using Requests;

namespace Repositories.Tests;

public class TestManager
{

    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public List<Employee> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
        string query = "select * from employees";

        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        { 
            MySqlCommand command = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();
                string contact = reader["contact"].ToString();
                string email = reader["email"].ToString();
                Employee emp = new Employee();
                emp.Id = id;
                emp.FirstName = firstName;
                emp.LastName = lastName;
                emp.Contact = contact;
                emp.Email = email;
                employees.Add(emp);
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
        return employees;
    }

    public List<Subject> GetAllSubjects()
    {
        List<Subject> subjects = new List<Subject>();
        string query = @"select * from subjects";

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
                Subject subject = new Subject();
                subject.Id = id;
                subject.Title = title;
                subjects.Add(subject);
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
        return subjects;
    }

    public List<EvaluationCriteria> GetEvalutionCriterias()
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias";

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
                EvaluationCriteria evacri = new EvaluationCriteria();
                evacri.Id = id;
                evacri.Title = title;
                criterias.Add(evacri);
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
        return criterias;
    }


    public int GetCandidateScore(int candidateId, int testId)
    {
        string query="spcandidatetestresult";

        MySqlConnection connection = new MySqlConnection(connectionString);
       

        int score = 0;
        try
        {
             MySqlCommand command = new MySqlCommand(query, connection);
             command.CommandType = CommandType.StoredProcedure;
             command.Parameters.AddWithValue("@pcandidateId", candidateId);
             command.Parameters.AddWithValue("@ptestId", testId);
             command.Parameters.AddWithValue("@pscore", MySqlDbType.Int32);
             command.Parameters["@pscore"].Direction = ParameterDirection.Output;
             connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
            score = Convert.ToInt32(command.Parameters["@pscore"].Value);
            Console.WriteLine(score);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.Close();
        }
        return score;
    }

    public List<Questions> GetQuestions(int testId)
    {
               
        List<Questions> questions = new List<Questions>();
        string query = @"select * from questionbank inner join testquestions on testquestions.questionbankid = questionbank.id where testquestions.testid=@testId";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", testId);

        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                int tId = int.Parse(reader["testid"].ToString());
                string question = reader["title"].ToString();
                string a = reader["a"].ToString();
                string b = reader["b"].ToString();
                string c = reader["c"].ToString();
                string d = reader["d"].ToString();
                Questions ques = new Questions();
                ques.Id = id;
                ques.Title = question;
                ques.A = a;
                ques.B = b;
                ques.C = c;
                ques.D = d;
                ques.TestId = tId;
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
    }

    public bool InsertCandidateAnswers(int candidateId,List<CandidateAnswer> answers)
    {
        bool status = false;
        string query = "INSERT INTO candidateanswers (candidateid, testquestionid, answerkey) VALUES (@candidateId, @testQuestionId, @answerKey)";
        MySqlConnection connection = new MySqlConnection(connectionString);

        try
        {
            connection.Open();

            foreach (var answer in answers)
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@candidateId", candidateId);
                command.Parameters.AddWithValue("@testQuestionId", answer.TestQuestionId);
                command.Parameters.AddWithValue("@answerKey", answer.Answer);

                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    status = true;
                }
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
 
    public bool SetTestStartTime(int candidateId,int testId,  TestTime time ){

    bool status=false;
    string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@testid,@teststarttime,@candidateid)";
     MySqlConnection connection = new MySqlConnection(connectionString);         

    var testTime = time.Year +"-"+time.Month+"-"+time.Day+"T"+time.Hour+":"+time.Minutes+":"+time.Seconds;
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@testid", testId);
    command.Parameters.AddWithValue("@candidateid", candidateId);
    command.Parameters.AddWithValue("@teststarttime", testTime);

    
    try{
        connection.Open();
        int rowsAffected = command.ExecuteNonQuery();
        if (rowsAffected > 0)
        {
            status = true;
        }   
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
}

    public bool SetTestEndTime( int candidateId,int testId, TestTime time ){
    bool status=false;
    
    MySqlConnection connection = new MySqlConnection(connectionString);
    string query = "update candidatetestresults set testendtime =@testendtime where candidateid=@candidateid and testid=@testid";
               
    var testTime = time.Year +"-"+time.Month+"-"+time.Day+"T"+time.Hour+":"+time.Minutes+":"+time.Seconds;
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@candidateid", candidateId);
    command.Parameters.AddWithValue("@testid", testId);
    command.Parameters.AddWithValue("@testendtime", testTime);
    Console.WriteLine(candidateId+" "+testId+" "+testTime);
     try{ 
            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
}
   public List<Test> GetAllTests()
    {
        List<Test> tests = new List<Test>();
        string query = @"select tests.*,subjects.title as skill,employees.firstname,employees.lastname from tests 
                        inner join subjectmatterexperts on subjectmatterexperts.id=tests.smeid
                        inner join subjects on subjects.id=subjectmatterexperts.subjectid
                        inner join employees on  employees.id=subjectmatterexperts.employeeid";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {  
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                // TimeOnly duration=TimeOnly.Parse(reader["duration"]);
                int skillId = int.Parse(reader["subjectid"].ToString());
                int subjectExpertId = int.Parse(reader["smeid"].ToString());
                DateTime createdOn =DateTime.Parse(reader["creationdate"].ToString());
                DateTime modifiedOn =DateTime.Parse(reader["modificationdate"].ToString());
                DateTime scheduledOn =DateTime.Parse(reader["scheduleddate"].ToString());
                string skillTitle=reader["skill"].ToString();
                string firstName=reader["firstname"].ToString();
                string lastName=reader["lastname"].ToString();

                Test test = new Test();
                test.Id = id;
                test.SubjectId = skillId;
                test.SmeId = subjectExpertId;
                test.CreationDate = createdOn;
                test.ModificationDate = modifiedOn;
                test.ScheduledDate = scheduledOn;
                test.SkillTitle = skillTitle;
                test.FirstName=firstName;
                test.LastName=lastName;   
                tests.Add(test);
            }
        }
       catch(Exception e){
       Console.WriteLine(e.Message);
       
       }
       return tests;
    }

    public string GetCriteria(string subject ,int questionid){
    Console.WriteLine(subject+" "+questionid);
      string criteria="";
        string query = @"select evaluationcriterias.title from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id
           inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid WHERE subjects.title=@subject and questionbank.id=@questionid";

        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        { 
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@subject",subject);
            command.Parameters.AddWithValue("@questionid",questionid);


            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if(reader.Read())
            {
               
              string   title = reader["title"].ToString();
               criteria=title;
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
        return criteria;
    }

    public Questions GetQuestion(string subject,int questionid){
        Questions question =new();
        string query = @" select questionbank.*,evaluationcriterias.title as criteria from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id
        inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid  WHERE subjects.title=@subject and questionbank.id=@questionid";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subject", subject);
        command.Parameters.AddWithValue("@questionid", questionid);


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
                int evaluationCriteriaId=int.Parse(reader["evaluationcriteriaid"].ToString());
                string criteariaTitle = reader["criteria"].ToString();



             question= new Questions();
                question.Id = id;
                question.Title = title;
                question.A = a;
                question.B = b;
                question.C = c;
                question.D = d;
                question.EvaluationCriteriaId = evaluationCriteriaId;
                question.Criteria = criteariaTitle;
            
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


//     public bool UpdateTest( int testId ,Test test){
//     bool status=false;
//     MySqlConnection connection = new MySqlConnection(connectionString);
//     string query = "update tests set scheduleddate =@scheduledOn where id=@testId";
    
//     MySqlCommand command = new MySqlCommand(query, connection);
//     command.Parameters.AddWithValue("@testId", testId);
//     command.Parameters.AddWithValue("@scheduledOn", test.ScheduledOn);
//      try{ 
//             connection.Open();
//             int rowsAffected = command.ExecuteNonQuery();
//             if (rowsAffected > 0)
//             {
//                 status = true;
//             }
//     }
//     catch(Exception e){
//        Console.WriteLine(e.Message);
//     }
//     finally{
//         connection.Close();
//     }
//     return status;
// }

// public bool Insertquestion(NewQuestion ques){
//     bool status=false;
//     MySqlConnection connection = new MySqlConnection(connectionString);
//     string query = "insert into questionbank(subjectid, title, a, b, c, d, answerkey,evaluationcriteriaid) values (@skillid, @title, @a, @b, @c, @d, @answerkey, @evacriid)";
    
//     MySqlCommand command = new MySqlCommand(query, connection);

//     command.Parameters.AddWithValue("@skillid",ques.SubjectId);
//     command.Parameters.AddWithValue("@title",ques.Title);
//     command.Parameters.AddWithValue("@a",ques.A);
//     command.Parameters.AddWithValue("@b",ques.B);
//     command.Parameters.AddWithValue("@c",ques.C);
//     command.Parameters.AddWithValue("@d",ques.D);
//     command.Parameters.AddWithValue("@answerkey",ques.AnswerKey);
//     command.Parameters.AddWithValue("@evacriid",ques.EvaluationCriteriaId);
    
//      try{ 
//             connection.Open();
//             int rowsAffected = command.ExecuteNonQuery();
//             if (rowsAffected > 0)
//             {
//                 status = true;
//             }
//     }
//     catch(Exception e){
//        Console.WriteLine(e.Message);
//     }
//     finally{
//         connection.Close();
//     }
//     return status;
// }
     
 
