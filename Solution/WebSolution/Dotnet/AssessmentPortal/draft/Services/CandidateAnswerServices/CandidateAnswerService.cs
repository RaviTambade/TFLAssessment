using MySql.Data.MySqlClient;
using System.Data;
using CandidateAnswerEntities;
using CandidateAnswerInterfaces;

namespace CandidateAnswerServices;

public class CandidateAnswerService:ICandidateAnswerService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public bool InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
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



}
