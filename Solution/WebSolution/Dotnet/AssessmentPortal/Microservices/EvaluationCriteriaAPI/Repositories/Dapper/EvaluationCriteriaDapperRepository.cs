using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;
using System.Data.SqlClient;
using Dapper;
using Org.BouncyCastle.Asn1.X509;

public class EvaluationCriteriaDapperRepository : IEvaluationCriteriaRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public EvaluationCriteriaDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }
    public async Task<bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        await Task.Delay(100);
        bool status = false;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            string query = "UPDATE questionbank SET evaluationcriteriaid = @EvaluationCriteriaId WHERE id = @QuestionId";
            con.Execute(query, new { EvaluationCriteriaId = evaluationCriteriaId, QuestionId = questionId });
            status = true;

        }
        return status;
    }

    public async Task<bool> UpdateSubject(int id, int subjectId)
    {

        await Task.Delay(100);
        bool status = false;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            string query = "UPDATE evaluationcriterias SET subjectId = @subjectId WHERE id = @Id";
            con.Execute(query, new { Id = id, subjectId = subjectId });
            status = true;

        }
        return status;

    }


    public async Task<bool> InsertCriteria(EvaluationCriteria criteria)
    {
        await Task.Delay(100);
        bool status = false;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            string query = "INSERT INTO evaluationcriterias(subjectid,title) VALUES (@subjectid,@title)";
            if (con.Execute(query, new { subjectid = criteria.SubjectId, title = criteria.Title }) > 0)
                status = true;
        }
        return status;
    }

}