using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Handler;
using Dapper;

namespace Transflower.TFLAssessment.Repositories;

public class AssessmentDapperRepository :IAssessmentRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public AssessmentDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
         SqlMapper.AddTypeHandler(new SqlTimeOnlyTypeHandler());
    }
      public async Task <Assessment> GetDetails(int assessmentId) 
    {
            await Task.Delay(100);
            Assessment assessment=new Assessment();   
            string query = @"SELECT t.id, t.smeid AS subjectExpertId, t.subjectid AS subjectId, t.creationdate AS creationDate,
                           t.modificationdate AS modificationDate,t.scheduleddate AS scheduledDate,t.status,t.passinglevel,
                           e.firstName, e.lastName FROM  tests t LEFT JOIN employees e ON t.smeid = e.id WHERE t.id = @AssessmentId;";
            using (IDbConnection con = new MySqlConnection(_connectionString))
            {
                assessment= con.QuerySingleOrDefault<Assessment>(query, new {assessmentId}) ;
                TimeOnly time  = assessment.Duration;
                Console.WriteLine(time);
                               
            }
            return assessment;
    }