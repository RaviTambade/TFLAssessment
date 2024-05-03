using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;


public class CandidateAnswerRepository:ICandidateAnswerRepository
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public async Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
    {
        bool status = false;
        string query = "INSERT INTO candidateanswers (candidateid, testquestionid, answerkey) VALUES (@candidateId, @testQuestionId, @answerKey)";
        MySqlConnection connection = new MySqlConnection(connectionString);

        try
        {
           await connection.OpenAsync();
                foreach (var answer in answers)
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@candidateId", candidateId);
                command.Parameters.AddWithValue("@testQuestionId", answer.TestQuestionId);
                command.Parameters.AddWithValue("@answerKey", answer.Answer);

                int rowsAffected =  await command.ExecuteNonQueryAsync();
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
}
