using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Dapper;

namespace Transflower.TFLAssessment.Repositories;

public class AssessmentDapperRepository :IAssessmentRepository
{private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public AssessmentDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> CreateTest(Assessment newTest)
    {
        
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"INSERT INTO tests(subjectid,duration,smeid,creationdate,modificationdate,scheduleddate,passinglevel) VALUES (@subjectid,@duration,@smeid,@creationdate,@modificationdate,@scheduleddate,@passinglevel)";
        MySqlCommand command = new MySqlCommand(query, connection);
        TimeOnly time = newTest.Duration;
        command.Parameters.AddWithValue("@subjectid", newTest.SubjectId);
        command.Parameters.AddWithValue("@duration", time.ToString("HH:mm:ss"));
        command.Parameters.AddWithValue("@smeid", newTest.SubjectExpertId);
        command.Parameters.AddWithValue("@creationdate", newTest.CreationDate);
        command.Parameters.AddWithValue("@modificationdate", newTest.ModificationDate);
        command.Parameters.AddWithValue("@scheduleddate", newTest.ScheduledDate);
        command.Parameters.AddWithValue("@passinglevel", newTest.PassingLevel);

        try
        {
            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
            }

        }
        catch (Exception ee)
        {
            Console.WriteLine(ee.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

    public async Task <Assessment> GetDetails(int assessmentId) //*******
    {
            Assessment assessment=new Assessment();   
            string query = @"select * from tests where id=@assessmentId";

            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@assessmentId",assessmentId);
            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString(); 
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    
                }
                await reader.CloseAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                await connection.CloseAsync();
            }
            return assessment;
    }
    public async Task<List<Assessment>> GetAll(DateTime fromDate, DateTime toDate)  //******
    {
        List<Assessment> assessments=new List<Assessment>();
         string query = @"select * from tests where creationDate  between @fromDate and @toDate";

            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromDate",fromDate);
            command.Parameters.AddWithValue("@toDate",toDate);
            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString();
                    Assessment assessment=new Assessment();
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    assessments.Add(assessment);
                }
               await reader.CloseAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                await connection.CloseAsync();
            }
            return assessments;
    }
    public async Task <List<Assessment>> GetAllBySubjectMatterExpert(int smeId)   //********
    {

        /*await Task.Delay(100);
        List<Employee> employees = new List<Employee>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var emp = con.Query<Employee>("SELECT * FROM employees");
 
            employees = emp as List<Employee>;
 
        }
        return employees;*/
        await Task.Delay(100);
        List<Assessment> assessments=new List<Assessment>();   
        
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var test = con.Query<Assessment>("select * from tests where smeid=@smeId", new{smeId});
 
            assessments = test as List<Assessment>;
 
        }
        return assessments;
    }
    public async Task<bool> AddQuestion(int assessmentId, int questionId)  //*******
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        { 
            var query = "insert into testquestions(testid,questionBankid) values ( "+assessmentId+","+questionId+")"; 
            if(con.Execute(query) > 0)
            status = true;
        }
        
        return status;
    }
    public async Task<bool> AddQuestions(int assessmentId, List<TestQuestion> questions) //****
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString); 
        try
        {
            foreach(var question in questions){
                string query = "insert into testquestions(testid,questionbankid) values (@testId, @questionBankId)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@testId", assessmentId);
                command.Parameters.AddWithValue("@questionBankId", question.QuestionBankId);
                await connection.OpenAsync();
                int rowsAffected = await command.ExecuteNonQueryAsync();
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
            await connection.CloseAsync();
        }
        return status;
    }
    public async Task<bool> RemoveQuestion(int assessmentId, int questionId)
    {
            bool status =false;  
            string query = "Delete from testquestions where testid="+assessmentId+" and questionbankid="+questionId+"";
            using (MySqlConnection con = new MySqlConnection(_connectionString))
            {
                if(con.Execute(query)> 0)
                status =true;
            } 
        return status;
    }

    public async Task<bool> RemoveQuestions(int[] testQuestions)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);

        try
        {
            await connection.OpenAsync(); // Open connection outside the loop

            foreach (var testQuestionId in testQuestions)
            {
                Console.WriteLine("DAl" + testQuestionId);

                string query = "DELETE FROM testquestions WHERE id = @id";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@id", testQuestionId);

                int rowsAffected = await command.ExecuteNonQueryAsync();
                if (rowsAffected > 0)
                {
                    status = true;
                }
            }
        }
        catch (Exception e)
        {
          throw e;
        }
        finally
        {
                await connection.CloseAsync();
        }
        return status;
    }
    
    public async Task <bool> ChangeDuration(int assessmentId, string duration){
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "update tests set duration=@duration where id=@assessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentId", assessmentId);
        command.Parameters.AddWithValue("@duration", duration);
        try
        {
           await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
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
            await connection.CloseAsync();
        }
        return status;
    } 
    public async Task<bool> Reschedule(int assessmentId, DateTime date){
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "update tests set scheduleddate=@scheduledDate where id=@assessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentId", assessmentId);
        command.Parameters.AddWithValue("@scheduledDate", date);
        try
        {
            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
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
            await connection.CloseAsync();
        }
        return status;
    }  


     public async Task <List<Assessment>> GetAllTests()
    {
        List<Assessment> tests = new List<Assessment>();
        string query = @"select tests.*,subjects.title as skill,employees.firstname,employees.lastname from tests 
                        inner join subjectmatterexperts on subjectmatterexperts.id=tests.smeid
                        inner join subjects on subjects.id=subjectmatterexperts.subjectid
                        inner join employees on  employees.id=subjectmatterexperts.employeeid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                // TimeOnly duration=TimeOnly.Parse(reader["duration"]);
                int subjectId = int.Parse(reader["subjectid"].ToString());
                int subjectExpertId = int.Parse(reader["smeid"].ToString());
                DateTime creationDate = DateTime.Parse(reader["creationdate"].ToString());
                DateTime modificationDate = DateTime.Parse(reader["modificationdate"].ToString());
                DateTime scheduledDate = DateTime.Parse(reader["scheduleddate"].ToString());
                string subject = reader["skill"].ToString();
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();

                Assessment test = new Assessment();
                test.Id = id;
                test.SubjectId = subjectId;
                test.SubjectExpertId = subjectExpertId;
                test.CreationDate = creationDate;
                test.ModificationDate = modificationDate;
                test.ScheduledDate = scheduledDate;
                // test.Subject = subject;
                // test.FirstName = firstName;
                // test.LastName = lastName;
                tests.Add(test);
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally{
            await connection.CloseAsync();
        }
        return tests;
    }



      public async Task <List<Employee>> GetAllEmployees()
    {
        await Task.Delay(100);
        List<Employee> employees = new List<Employee>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var emp = con.Query<Employee>("SELECT * FROM employees");
 
            employees = emp as List<Employee>;
 
        }
        return employees;
    }
    public async Task <List<Subject>> GetAllSubjects()
    {
        await Task.Delay(100);
        List<Subject> subjects = new List<Subject>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var sub = con.Query<Subject>("select * from subjects");
 
            subjects = sub as List<Subject>;
 
        }
       
        return subjects;
    }



    public async Task<List<EvaluationCriteria>> GetEvalutionCriterias()
    {
        await Task.Delay(100);
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var criteriaList = con.Query<EvaluationCriteria>("select * from evaluationcriterias");
 
            criterias = criteriaList as List<EvaluationCriteria>;
 
        }
       
        return criterias;
    }



    public async Task <List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId)
    {
        await Task.Delay(100);
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var criteriaList = con.Query<EvaluationCriteria>("select * from evaluationcriterias WHERE subjectid=@subjectId", new {subjectId});
 
            criterias = criteriaList as List<EvaluationCriteria>;
 
        }
       
        return criterias;
    }

}
