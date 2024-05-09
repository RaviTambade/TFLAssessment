
using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories.Implementations;


public class TestManager : ITestManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    
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
    public List<Test> GetAllTestsDesignedBy(int smeId)   //********
    {
        List<Test> tests = new List<Test>();
        return tests;

    }
    public async Task<bool> AddQuestion(int assessmentId, int questionId)  //*******
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "insert into testquestions(testid,questionBankid) values ( @testId, @questionBankId)";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", assessmentId);
        command.Parameters.AddWithValue("@questionBankId", questionId);
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

    public async Task<bool> AddQuestions(int assessmentId, List<TestQuestion> questions) //****
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            foreach (var question in questions)
            {
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
        bool status = false;
        string query = @"Delete from testquestions where testid=@testId and questionbankid=@questionBankId";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", assessmentId);
        command.Parameters.AddWithValue("@questionBankId", questionId);
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
    public async Task<bool> ChangeDuration(int assessmentId, string duration)
    {
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
    public async Task<bool> Reschedule(int assessmentId, DateTime date)
    {
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
   public async Task<List<TestResultDetails>> GetTestResultDetails(int testId)
    {
        List<TestResultDetails> resultdetails = new List<TestResultDetails>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select candidatetestresults.testid,candidatetestresults.score,candidatetestresults.candidateid
                         ,employees.firstname,employees.lastname,subjects.title as subject
                         from candidatetestresults
                         inner join employees
                         on employees.id=candidatetestresults.candidateid
                         inner join tests
                         on candidatetestresults.testid=tests.id
                         inner join subjects
                         on tests.subjectid=subjects.id
                         where candidatetestresults.testid=@TestId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TestId", testId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int testid = int.Parse(reader["testid"].ToString());
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                string subject = reader["subject"].ToString();
                int score = int.Parse(reader["score"].ToString());

                TestResultDetails results = new TestResultDetails();

                results.TestId = testid;
                results.CandidateId = candidateid;
                results.FirstName = fname;
                results.LastName = lname;
                results.Subject = subject;
                results.Score = score;
                resultdetails.Add(results);
            }
            reader.Close();


        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return resultdetails;
    }

    public async Task<CandidateResultDetails> CandidateTestResultDetails(int candidateId, int testId)
    {
        string query = "spcandidatetestresultdetails";
        CandidateResultDetails candidateResultDetails = null;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@pcandidateId", candidateId);
            command.Parameters.AddWithValue("@ptestId", testId);
            command.Parameters.AddWithValue("@pcorrectAnswers", MySqlDbType.Int32);
            command.Parameters.AddWithValue("@pincorrectAnswers", MySqlDbType.Int32);
            command.Parameters.AddWithValue("@pskippedQuestions", MySqlDbType.Int32);
            command.Parameters["@pcorrectAnswers"].Direction = ParameterDirection.Output;
            command.Parameters["@pincorrectAnswers"].Direction = ParameterDirection.Output;
            command.Parameters["@pskippedQuestions"].Direction = ParameterDirection.Output;

            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
            int correctAnswers = Convert.ToInt32(command.Parameters["@pcorrectAnswers"].Value);
            int incorrectAnswers = Convert.ToInt32(command.Parameters["@pincorrectAnswers"].Value);
            int skippedQuestions = Convert.ToInt32(command.Parameters["@pskippedQuestions"].Value);

            candidateResultDetails = new CandidateResultDetails()
            {
                CorrectAnswers = correctAnswers,
                IncorrectAnswers = incorrectAnswers,
                SkippedQuestions = skippedQuestions,
                CandidateId = candidateId,
                TestId = testId
            };

        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return candidateResultDetails;
    }
   public async Task<int> GetCandidateScore(int candidateId, int testId)
    {
        string query = "spcandidatetestresult";
      

        MySqlConnection connection = new MySqlConnection(_connectionString);
        int score = 0;
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@pcandidateId", candidateId);
            command.Parameters.AddWithValue("@ptestId", testId);
            command.Parameters.AddWithValue("@pscore", MySqlDbType.Int32);
            command.Parameters["@pscore"].Direction = ParameterDirection.Output;
            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
            score = Convert.ToInt32(command.Parameters["@pscore"].Value);
            Console.WriteLine(score);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        Console.WriteLine(score);
        return score;
    }
        public async Task<List<Employee>> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
        string query = "select * from employees";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
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
            await connection.CloseAsync();
        }
        return employees;

    }

    public async Task<List<Subject>> GetAllSubjects()
    {
        List<Subject> subjects = new List<Subject>();
        string query = @"select * from subjects";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            await connection.OpenAsync();
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
            await connection.CloseAsync();
        }
        return subjects;
    }



   public async Task<bool>SetPassingLevel(int testId, int passingLevel)//Using Dissconnected 
  {
    bool status = false;
    MySqlConnection connection = new MySqlConnection(_connectionString);
    await Task.Delay(5000);
    try
    {

      string query = "select * from tests";
      MySqlCommand command = new MySqlCommand(query, connection);
      MySqlDataAdapter adapter = new MySqlDataAdapter(command);
      DataSet dataSet = new DataSet();
      MySqlCommandBuilder builder = new MySqlCommandBuilder(adapter);
      adapter.Fill(dataSet);
      DataTable dataTable = dataSet.Tables[0];

      DataColumn[] keyColumn = new DataColumn[1];
      keyColumn[0] = dataTable.Columns["id"];
      dataTable.PrimaryKey = keyColumn;

      DataRow row = dataTable.Rows.Find(testId);
      row["passinglevel"] = passingLevel;
      adapter.Update(dataSet);
      status = true;


    }
    catch (Exception e)
    {
      Console.WriteLine(e.Message);
      throw e;
    }
    return status;
  }

}
