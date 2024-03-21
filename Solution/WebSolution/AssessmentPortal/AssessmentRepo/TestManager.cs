using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
namespace Assessment.Repositories;
public class TestManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public List<Employee> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
        string query = "select * from employees";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        { 
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();
                string contact = reader["contact"].ToString();
                string email = reader["email"].ToString();
                Employee employee = new Employee();
                employee.Id = id;
                employee.FirstName = firstName;
                employee.LastName = lastName;
                employee.Contact = contact;
                employee.Email = email;
                employees.Add(employee);
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
                EvaluationCriteria criteria = new EvaluationCriteria();
                criteria.Id = id;
                criteria.Title = title;
                criterias.Add(criteria);
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

    public List<TestQuestion> GetQuestions(int testId)
    {
               
        List<TestQuestion> questions = new List<TestQuestion>();
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
                string title = reader["title"].ToString();
                string a = reader["a"].ToString();
                string b = reader["b"].ToString();
                string c = reader["c"].ToString();
                string d = reader["d"].ToString();
                TestQuestion question = new TestQuestion();
                question.Id = id;
                question.Title = title;
                question.A = a;
                question.B = b;
                question.C = c;
                question.D = d;
                question.TestId = tId;
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
    string query = "update candidatetestresults set testendtime =@testEndTime where candidateid=@candidateId and testid=@testId";
               
    var testTime = time.Year +"-"+time.Month+"-"+time.Day+"T"+time.Hour+":"+time.Minutes+":"+time.Seconds;
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@candidateId", candidateId);
    command.Parameters.AddWithValue("@testId", testId);
    command.Parameters.AddWithValue("@testEndTime", testTime);
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
                int subjectId = int.Parse(reader["subjectid"].ToString());
                int subjectExpertId = int.Parse(reader["smeid"].ToString());
                DateTime creationDate =DateTime.Parse(reader["creationdate"].ToString());
                DateTime modificationDate =DateTime.Parse(reader["modificationdate"].ToString());
                DateTime scheduledDate =DateTime.Parse(reader["scheduleddate"].ToString());
                string subject=reader["skill"].ToString();
                string firstName=reader["firstname"].ToString();
                string lastName=reader["lastname"].ToString();

                Test test = new Test();
                test.Id = id;
                test.SubjectId = subjectId;
                test.SubjectExpertId = subjectExpertId;
                test.CreationDate = creationDate;
                test.ModificationDate = modificationDate;
                test.ScheduledDate = scheduledDate;
                test.Subject = subject;
                test.FirstName=firstName;
                test.LastName=lastName;   
                tests.Add(test);
            }
        }
       catch(Exception e){
            throw e; 
       }
       return tests;
    }

    public string GetCriteria(string subject ,int questionId){
      string criteria="";
        string query = @"select evaluationcriterias.title from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id
                       inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid WHERE subjects.title=@subject and questionbank.id=@questionId";

        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        { 
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@subject",subject);
            command.Parameters.AddWithValue("@questionId",questionId);
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

    public TestQuestion GetQuestion(string subject,int questionid){

        TestQuestion question =null;
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
                int evaluationCriteriaId=int.Parse(reader["evaluationcriteriaid"].ToString());
                string criteria = reader["criteria"].ToString();

                question= new TestQuestion();
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

    public bool Insertquestion(NewQuestion question){
        
        bool status=false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "insert into questionbank(subjectid, title, a, b, c, d, answerkey,evaluationcriteriaid) values (@subjectId, @title, @a, @b, @c, @d, @answerKey, @evaluationCriteriaId)";
        
        MySqlCommand command = new MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@subjectId",question.SubjectId);
        command.Parameters.AddWithValue("@title",question.Title);
        command.Parameters.AddWithValue("@a",question.A);
        command.Parameters.AddWithValue("@b",question.B);
        command.Parameters.AddWithValue("@c",question.C);
        command.Parameters.AddWithValue("@d",question.D);
        command.Parameters.AddWithValue("@answerKey",question.AnswerKey);
        command.Parameters.AddWithValue("@evaluationCriteriaId",question.EvaluationCriteriaId);
        
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
}
