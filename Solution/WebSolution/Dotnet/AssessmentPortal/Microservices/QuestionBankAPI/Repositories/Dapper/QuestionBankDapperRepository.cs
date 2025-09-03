using MySql.Data.MySqlClient;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Dapper;
using System.Data;

namespace Transflower.TFLAssessment.dapper.Repositories;
public class QuestionBankDapperRepository : IQuestionBankRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public QuestionBankDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    //Disconnected Data Access
    //No 

    public async Task<List<QuestionTitle>> GetAllQuestions()
    {
        List<QuestionTitle> questions=new List<QuestionTitle>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
        var allQuestions = await con.QueryAsync<QuestionTitle>("SELECT * FROM questionbank");
        questions = allQuestions as List<QuestionTitle>;
        }
    return questions;
    }

    public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int id)
    {
        List<SubjectQuestion> questions=new List<SubjectQuestion>();     
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques =await  con.QueryAsync<SubjectQuestion>("select questionbank.id as questionid, questionbank.title as question, subjects.title as subject, subjects.id as subjectid from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@id", new{id});
            questions = ques as List<SubjectQuestion>;
        }
        return questions;
    }

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId, int criteriaId)
    {
        List<QuestionDetails> questions=new List<QuestionDetails>();   
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques = await con.QueryAsync<QuestionDetails>("select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria from questionbank, subjects,evaluationcriterias where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id and subjects.id=@subjectId and evaluationcriterias.id=@criteriaId", new{subjectId,criteriaId});
            questions = ques as List<QuestionDetails>;
        }
        return questions;
    }

      public async Task<List<QuestionDetails>> GetQuestionsWithSubjectAndCriteria()
    {
        List<QuestionDetails> questions=new List<QuestionDetails>();   
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques = await con.QueryAsync<QuestionDetails>("select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria from questionbank, subjects,evaluationcriterias where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id");
            questions = ques as List<QuestionDetails>;
        }
        return questions;
    }

    public async Task<bool> UpdateAnswer(int id, char answerKey)
    {
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        { 
            var query = "update questionbank set answerkey=@answerKey where id=@id"; 
            if(await con.ExecuteAsync(query,new{id=id,answerKey=answerKey}) > 0)
            status = true;
        }
        return status;
    }

    public async Task<Question> GetQuestion(int questionId)
    {
        Question question=null;       
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques =await con.QueryFirstOrDefaultAsync<Question>("select * from questionbank where id=@questionId", new{questionId});
            question = ques as Question;
        }
        return question;
    }

    public async Task<List<Question>> GetQuestions(int testId)
    {
        List<Question> questions=new List<Question>();        
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var ques =await con.QueryAsync<Question>("select * from questionbank inner join testquestions on testquestions.questionbankid = questionbank.id where testquestions.testid=@testId", new{testId});
            questions = ques as List<Question>;
        }
        return questions;
    }

    public async Task<bool> UpdateQuestionOptions(int id, Question options)
    {
        bool status = false;
            string query = "update questionbank set title=@title,a=@a,b=@b,c=@c,d=@d,answerkey=@answerKey where id =@questionId";
            using (IDbConnection con = new MySqlConnection(_connectionString))
            {
                if (await con.ExecuteAsync(query, new { questionId=id,title = options.Title, a = options.A, b = options.B, c = options.C, d = options.D,answerKey=options.AnswerKey}) > 0)
                status = true;
            }
        return status;
    }


    //update only evaluationcriteriaid
    public async Task<bool> UpdateSubjectCriteria(int questionId, Question question)
    {
        bool status = false;
            string query = "update questionbank set evaluationcriteriaid=@evaluationCriteriaId ,subjectid=@subjectId where id =@id";
            using (IDbConnection con = new MySqlConnection(_connectionString))
            {
                if (await con.ExecuteAsync(query, new {id=questionId, subjectId = question.SubjectId, evaluationCriteriaId = question.EvaluationCriteriaId}) > 0)
                status = true;
            }
        return status;
    }


    public async Task<bool> InsertQuestion(NewQuestion question)
    {
       bool status = true;
        string query ="insert into questionbank(subjectid,title,a,b,c,d,answerkey,evaluationcriteriaid) values(@subjectId,@title,@a,@b,@c,@d,@answerKey,@evaluationCriteriaId)";
        using(IDbConnection con =new MySqlConnection(_connectionString))
        {
            if (await con.ExecuteAsync(query, new {title=question.Title, a = question.A, b = question.B, c = question.C, d = question.D,answerKey=question.AnswerKey, subjectId = question.SubjectId, evaluationCriteriaId = question.EvaluationCriteriaId}) > 0)
                status = true;
        }
        return status;
    }

    public async Task<string> GetCriteria(string subject, int questionId)
    {
        string criteria = "";
        string query="SELECT ec.title FROM evaluationcriterias ec INNER JOIN questionbank qb ON qb.evaluationcriteriaid = ec.id INNER JOIN subjects s ON qb.subjectid = s.id WHERE s.title = @subject AND qb.id = @questionId";
                        
        using(IDbConnection con =new MySqlConnection(_connectionString))
        {
            criteria=await con.QueryFirstOrDefaultAsync<string>(query,new{subject,questionId});
        }
        return criteria;
    }
}




