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
        string query = "select * from employee";

        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        { 
            MySqlCommand command = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string fname = reader["fname"].ToString();
                string lname = reader["lname"].ToString();
                string contactno = reader["contactno"].ToString();
                string email = reader["email"].ToString();
                Employee emp = new Employee();
                emp.Id = id;
                emp.FName = fname;
                emp.LName = lname;
                emp.ContactNo = contactno;
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
        string query = @"select * from technicalskills";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {  
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["techskid"].ToString());
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
                int id = int.Parse(reader["evacriid"].ToString());
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

    public List<Question> GetQuestions(int testId)
    {
        Console.WriteLine( "test Id="+ testId);
        
        List<Question> questions = new List<Question>();
        string query = @"select * from questions inner join testquestions on testquestions.questionid = questions.qid where testquestions.testid= @testId";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", testId);

        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["qid"].ToString());
                int tId = int.Parse(reader["testid"].ToString());
                string question = reader["question"].ToString();
                string a = reader["a"].ToString();
                string b = reader["b"].ToString();
                string c = reader["c"].ToString();
                string d = reader["d"].ToString();
                Question ques = new Question();
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
        string query = "INSERT INTO candidateanswers (employeeid, testquestionid, answerkey) VALUES (@employeeId, @testQuestionId, @answerKey)";
        MySqlConnection connection = new MySqlConnection(connectionString);

        try
        {
            connection.Open();

            foreach (var answer in answers)
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", candidateId);
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
        string query = @"select tests.*,technicalskills.title as skill,employee.fname,employee.lname from tests 
                        inner join subjectexperties on subjectexperties.subexid=tests.subexid
                        inner join technicalskills on technicalskills.techskid=subjectexperties.technicalskillid
                        inner join employee on  employee.id=subjectexperties.employeeid;";

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
                int skillId = int.Parse(reader["skillid"].ToString());
                int subjectExpertId = int.Parse(reader["subexid"].ToString());
                DateTime createdOn =DateTime.Parse(reader["createdon"].ToString());
                DateTime modifiedOn =DateTime.Parse(reader["modifiedon"].ToString());
                DateTime scheduledOn =DateTime.Parse(reader["scheduledon"].ToString());
                string skillTitle=reader["skill"].ToString();
                string firstName=reader["fname"].ToString();
                string lastName=reader["lname"].ToString();

                Test test = new Test();
                test.Id = id;
                test.SkillId = skillId;
                test.SubjectExpertId = subjectExpertId;
                test.CreatedOn = createdOn;
                test.ModifiedOn = modifiedOn;
                test.ScheduledOn = scheduledOn;
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

      string criteria="";
        string query = @"select evaluationcriterias.title from evaluationcriterias INNER join questions on questions.evacriid=evaluationcriterias.evacriid
           inner join technicalskills on questions.skillid= evaluationcriterias.skillid WHERE technicalskills.title=@subject and questions.qid=@questionid";

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


    public bool UpdateTest( int testId ,Test test){
    bool status=false;
    MySqlConnection connection = new MySqlConnection(connectionString);
    string query = "update tests set scheduledon =@scheduledOn where id=@testId";
    
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@testId", testId);
    command.Parameters.AddWithValue("@scheduledOn", test.ScheduledOn);
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
    //     return criteria;  
    // }



public bool Insertquestion(Question ques){
    bool status=false;
    MySqlConnection connection = new MySqlConnection(connectionString);
    string query = "insert into questions(qid,question,a,b,c,d,answerkey)values(@qid,@title,@a,@b,@c,@d,@answerkey)";
    
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@qid",ques.Id);
    command.Parameters.AddWithValue("@title",ques.Title);
    command.Parameters.AddWithValue("@a",ques.A);
    command.Parameters.AddWithValue("@b",ques.B);
    command.Parameters.AddWithValue("@c",ques.C);
    command.Parameters.AddWithValue("@d",ques.D);
    command.Parameters.AddWithValue("@answerkey",ques.AnswerKey);
    
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
    Console.WriteLine(status);
    return status;
}
     
 }
