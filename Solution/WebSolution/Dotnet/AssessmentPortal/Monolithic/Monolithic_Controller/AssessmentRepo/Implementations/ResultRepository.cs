using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using System.Data.Common;

namespace  Transflower.TFLAssessment.Repositories;

public class ResultRepository : IResultRepository
{

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ResultRepository(IConfiguration configuration)
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

    public async Task<bool> SetCandidateTestStartTime(int candidateId, int assessmentid, TestTime time)
    {
        bool status = false;
        // string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@Testid,@Teststarttime,@Candidateid)";
        string query="insert into candidatetestresults(assessmentid,teststarttime,candidateid) values (@assessmentid,@Teststarttime,@Candidateid)";

        MySqlConnection connection = new MySqlConnection(_connectionString);

        var testTime = time.Year + "-" + time.Month + "-" + time.Day + " " + time.Hour + ":" + time.Minutes + ":" + time.Seconds;
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentid", assessmentid);
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


    public async Task<bool> SetCandidateTestEndTime(int candidateId, int assessmentid, TestTime time)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "update candidatetestresults set testendtime =@TestEndTime where candidateid=@CandidateId and assessmentid=@assessmentid";

        var testTime = time.Year + "-" + time.Month + "-" + time.Day + "T" + time.Hour + ":" + time.Minutes + ":" + time.Seconds;
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@CandidateId", candidateId);
        command.Parameters.AddWithValue("@assessmentid", assessmentid);
        command.Parameters.AddWithValue("@TestEndTime", testTime);
        Console.WriteLine(candidateId + " " + assessmentid + " " + testTime);
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

    public async Task<int> GetCandidateTestScore(int candidateId, int assessmentid)
    {
        int score = 0;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select score from candidatetestresults where candidateid=@CandidateId and assessmentid=@assessmentid
";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@CandidateId", candidateId);
            command.Parameters.AddWithValue("@assessmentid", assessmentid);
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

    public async Task<List<TestResultDetails>> GetTestResultDetail(int assessmentid)
    {
        Console.WriteLine(assessmentid);
        List<TestResultDetails> resultdetails = new List<TestResultDetails>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"SELECT 
                        candidatetestresults.assessmentid, 
                        candidatetestresults.score, 
                        candidatetestresults.candidateid,
                        employees.firstname, 
                        employees.lastname, 
                        subjects.title AS subject, 
                        tests.name AS testname 
                        FROM candidatetestresults 
                        INNER JOIN employees ON employees.id = candidatetestresults.candidateid 
                        INNER JOIN tests ON candidatetestresults.assessmentid = tests.id 
                        INNER JOIN subjects ON tests.subjectid = subjects.id 
                        WHERE candidatetestresults.assessmentid=@assessmentid";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@assessmentid", assessmentid);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int assessmentId = int.Parse(reader["assessmentid"].ToString());
                string testname = reader["testname"].ToString();
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                string subject = reader["subject"].ToString();
                int score = int.Parse(reader["score"].ToString());

                TestResultDetails results = new TestResultDetails();

                results.assessmentId = assessmentId;
                results.TestName = testname;
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

    public async Task<List<AppearedCandidate>> GetAppearedCandidates(int assessmentId)
    {
        List<AppearedCandidate> appearedCandidates = new List<AppearedCandidate>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select candidatetestresults.assessmentid, candidatetestresults.candidateid, employees.firstname, employees.lastname
                            from candidatetestresults 
                            inner join employees 
                            on employees.id= candidatetestresults.candidateid
                            where candidatetestresults.assessmentid=@AssessmentId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@AssessmentId", assessmentId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int assessmentid = int.Parse(reader["assessmentid"].ToString());
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();

                AppearedCandidate candidate = new AppearedCandidate();

                candidate.AssessmentId = assessmentid;
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
        string query = @"SELECT cr.assessmentid AS Id, cr.score AS Score, t.name AS TestName
                        FROM candidatetestresults cr
                        JOIN tests t ON cr.assessmentid = t.id where candidateid=@candidateId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@candidateId", candidateId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                TestList details = new TestList
                {
                    TestId = int.Parse(reader["Id"].ToString()),
                    Score = int.Parse(reader["Score"].ToString()),
                    TestName = reader["TestName"].ToString()
                };

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
        string query = @" select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname
                            from tests
                            inner join candidatetestresults
                            on tests.id=candidatetestresults.assessmentid
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

                candidate.AssessmentId = testid;
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

    public async Task<List<FailedCandidateDetails>> GetFailedCandidateResults(int assessmentId)
    {
        List<FailedCandidateDetails> failedCandidates = new List<FailedCandidateDetails>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = @"select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname
                            from tests 
                            inner join assessments on assessments.test_id=tests.id
                            inner join candidatetestresults
                            on assessments.id=candidatetestresults.assessmentid
                            inner join employees
                            on candidatetestresults.candidateid=employees.id
                            where candidatetestresults.score <= tests.passinglevel AND assessments.id=@assessmentId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@AssessmentId", assessmentId);
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

                candidate.AssessmentId = testid;
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
                        on tests.id=candidatetestresults.assessmentid
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
        int subjectid = int.Parse(reader["subjectid"].ToString()); 
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
        string query = @"select * from subjects";
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

    public async Task<List<TestAverageReport>> GetTestAverageReport(int testId)
    {
        List<TestAverageReport> averageReports = new List<TestAverageReport>();
        string query = "spgetaveragereportbytestid";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@testid", testId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                // int testid = testId;
                string subjectname = reader["subjectname"].ToString();
                string concept = reader["concept"].ToString();
                int totalquestionsanswered = int.Parse(reader["totalquestionsanswered"].ToString());
                // int correctanswers = Convert.ToInt32(reader["correctanswers"]);
                int correctanswers = int.Parse(reader["correctanswers"].ToString());
                double percentagecorrect = Convert.ToDouble(reader["percentagecorrect"]);


                TestAverageReport testAverageReport = new TestAverageReport();
                testAverageReport.SubjectName = subjectname;
                testAverageReport.Concept = concept;
                testAverageReport.TotalQuestionsAnswered = totalquestionsanswered;
                testAverageReport.CorrectAnswers = correctanswers;
                testAverageReport.PercentageCorrect = percentagecorrect;

                averageReports.Add(testAverageReport);
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
        return averageReports;
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

    //GetTestScoresByCandidateId
    public async Task<List<TestScoreDto>> GetCandidateAllScore(int candidateId)
    {
        List<TestScoreDto> scores = new List<TestScoreDto>();
        string query = @"SELECT t.Name AS TestName, ctr.score AS Score
            FROM candidatetestresults ctr
            JOIN tests t ON ctr.assessmentid = t.id
            WHERE ctr.candidateid = @candidateId";

        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        {
            try
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.CommandType = CommandType.Text;
                command.Parameters.AddWithValue("@candidateId", candidateId);
                // command.Parameters.AddWithValue("@candidateId", candidateId);

                await connection.OpenAsync();
                // MySqlDataReader reader = command.ExecuteReader();
                DbDataReader reader = await command.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    var scoreObj = reader["Score"];
                    int score = scoreObj == DBNull.Value ? 0 : Convert.ToInt32(scoreObj);
                    var dto = new TestScoreDto
                    {
                        TestName = reader["TestName"].ToString(),
                        Score = score
                    };

                    scores.Add(dto);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
                // Optional: log error
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        return scores;
    }

}

