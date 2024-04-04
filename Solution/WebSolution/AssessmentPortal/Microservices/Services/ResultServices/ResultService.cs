using MySql.Data.MySqlClient;
using System.Data;
using ResultEntity;
using ResultInterfaces;
namespace ResultServices;

public class ResultService : IResultService
{

    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    public int GetCandidateScore(int candidateId, int testId)
    {
        string query = "spcandidatetestresult";

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
    public int GetCandidateTestScore(int candidateId, int testId)
    {
        int score = 0;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = @"select score from candidatetestresults where candidateid=@candidateId and testid=@testId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@candidateId", candidateId);
            command.Parameters.AddWithValue("@testId", testId);
            connection.Open();
            score = (int)command.ExecuteScalar();


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
    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId)
    {
        string query = "spcandidatetestresultdetails";
        CandidateResultDetails candidateResultDetails = null;
        MySqlConnection connection = new MySqlConnection(connectionString);
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

            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            connection.Close();
        }
        return candidateResultDetails;
    }

    public List<TestResultDetails> GetTestResultDetails(int testId)
    {
        List<TestResultDetails> resultdetails = new List<TestResultDetails>();
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = @"select candidatetestresults.testid,candidatetestresults.score,candidatetestresults.candidateid
                         ,employees.firstname,employees.lastname,subjects.title as subject
                         from candidatetestresults
                         inner join employees
                         on employees.id=candidatetestresults.candidateid
                         inner join tests
                         on candidatetestresults.testid=tests.id
                         inner join subjects
                         on tests.subjectid=subjects.id
                         where candidatetestresults.testid=@TestId;";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TestId", testId);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
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
            connection.Close();
        }
        return resultdetails;
    }

    public List<AppearedCandidate> GetAppearedCandidates(int testId)
    {
        List<AppearedCandidate> appearedCandidates = new List<AppearedCandidate>();
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = @"select candidatetestresults.testid, candidatetestresults.candidateid, employees.firstname, employees.lastname
                            from candidatetestresults 
                            inner join employees 
                            on employees.id= candidatetestresults.candidateid
                            where candidatetestresults.testid=@TestId;";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TestId", testId);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
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
            connection.Close();
        }
        return appearedCandidates;
    }

     public List<PassedCandidateDetails> GetPassedCandidateResults(int testId)
    {
        List<PassedCandidateDetails> passedCandidates = new List<PassedCandidateDetails>();
        MySqlConnection connection = new MySqlConnection(connectionString);
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
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
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
                candidate.PassingLevel=passinglevel;
                candidate.Score= score;

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
            connection.Close();
        }
        return passedCandidates;
    }


    public List<FailedCandidateDetails> GetPassedCandidateResults(int testId)
    {
        List<FailedCandidateDetails> passedCandidates = new List<FailedCandidateDetails>();
        MySqlConnection connection = new MySqlConnection(connectionString);
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
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
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
                candidate.PassingLevel=passinglevel;
                candidate.Score= score;

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
            connection.Close();
        }
        return passedCandidates;
    }



    }

