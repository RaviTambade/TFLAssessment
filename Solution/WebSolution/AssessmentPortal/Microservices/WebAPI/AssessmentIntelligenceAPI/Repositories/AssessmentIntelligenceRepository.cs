using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Entities;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Repositories.Interfaces;
using MySql.Data.MySqlClient;
using System.Data;

namespace Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Repositories;

public class AssessmentIntelligenceRepository: IAssessmentIntelligenceRepository
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public async Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year)
    { 
        
        List<AnnualCandidateResult> results = new List<AnnualCandidateResult>();
        string query = @"select candidatetestresults.score,subjects.title,tests.id from candidatetestresults inner join tests on tests.id=candidatetestresults.testid
                         inner join subjects on subjects.id=tests.subjectid
                         where candidatetestresults.candidateid=@candidateId and year(teststarttime)=@year";
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@candidateId", candidateId);
        command.Parameters.AddWithValue("@year", year);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while(await reader.ReadAsync())
            {
                int score = int.Parse(reader["score"].ToString());
                string title = reader["title"].ToString();
                
                AnnualCandidateResult result =new AnnualCandidateResult();
                result.CandidateId=candidateId;
                result.Score=score;
                result.SubjectTitle=title;          
                results.Add(result);
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
        return results;
    }
}
