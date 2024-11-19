using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace  Transflower.TFLAssessment.Repositories;

public class ResultRepository : IResultRepository
{

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ResultRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
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

    public async Task<bool> SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
    {
        bool status = false;
        string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@Testid,@Teststarttime,@Candidateid)";
        MySqlConnection connection = new MySqlConnection(_connectionString);

        var testTime = time.Year + "-" + time.Month + "-" + time.Day + "T" + time.Hour + ":" + time.Minutes + ":" + time.Seconds;
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@Testid", testId);
        command.Parameters.AddWithValue("@Candidateid", candidateId);
        command.Parameters.AddWithValue("@Teststarttime", testTime);
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
        Console.WriteLine(status);
        return status;
    }


    public async Task<bool> SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
    {
        bool status = false;

        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "update candidatetestresults set testendtime =@TestEndTime where candidateid=@CandidateId and testid=@TestId";

        var testTime = time.Year + "-" + time.Month + "-" + time.Day + "T" + time.Hour + ":" + time.Minutes + ":" + time.Seconds;
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@CandidateId", candidateId);
        command.Parameters.AddWithValue("@TestId", testId);
        command.Parameters.AddWithValue("@TestEndTime", testTime);
        Console.WriteLine(candidateId + " " + testId + " " + testTime);
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

    public async Task<int> GetCandidateTestScore(int candidateId, int testId)
    {
        int score = 0;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select score from candidatetestresults where candidateid=@CandidateId and testid=@TestId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@CandidateId", candidateId);
            command.Parameters.AddWithValue("@TestId", testId);
            await connection.OpenAsync();
            score = (int)command.ExecuteScalar();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return score;
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

    public async Task<List<AppearedCandidate>> GetAppearedCandidates(int testId)
    {
        List<AppearedCandidate> appearedCandidates = new List<AppearedCandidate>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select candidatetestresults.testid, candidatetestresults.candidateid, employees.firstname, employees.lastname
                            from candidatetestresults 
                            inner join employees 
                            on employees.id= candidatetestresults.candidateid
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

                AppearedCandidate candidate = new AppearedCandidate();

                candidate.TestId = testid;
                candidate.CandidateId = candidateid;
                candidate.FirstName = fname;
                candidate.LastName = lname;
                appearedCandidates.Add(candidate);
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
        return appearedCandidates;
    }

    public async Task<List<TestList>> GetTestList(int candidateId)
    {
        List<TestList> testResultDetails = new List<TestList>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select *from candidatetestresults where candidateid=@candidateId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@candidateId", candidateId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int testid = int.Parse(reader["testid"].ToString());
                int score=int.Parse(reader["score"].ToString());

                TestList details = new TestList();

                details.TestId = testid;
                details.Score = score;
                testResultDetails.Add(details);
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
        return testResultDetails;
    }


    public async Task<List<PassedCandidateDetails>> GetPassedCandidateResults(int testId)
    {
        List<PassedCandidateDetails> passedCandidates = new List<PassedCandidateDetails>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname
                            from tests
                            inner join candidatetestresults
                            on tests.id=candidatetestresults.testid
                            inner join employees
                            on candidatetestresults.candidateid=employees.id
                            where candidatetestresults.score >= tests.passinglevel AND tests.id=@TestId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TestId", testId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int testid = int.Parse(reader["id"].ToString());
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                int passinglevel = int.Parse(reader["passinglevel"].ToString());
                int score = int.Parse(reader["score"].ToString());

                PassedCandidateDetails candidate = new PassedCandidateDetails();

                candidate.TestId = testid;
                candidate.CandidateId = candidateid;
                candidate.FirstName = fname;
                candidate.LastName = lname;
                candidate.PassingLevel = passinglevel;
                candidate.Score = score;

                passedCandidates.Add(candidate);
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
        return passedCandidates;
    }

    public async Task<List<FailedCandidateDetails>> GetFailedCandidateResults(int testId)
    {
        List<FailedCandidateDetails> failedCandidates = new List<FailedCandidateDetails>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname
                            from tests
                            inner join candidatetestresults
                            on tests.id=candidatetestresults.testid
                            inner join employees
                            on candidatetestresults.candidateid=employees.id
                            where candidatetestresults.score <= tests.passinglevel AND tests.id=@TestId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TestId", testId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int testid = int.Parse(reader["id"].ToString());
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                int passinglevel = int.Parse(reader["passinglevel"].ToString());
                int score = int.Parse(reader["score"].ToString());

                FailedCandidateDetails candidate = new FailedCandidateDetails();

                candidate.TestId = testid;
                candidate.CandidateId = candidateid;
                candidate.FirstName = fname;
                candidate.LastName = lname;
                candidate.PassingLevel = passinglevel;
                candidate.Score = score;

                failedCandidates.Add(candidate);
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
        return failedCandidates;
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
    public async Task<List<CandidateSubjectResults>> GetSubjectResultDetails(int subjectId)
    {
        List<CandidateSubjectResults> resultdetails = new List<CandidateSubjectResults>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query=@"select tests.id,tests.subjectid,candidatetestresults.candidateid,employees.firstname,employees.lastname,candidatetestresults.score,subjects.title
                        from tests
                        inner join candidatetestresults
                        on tests.id=candidatetestresults.testid
                        inner join employees
                        on candidatetestresults.candidateid=employees.id
                        inner join subjects
                        on tests.subjectid=subjects.id
                        where tests.subjectid=@SubjectId";
         try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@SubjectId", subjectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

             while (await reader.ReadAsync())
            {
                int testid = int.Parse(reader["id"].ToString());
                int candidateid = int.Parse(reader["candidateid"].ToString());
                int subjectid = int.Parse(reader["subjectId"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                string subject = reader["title"].ToString();
                int score = int.Parse(reader["score"].ToString());

                CandidateSubjectResults subjectresults = new CandidateSubjectResults();

                subjectresults.TestId = testid;
                subjectresults.CandidateId = candidateid;
                subjectresults.SubjectId = subjectid;
                subjectresults.FirstName = fname;
                subjectresults.LastName = lname;
                subjectresults.Subject = subject;
                subjectresults.Score = score;
                resultdetails.Add(subjectresults);
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
   

    public async Task<List<Subject>> GeAllSubjects()
    {
    
        List<Subject> subjects = new List<Subject>();

        List<CandidateSubjectResults> resultdetails = new List<CandidateSubjectResults>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query=@"select * from subjects";
         try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
         
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

             while (await reader.ReadAsync())
            {
                int subjectid = int.Parse(reader["id"].ToString());
                
                string title = reader["title"].ToString();
                

                Subject sub = new Subject();

                sub.Id = subjectid;
                sub.Title = title;
                
                subjects.Add(sub);
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
    /*public Task<int[]> GetAllTestIds()
    {
            int[] testIds = new []int();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query=@"select * from tests";
         try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

             while (await reader.ReadAsync())
            {
                int testid = int.Parse(reader["id"].ToString());
                
                testIds.Add(testid);
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
        return testIds;

    }*/
    
}

