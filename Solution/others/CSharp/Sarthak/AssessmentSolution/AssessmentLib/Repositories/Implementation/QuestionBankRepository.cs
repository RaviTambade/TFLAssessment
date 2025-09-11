using AssessmentLib.Entities;
using AssessmentLib.Repositories.Interface;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Tls;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.Marshalling;
using System.Text;
using System.Threading.Tasks;
using ZstdSharp.Unsafe;

namespace AssessmentLib.Repositories.Implementation
{
    public class QuestionBankRepository : IQuestionBankRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;
        public QuestionBankRepository(IConfiguration configuration)
        {
            _configuration = configuration;
             _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
        }

        public async Task<List<QuestionTitle>> GetAllQuestion(QuestionTitle question)
        {
            await Task.Delay(2000);
            List<QuestionTitle> questions = new List<QuestionTitle>();
            string query = "SELECT * From QuestinBank";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = connection.CreateCommand();
            try
            {
                DataSet ds = new DataSet();
                MySqlDataAdapter da = new MySqlDataAdapter(command);
                da.Fill(ds);

                DataTable dtQuestionBank = ds.Tables[0];
                DataRowCollection rows = dtQuestionBank.Rows;
                foreach (DataRow row in rows)
                {
                    int id = int.Parse(row["id"].ToString());
                    string title = row["title"].ToString();

                    QuestionTitle questionTitle = new QuestionTitle();
                    questionTitle.Title = title;
                    questionTitle.Id = id;

                    questions.Add(questionTitle);
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                connection.Close();
            }
            return questions;
        }
        public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int Id)
        {
            List<SubjectQuestion> questions = new List<SubjectQuestion>();
            string query = @"select questionbank.id as questionid, questionbank.title as question, subjects.title as Subject, subjects.id as subjectid from questionbank,subjects where questionbank.subjectid=subjects.id and subjects.id=@SubjectId";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@SubjectId", Id);
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
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            finally
            {
                await connection.CloseAsync();
            }
            return questions;
        }
        public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int SubjectId, int CriteriaId)
        {
            List<QuestionDetails> questions = new List<QuestionDetails>();
            String query = @"SELECT questionbank.id,questionbank.title,subject.title as subject,
        evaluationcriterias.title as criteria from questionbank,subjects,evalutioncriterias
        where questionbank.subjectid=subjects.id and questionbank.evalutioncriteriaid =evaluationcriterias.id 
        and subjects.id=SubjectId and evalutioncriterias.id= @CriteriaId";

            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@SubjectId", SubjectId);
            command.Parameters.AddWithValue("@CriteriaId", CriteriaId);

            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();

                while (await reader.ReadAsync())
                {
                    int id = int.Parse(reader["id"].ToString());
                    string strQuestion = reader["title"].ToString();
                    string subject = reader["subject"].ToString();
                    string criteria = reader["criteria"].ToString();

                    QuestionDetails question = new QuestionDetails();

                    question.Id = id;
                    question.Question = strQuestion;
                    question.Subject = subject;
                    question.Criteria = criteria;

                    questions.Add(question);
                }
                await reader.CloseAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);

            }
            finally
            {
                await connection.CloseAsync();
            }
            return questions;
        }
        public async Task<List<QuestionDetails>> GetQuestionsWithSubjectAndCriteria()
        {
            List<QuestionDetails> questions = new List<QuestionDetails>();
            string query = @"select questionbank.id,questionbank.title,subjects.title as subject ,evalutioncriterias.title as criteria
                           from questionbank,subjects,evalutioncriterias
                            where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evalutioncritrias.id";
            MySqlConnection connection = new MySqlConnection();
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
                    string criteria = reader["criteria"].ToString();

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
        public async Task<bool> UpdateAnswer(int Id, char AnswerKey)
        {
            bool status = false;
            string query = "Update questionbank set answerKey =@answerkey where id =@id";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            try
            {
                await connection.OpenAsync();
                command.Parameters.AddWithValue("@Id", Id);
                command.Parameters.AddWithValue("@answerkey", AnswerKey);
                int rowaffected = await command.ExecuteNonQueryAsync();
                if (rowaffected > 0)
                {
                    status = true;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("invalild id ");
            }
            finally
            {
                await connection.CloseAsync();
            }
            return status;
        }
        public async Task<Question> GetQuestion(int QuestionId)
        {
            Question question = null;
            string query = @"select * from questionbank where id= @QuestionId";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("QuestionId", QuestionId);
            try
            {
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (await reader.ReadAsync())
                {
                    String SubjectId = reader["SubjectId"].ToString();
                    string strQuestion = reader["title"].ToString();
                    string optionA = reader["A"].ToString();
                    string optionB = reader["B"].ToString();
                    string optionC = reader["C"].ToString();
                    string optionD = reader["D"].ToString();
                    string correctAnswer = reader["AnswerKey"].ToString();
                    int evalutionCriteriaId = int.Parse(reader["EvalutionCriteria"].ToString());



                    question = new Question();
                    question.Id = QuestionId;
                    question.SubjectId = SubjectId;
                    question.Title = strQuestion;
                    question.A = optionA;
                    question.B = optionB;
                    question.C = optionC;
                    question.D = optionD;
                    question.AnswerKey = correctAnswer;
                    question.EvalutionCriteriaId = evalutionCriteriaId;


                }
                await reader.CloseAsync();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                await connection.CloseAsync();
            }
            return question;

        }
        public async Task<bool> UpdateQuestionOption(int Id, Question options)
        {
            bool status = false;
            string query = @"update questionbank set title=@Title,a=@A,b=@B,c=@C,d=@D,answerkey=@AnswerKey,evalutioncriteria=@EvalutionCriteria where id=@Id";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            try
            {
                await connection.OpenAsync();
                command.Parameters.AddWithValue("Title", options.Title);
                command.Parameters.AddWithValue("@A", options.A);
                command.Parameters.AddWithValue("@B", options.B);
                command.Parameters.AddWithValue("@C", options.C);
                command.Parameters.AddWithValue("@D", options.D);
                command.Parameters.AddWithValue("Answerkey", options.AnswerKey);
                command.Parameters.AddWithValue("Id", options.Id);

                int rowAffected = await command.ExecuteNonQueryAsync();
                if (rowAffected > 0)
                {
                    status = true;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                await connection.CloseAsync();
            }
            return status;
        }
        public async Task<bool> UpdateSubjectCriteria(int questionId, Question question)
        {
            bool status = false;
            string query = "update questionbank set evaluationcriteriaid=@EvaluationCriteriaId ,subjectid=@SubjectId where id =@Id";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            try
            {
                await connection.OpenAsync();
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@EvaluationCriteriaId", question.EvalutionCriteriaId);
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
        public async Task<bool> InsertQuestion(Question question)
        {
            await Task.Delay(2000);
            bool status = false;
            MySqlConnection connection = new MySqlConnection(_connectionString);
            try
            {
                await connection.OpenAsync();
                string query = "select * from questionbank ";
                MySqlCommand command = new MySqlCommand(query, connection);
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(command);
                DataSet dataSet = new DataSet();
                MySqlCommandBuilder commandBuilder = new MySqlCommandBuilder(dataAdapter);
                dataAdapter.Fill(dataSet);
                DataTable dataTable = dataSet.Tables[0];

                DataRow Row = dataTable.NewRow();
                Row["SubjectId"] = question.SubjectId;
                Row["title"] = question.Title;
                Row["a"] = question.A;
                Row["b"] = question.B;
                Row["C"] = question.C;
                Row["D"] = question.D;
                Row["answerKey"] = question.AnswerKey;
                Row["evalutionCriteriaId"] = question.EvalutionCriteriaId;

                dataTable.Rows.Add(Row);
                dataAdapter.Update(dataSet);
                status = true;

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
        public async Task<string> GetCriteria(string subject, int QuestionId)
        {
            string criteria = "";
            string query = @"select evalutioncriterias.title from evaluationcriterias inner join questionbank on questionbank.evalutioncriteriaid=evalutioncriterias.id
                            inner join subjects on questionbank.subjectid= evalutioncriterias.subjectid where subjects.title=@subject and questionbank.id=@QuestionId";
            MySqlConnection connection = new MySqlConnection(_connectionString);
            try
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@Subject", subject);
                command.Parameters.AddWithValue("QuestionId", QuestionId);
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
        public async Task<List<Question>> GetQuestions(int TestId)
        {
            List<Question> questions = new List<Question>();
            string query =
                       @"SELECT testquestions.id AS testquestionid, 
                    questionbank.id AS questionbankid,
                    questionbank.subjectid,
                    questionbank.title,
                    questionbank.a,
                    questionbank.b,
                    questionbank.c,
                    questionbank.d,
                    questionbank.evaluationcriteriaid
                    FROM questionbank 
                    INNER JOIN testquestions 
                    ON testquestions.questionbankid = questionbank.id 
                    WHERE testquestions.testid = @TestId";


            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                using (MySqlCommand command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@TestId", TestId);
                    try
                    {
                        await connection.OpenAsync();
                        MySqlDataReader reader = command.ExecuteReader();
                        while (await reader.ReadAsync())
                        {
                            Question question = new Question
                            {
                                Id = Convert.ToInt32(reader["testquestionid"]),
                                SubjectId = reader["subjectid"].ToString(),
                                Title = reader["title"].ToString(),
                                A = reader["a"].ToString(),
                                B = reader["b"].ToString(),
                                C = reader["c"].ToString(),
                                D = reader["d"].ToString(),
                                EvalutionCriteriaId = Convert.ToInt32(reader["evaluationcriteriaid"])
                            };
                            questions.Add(question);
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }


                }
            }
            return questions;
        }

        public Task<List<QuestionTitle>> GetAllQuestions()
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateQuestionOptions(int Id, Question options)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetString(string subject, int QuestionId)
        {
            throw new NotImplementedException();
        }
    }
}
