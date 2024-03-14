using MySql.Data.MySqlClient;
using System.Data;
using Entities;


namespace Repositories.Tests;
public class TestManager{


public int GetCandidateTestResult(int candidateId, int testId){

}


public bool   CandidateAnswers(int candidateId, int testId,List<CandidateAnswer> answers)
{
    bool status=false;
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
       connection.Open();

            foreach (var answer in answers)
            {
                string query = "INSERT INTO candidateanswers (employeeid, testquestionid, answerkey) VALUES (@employeeId, @testQuestionId, @answerKey)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", candidateId);
                command.Parameters.AddWithValue("@testQuestionId", answer.TestQuestionId);
                command.Parameters.AddWithValue("@answerKey", answer.Answer);

                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    status = true;
                }
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

