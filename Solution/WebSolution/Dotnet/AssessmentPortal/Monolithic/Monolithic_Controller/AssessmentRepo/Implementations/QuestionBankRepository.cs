using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;

public class QuestionBankRepository : IQuestionBankRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public QuestionBankRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }
    //Disconnected Data Access
    //No 

    public async Task<List<QuestionTitle>> GetAllQuestions()
    {
        await Task.Delay(2000);
        List<QuestionTitle> questions = new List<QuestionTitle>();
        string query = @"select * from questionbank";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            DataSet ds = new DataSet();
            MySqlDataAdapter da = new MySqlDataAdapter(command);
            da.Fill(ds);

            //Disconnected Data (Offline data fetched from backend database)
            DataTable dtQuestionBank = ds.Tables[0];
            DataRowCollection rows = dtQuestionBank.Rows;
            foreach (DataRow row in rows)
            {
                int id = int.Parse(row["id"].ToString());
                string title = row["title"].ToString();

                QuestionTitle question = new QuestionTitle();
                question.Id = id;
                question.Title = title;

                questions.Add(question);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        return questions;
    }

    public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int id)
    {

        List<SubjectQuestion> questions = new List<SubjectQuestion>();
        string query = @" select qb.id as questionid, qb.title as question, s.title as subject, s.id as subjectid from questionbank qb join subject_concepts sc
on qb.subject_concept_id=sc.subject_concept_id  JOIN  subjects s on s.id=sc.subject_id
where sc.subject_id=3;";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@SubjectId", id);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int questionId = int.Parse(reader["questionid"].ToString());
                string strQuestion = reader["question"].ToString();
                int subjectId = int.Parse(reader["subjectid"].ToString());
                string subject = reader["subject"].ToString();


                SubjectQuestion question = new SubjectQuestion();
                question.QuestionId = questionId;
                question.Question = strQuestion;
                question.SubjectId = subjectId;
                question.Subject = subject;
                questions.Add(question);
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
        return questions;
    }

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndConcept(int subjectId, int conceptId)
    {

        List<QuestionDetails> questions = new List<QuestionDetails>();
        string query = @"select questionbank.id,questionbank.id as questionid,  questionbank.title, subjects.title as subject ,concepts.title as concept
                            from questionbank, subjects,concepts
                            where questionbank.subjectid=subjects.id and questionbank.conceptid=concepts.id
                            and subjects.id=@SubjectId and concepts.id=@conceptid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@SubjectId", subjectId);
        command.Parameters.AddWithValue("@conceptid", conceptId);


        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int qid = int.Parse(reader["questionid"].ToString());
                string strQuestion = reader["title"].ToString();
                string subject = reader["subject"].ToString();
                string criteria = reader["concept"].ToString();

                QuestionDetails question = new QuestionDetails();

                question.Id = id;
                question.QuestionId = qid;
                question.Question = strQuestion;
                question.Subject = subject;
                question.Criteria = criteria;

                questions.Add(question);
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
        return questions;
    }


     public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndConceptWithOptions(int subjectId, int conceptId)
    {

        List<QuestionDetails> questions = new List<QuestionDetails>();
        string query = @"select questionbank.id,questionbank.id as questionid,  questionbank.title, questionbank.a as optionA ,questionbank.b as optionB ,questionbank.c as optionC ,questionbank.d as optionD, subjects.title as subject ,concepts.title as concept
                            from questionbank, subjects,concepts
                            where questionbank.subjectid=subjects.id and questionbank.conceptid=concepts.id
                            and subjects.id=@SubjectId and concepts.id=@conceptid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@SubjectId", subjectId);
        command.Parameters.AddWithValue("@conceptid", conceptId);


        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int qid = int.Parse(reader["questionid"].ToString());
                string strQuestion = reader["title"].ToString();
                string subject = reader["subject"].ToString();
                string criteria = reader["concept"].ToString();
                string optionA=reader["optionA"].ToString();
                string optionB=reader["optionB"].ToString();
                string optionC=reader["optionC"].ToString();
                string optionD=reader["optionD"].ToString();




                QuestionDetails question = new QuestionDetails();

                question.Id = id;
                question.QuestionId = qid;
                question.Question = strQuestion;
                question.Subject = subject;
                question.Criteria = criteria;
                question.A = optionA;
                question.B = optionB;
                question.C = optionC;
                question.D = optionD;




                questions.Add(question);
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
        return questions;
    }

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndConceptWithOptionsAndAnswer(int subjectId, int conceptId)
    {

        List<QuestionDetails> questions = new List<QuestionDetails>();
        string query = @"select questionbank.id,questionbank.id as questionid,  questionbank.title, subjects.title as subject ,concepts.title as concept,questionbank.a as optionA ,questionbank.b as optionB ,questionbank.c as optionC ,questionbank.d as optionD,questionbank.answerkey as result
                            from questionbank, subjects,concepts
                            where questionbank.subjectid=subjects.id and questionbank.conceptid=concepts.id
                            and subjects.id=@SubjectId and concepts.id=@conceptid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@SubjectId", subjectId);
        command.Parameters.AddWithValue("@conceptid", conceptId);


        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int qid = int.Parse(reader["questionid"].ToString());
                string strQuestion = reader["title"].ToString();
                string subject = reader["subject"].ToString();
                string criteria = reader["concept"].ToString();
                string optionA=reader["optionA"].ToString();
                string optionB=reader["optionB"].ToString();
                string optionC=reader["optionC"].ToString();
                string optionD=reader["optionD"].ToString();
                string result=reader["result"].ToString();





                QuestionDetails question = new QuestionDetails();

                question.Id = id;
                question.QuestionId = qid;
                question.Question = strQuestion;
                question.Subject = subject;
                question.Criteria = criteria;
                question.A = optionA;
                question.B = optionB;
                question.C = optionC;
                question.D = optionD;
                question.result=result;
                questions.Add(question);
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
        return questions;
    }
    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndConceptAndQuestionId(int subjectId,int conceptId,int questionId)
    {

        List<QuestionDetails> questions = new List<QuestionDetails>();
        string query = @"select questionbank.id,questionbank.id as questionid,  questionbank.title, subjects.title as subject ,concepts.title as concept,questionbank.a as optionA ,questionbank.b as optionB ,questionbank.c as optionC ,questionbank.d as optionD,questionbank.answerkey
                            from questionbank, subjects,concepts
                            where questionbank.subjectid=subjects.id and questionbank.conceptid=concepts.id
                            and subjects.id=@subjectId and concepts.id=@conceptId and questionbank.id=@questionId;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", subjectId);
        command.Parameters.AddWithValue("@conceptid", conceptId);
        command.Parameters.AddWithValue("@questionId", questionId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int qid = int.Parse(reader["questionid"].ToString());
                string strQuestion = reader["title"].ToString();
                Console.WriteLine("strQuestion" + strQuestion);
                string subject = reader["subject"].ToString();
                string criteria = reader["concept"].ToString();
    
                QuestionDetails question = new QuestionDetails();
                question.Id = id;
                question.QuestionId = qid;
                question.Question = strQuestion;
                Console.WriteLine("questionsquestions" + question.Question);

                question.Subject = subject;
                question.Criteria = criteria;

                questions.Add(question);


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

        return questions;
    }
    public async Task<List<QuestionDetails>> GetQuestionsWithSubjectAndConcept()
    {

        List<QuestionDetails> questions = new List<QuestionDetails>();
        string query = @"select questionbank.id, questionbank.title, subjects.title as subject ,concepts.title as concept
                            from questionbank, subjects,concepts
                            where questionbank.subjectid=subjects.id and questionbank.conceptid=concepts.id";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string strQuestion = reader["title"].ToString();
                string subject = reader["subject"].ToString();
                string criteria = reader["concept"].ToString();

                QuestionDetails question = new QuestionDetails();

                question.Id = id;
                question.Question = strQuestion;
                question.Subject = subject;
                question.Criteria = criteria;

                questions.Add(question);
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
        return questions;
    }

    public async Task<bool> UpdateAnswer(int id, char answerKey)
    {
        bool status = false;
        string query = "update questionbank set answerkey=@AnswerKey where id =@Id";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            await connection.OpenAsync();
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);
            command.Parameters.AddWithValue("@AnswerKey", answerKey);
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
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

    public async Task<Question> GetQuestion(int questionId)
    {
        Question question = null;
        string query = @"select * from questionbank where id=@QuestionId";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@QuestionId", questionId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int subjectId = int.Parse(reader["subjectid"].ToString());
                string strQuestion = reader["title"].ToString();
                string optionA = reader["a"].ToString();
                string optionB = reader["b"].ToString();
                string optionC = reader["c"].ToString();
                string optionD = reader["d"].ToString();
                string correctAnswer = reader["answerkey"].ToString();
                int conceptId = int.Parse(reader["conceptid"].ToString());

                question = new Question();
                question.Id = questionId;
                question.SubjectId = subjectId;
                question.Title = strQuestion;
                question.A = optionA;
                question.B = optionB;
                question.C = optionC;
                question.D = optionD;
                question.AnswerKey = correctAnswer;
                question.ConceptId = conceptId;
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
        return question;
    }


    public async Task<bool> UpdateQuestionOptions(int id, Question options)
    {
        bool status = false;
        string query = "update questionbank set title=@Title,a=@A,b=@B,c=@C,d=@D,answerkey=@AnswerKey where id =@Id";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            await connection.OpenAsync();
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Title", options.Title);
            command.Parameters.AddWithValue("@A", options.A);
            command.Parameters.AddWithValue("@B", options.B);
            command.Parameters.AddWithValue("@C", options.C);
            command.Parameters.AddWithValue("@D", options.D);
            command.Parameters.AddWithValue("@AnswerKey", options.AnswerKey);
            command.Parameters.AddWithValue("@Id", id);
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
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


    //update only evaluationcriteriaid
    public async Task<bool> UpdateSubjectConcept(int questionId, Question question)
    {
        bool status = false;
        string query = "update questionbank set conceptid=@conceptid ,subjectid=@SubjectId where id =@Id";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            await connection.OpenAsync();
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@conceptid", question.ConceptId);
            command.Parameters.AddWithValue("@SubjectId", question.SubjectId);
            command.Parameters.AddWithValue("@Id", questionId);
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
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


    public async Task<bool> InsertQuestion(NewQuestion question)
    {
        await Task.Delay(2000);
        bool status = true;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            string query = "select * from questionbank";
            MySqlCommand command = new MySqlCommand(query, connection);
            MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
            DataSet dataSet = new DataSet();
            MySqlCommandBuilder commandBuilder = new MySqlCommandBuilder(dataAdapter);
            dataAdapter.Fill(dataSet);
            DataTable dataTable = dataSet.Tables[0];

            DataRow row = dataTable.NewRow();
            row["subjectid"] = question.SubjectId;
            row["title"] = question.Title;
            row["a"] = question.A;
            row["b"] = question.B;
            row["c"] = question.C;
            row["d"] = question.D;
            row["answerKey"] = question.AnswerKey;
            row["conceptid"] = question.ConceptId;
            dataTable.Rows.Add(row);
            dataAdapter.Update(dataSet);
            status = true;

        }
        catch (Exception e)
        {
            throw e;
        }

        return status;
    }

    public async Task<string> GetConcept(string subject, int questionId)
    {
        string criteria = "";
        string query = @"select concepts.title from concepts INNER join questionbank on questionbank.conceptid=concepts.id
                       inner join subjects on questionbank.subjectid= concepts.subjectid WHERE subjects.title=@Subject and questionbank.id=@QuestionId";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Subject", subject);
            command.Parameters.AddWithValue("@QuestionId", questionId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                criteria = title;
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
        return criteria;

    }

    private async Task<int> GetTestIdByAssessmentId(int assessmentId)
    {
        int testId = 0;
        string query = "SELECT test_id FROM assessments WHERE id = @AssessmentId";

        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        using (MySqlCommand command = new MySqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@AssessmentId", assessmentId);
            try
            {
                await connection.OpenAsync();
                object result = await command.ExecuteScalarAsync();
                if (result != null)
                {
                    testId = Convert.ToInt32(result);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        return testId;
    }

    public async Task<List<Question>> GetQuestions(int assessment)
    {

        int testId = await GetTestIdByAssessmentId(assessment);
        Console.WriteLine("Test Id in Question Bank Repository: " + testId);
        
        List<Question> questions = new List<Question>();
        string query = @"
            SELECT 
                testquestions.id AS testquestionid, 
                questionbank.id AS questionbankid,
                questionbank.subjectid,
                questionbank.title,
                questionbank.a,
                questionbank.b,
                questionbank.c,
                questionbank.d,
                questionbank.conceptid
            FROM questionbank 
            INNER JOIN testquestions 
                ON testquestions.questionbankid = questionbank.id 
            WHERE testquestions.testid = @TestId";

        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        using (MySqlCommand command = new MySqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@TestId", testId);
            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                // MySqlDataReader reader = await command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    Question question = new Question
                    {
                        Id = Convert.ToInt32(reader["testquestionid"]), // Use testquestions.id
                        SubjectId = Convert.ToInt32(reader["subjectid"]),
                        Title = reader["title"].ToString(),
                        A = reader["a"].ToString(),
                        B = reader["b"].ToString(),
                        C = reader["c"].ToString(),
                        D = reader["d"].ToString(),
                        ConceptId = Convert.ToInt32(reader["conceptid"])
                    };
                    Console.WriteLine(question);
                    questions.Add(question);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        return questions;
    }

    public async Task<List<SubjectQuestionCount>> GetSubjectQuestionCount()
    {
        string query = @"
           select count(q.title) as questionCount, s.title ,s.id as subjectId from questionbank q
            join subjects s on s.id=q.subjectid group by(subjectid);";

        List<SubjectQuestionCount>subjectQuestionCounts = new List<SubjectQuestionCount>();
        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        using (MySqlCommand command = new MySqlCommand(query, connection))
        {
            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                // MySqlDataReader reader = await command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    SubjectQuestionCount questionCount = new SubjectQuestionCount();
                    Subject subject = new Subject();

                    questionCount.QuestionCount = Convert.ToInt32(reader["questionCount"]);
                    subject.Id = Convert.ToInt32(reader["subjectId"]);
                    subject.Title = reader["title"].ToString();
                    questionCount.subject=subject;
                    subjectQuestionCounts.Add(questionCount);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        return subjectQuestionCounts;
    }

}

