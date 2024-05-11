using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;
using System.Data.SqlClient;
using Dapper;

public class ResultDapperRepository : IResultRepository
{

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ResultDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
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
        string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@testid,@teststarttime,@candidateid)";
        MySqlConnection connection = new MySqlConnection(_connectionString);

        var testTime = time.Year + "-" + time.Month + "-" + time.Day + "T" + time.Hour + ":" + time.Minutes + ":" + time.Seconds;
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testid", testId);
        command.Parameters.AddWithValue("@candidateid", candidateId);
        command.Parameters.AddWithValue("@teststarttime", testTime);
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
        string query = "update candidatetestresults set testendtime =@testEndTime where candidateid=@candidateId and testid=@testId";

        var testTime = time.Year + "-" + time.Month + "-" + time.Day + "T" + time.Hour + ":" + time.Minutes + ":" + time.Seconds;
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@candidateId", candidateId);
        command.Parameters.AddWithValue("@testId", testId);
        command.Parameters.AddWithValue("@testEndTime", testTime);
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
        await Task.Delay(100);
        int score = 0;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            score = con.QueryFirstOrDefault<int>("select score from candidatetestresults where candidateid=@candidateId and testid=@testId", new { candidateId, testId });
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
    //   public async Task <List<Assessment>> GetAllBySubjectMatterExpert(int smeId)  
    //    await Task.Delay(100);
    //         List<Assessment> assessments=new List<Assessment>();   

    //         using (IDbConnection con = new MySqlConnection(_connectionString))
    //         {
    //             var test = con.Query<Assessment>("select * from tests where smeid=@smeId", new{smeId});

    //             assessments = test as List<Assessment>;

    //         }
    //         return assessments;
    //     }
    // public async Task<bool> AddQuestion(int assessmentId, int questionId)  //*******
    // {
    //     await Task.Delay(100);
    //     bool status = false;
    //     using (MySqlConnection con = new MySqlConnection(_connectionString))
    //     { 
    //         var query = "insert into testquestions(testid,questionBankid) values ( "+assessmentId+","+questionId+")"; 
    //         if(con.Execute(query) > 0)
    //         status = true;
    //     }
        
    //     return status;
    // }

    public async Task<List<TestResultDetails>> GetTestResultDetails(int testId)
    {
        await Task.Delay(100);
        List<TestResultDetails> candidateResultDetails = new List<TestResultDetails>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<TestResultDetails>("select candidatetestresults.testid,candidatetestresults.score,candidatetestresults.candidateid,employees.firstname, employees.lastname, subjects.title as subject from candidatetestresults inner join employees on employees.id = candidatetestresults.candidateid inner join tests on candidatetestresults.testid = tests.id  inner join subjects  on tests.subjectid = subjects.id where candidatetestresults.testid = @TestId", new {testId});
            candidateResultDetails= details as List<TestResultDetails>;
        }
        return candidateResultDetails ;
    }

     public async Task<List<AppearedCandidate>> GetAppearedCandidates(int testId)
    {
        await Task.Delay(100);
        List<AppearedCandidate> AppearedCandidates = new List<AppearedCandidate>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<AppearedCandidate>("select candidatetestresults.testid, candidatetestresults.candidateid, employees.firstname, employees.lastname from candidatetestresults inner join employees on employees.id= candidatetestresults.candidateid where candidatetestresults.testid=@TestId", new {testId});
            AppearedCandidates = details as List <AppearedCandidate>;
        }
        return AppearedCandidates ;
    }


  public async Task<List<PassedCandidateDetails>> GetAppearedCandidates(int testId)
    {
        await Task.Delay(100);
        List<AppearedCandidate> AppearedCandidates = new List<AppearedCandidate>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<AppearedCandidate>("select candidatetestresults.testid, candidatetestresults.candidateid, employees.firstname, employees.lastname from candidatetestresults inner join employees on employees.id= candidatetestresults.candidateid where candidatetestresults.testid=@TestId", new {testId});
            AppearedCandidates = details as List <AppearedCandidate>;
        }
        return AppearedCandidates ;
    }

    // public async Task<List<PassedCandidateDetails>> GetPassedCandidateResults(int testId)
    // {
    //     List<PassedCandidateDetails> passedCandidates = new List<PassedCandidateDetails>();
    //     MySqlConnection connection = new MySqlConnection(_connectionString);
    //     string query = @"select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname
    //                         from tests
    //                         inner join candidatetestresults
    //                         on tests.id=candidatetestresults.testid
    //                         inner join employees
    //                         on candidatetestresults.candidateid=employees.id
    //                         where candidatetestresults.score >= tests.passinglevel AND tests.id=@TestId";
    //     try
    //     {
    //         MySqlCommand command = new MySqlCommand(query, connection);
    //         command.Parameters.AddWithValue("@TestId", testId);
    //         await connection.OpenAsync();
    //         MySqlDataReader reader = command.ExecuteReader();
    //         while (await reader.ReadAsync())
    //         {
    //             int testid = int.Parse(reader["id"].ToString());
    //             int candidateid = int.Parse(reader["candidateid"].ToString());
    //             string fname = reader["firstname"].ToString();
    //             string lname = reader["lastname"].ToString();
    //             int passinglevel = int.Parse(reader["passinglevel"].ToString());
    //             int score = int.Parse(reader["score"].ToString());

    //             PassedCandidateDetails candidate = new PassedCandidateDetails();

    //             candidate.TestId = testid;
    //             candidate.CandidateId = candidateid;
    //             candidate.FirstName = fname;
    //             candidate.LastName = lname;
    //             candidate.PassingLevel = passinglevel;
    //             candidate.Score = score;

    //             passedCandidates.Add(candidate);
    //         }
    //         reader.Close();
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         await connection.CloseAsync();
    //     }
    //     return passedCandidates;
    // }

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

    // public bool SetPassingLevel(int testId, int passingLevel)
    // {
    //     bool status = false;
    //     MySqlConnection connection = new MySqlConnection(_connectionString);
    //     string query = "update tests set passinglevel=@passingLevel where id =@testId;";

    //    MySqlCommand command = new MySqlCommand(query, connection);
    //     command.Parameters.AddWithValue("@testId", testId);
    //     command.Parameters.AddWithValue("@passingLevel", passingLevel);

    //     try
    //     {
    //         connection.Open();
    //         int rowsAffected = command.ExecuteNonQuery();
    //         if (rowsAffected > 0)
    //             status = true;
    //     }

    //     catch (Exception e)
    //     {
    //         Console.WriteLine(e.Message);
    //     }
    //     finally
    //     {
    //         connection.Close();
    //     }
    //     return status;

    // }

    public async Task<bool> SetPassingLevel(int testId, int passingLevel)//Using Dissconnected 
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
        string query = @"select tests.id,tests.subjectid,candidatetestresults.candidateid,employees.firstname,employees.lastname,candidatetestresults.score,subjects.title
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




}

