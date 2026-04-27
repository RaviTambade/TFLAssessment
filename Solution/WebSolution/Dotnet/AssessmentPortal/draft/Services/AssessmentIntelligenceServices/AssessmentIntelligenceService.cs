using AssessmentIntelligenceEntities;
using AssessmentIntelligenceInterfaces;
using MySql.Data.MySqlClient;
using System.Data;

namespace AssessmentIntelligenceServices;

public class AssessmentIntelligenceService: IAssessmentIntelligenceService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public List<AnnualCandidateResult> GetCandidateResults(int candidateId, int year)
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
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while(reader.Read())
            {
                int score = int.Parse(reader["score"].ToString());
                string title = reader["title"].ToString();
                
                AnnualCandidateResult result =new AnnualCandidateResult();
                result.CandidateId=candidateId;
                result.Score=score;
                result.SubjectTitle=title;          
                results.Add(result);
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
        return results;
    }
}
