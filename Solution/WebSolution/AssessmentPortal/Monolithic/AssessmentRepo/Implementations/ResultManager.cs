using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
using Assessment.Repositories.Interfaces;
namespace Assessment.Repositories.Implementations;

//Providers
public class ResultManager :IResultManager
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
        int score=0;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = @"select score from candidatetestresults where candidateid=@candidateId and testid=@testId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@candidateId", candidateId);
            command.Parameters.AddWithValue("@testId", testId);
            connection.Open();
             score= (int)command.ExecuteScalar();

   
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
         CandidateResultDetails candidateResultDetails=null;
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
        
                CandidateResultDetails  candidateResultDetails=new CandidateResultDetails(){
                CorrectAnswers=correctAnswers,
                IncorrectAnswers=incorrectAnswers,
                SkippedQuestions=skippedQuestions,
                CandidateId=candidateId,
                TestId=testId
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

}
