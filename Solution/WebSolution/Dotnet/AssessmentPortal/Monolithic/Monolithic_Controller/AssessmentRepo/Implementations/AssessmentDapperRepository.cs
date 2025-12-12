using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Entities.Models;
using Transflower.TFLAssessment.Handler;
using Dapper;

namespace Transflower.TFLAssessment.Repositories;

public class AssessmentDapperRepository : IAssessmentRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public AssessmentDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
        SqlMapper.AddTypeHandler(new SqlTimeOnlyTypeHandler());
    }

    public async Task<Assessment> GetDetails(int assessmentId)
    {
        await Task.Delay(100);
        Assessment assessment = new Assessment();
        string query =
            @"SELECT t.id,t.name AS TestName, t.smeid AS subjectExpertId, t.subjectid AS subjectId, t.creationdate AS creationDate,t.modificationdate AS modificationDate,
                t.scheduleddate AS scheduledDate,t.status,t.passinglevel,e.firstName, e.lastName
                FROM   tests t
                LEFT JOIN employees e ON t.smeid = e.id 
                WHERE t.id = @AssessmentId;";
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            assessment = con.QuerySingleOrDefault<Assessment>(query, new { assessmentId });
            TimeOnly time = assessment.Duration;
            Console.WriteLine(time);

        }
        return assessment;
    }

    public async Task<bool> CreateTest(CreateTestRequest request)
    {
        // Simulate async delay for demo purposes
        await Task.Delay(100);
        bool status = false;

        string query = @"
        INSERT INTO tests 
        (Name, subjectid, duration, smeid, creationdate, modificationdate, scheduleddate, passinglevel)
        VALUES 
        (@Name, @SubjectId, @Duration, @SmeId, @CreationDate, @ModificationDate, @ScheduledDate, @PassingLevel)";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            try
            {
                // Execute the query with the parameters mapped from the request DTO
                int rowsAffected = con.Execute(query, new
                {
                    Name = request.Name,
                    SubjectId = request.SubjectId,
                    Duration = request.Duration,
                    SmeId = request.SubjectExpertId,
                    CreationDate = request.CreationDate,
                    ModificationDate = request.ModificationDate,
                    ScheduledDate = request.ScheduledDate,
                    PassingLevel = request.PassingLevel
                });

                status = rowsAffected > 0; // Determine success based on rows affected
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine($"Error while creating test: {ex.Message}");
            }
        }

        return status;
    }


    public async Task<List<Assessment>> GetAll(DateTime fromDate, DateTime toDate)
    {
        List<Assessment> assessments = new List<Assessment>();
        string query = @"select * from tests where creationDate  between @FromDate and @ToDate";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@FromDate", fromDate);
        command.Parameters.AddWithValue("@ToDate", toDate);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                int smeid = int.Parse(reader["smeid"].ToString());
                int subjectId = int.Parse(reader["subjectid"].ToString());
                // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                DateTime modificationDate = DateTime.Parse(reader["modificationdate"].ToString());
                DateTime scheduledDate = DateTime.Parse(reader["scheduleddate"].ToString());
                string status = reader["subjectid"].ToString();
                Assessment assessment = new Assessment();
                assessment.Id = id;
                assessment.ModificationDate = modificationDate;
                assessment.ScheduledDate = scheduledDate;
                assessment.SubjectId = subjectId;
                assessment.SubjectExpertId = smeid;
                assessment.Status = status;
                assessments.Add(assessment);
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
        return assessments;
    }
    public async Task<List<Assessment>> GetAllBySubjectMatterExpert(int smeId)
    {

        await Task.Delay(100);
        List<Assessment> assessments = new List<Assessment>();

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var test = con.Query<Assessment>("select * from tests where smeid=@SmeId", new { smeId });

            assessments = test as List<Assessment>;

        }
        return assessments;
    }

    public async Task<bool> AddQuestion(int assessmentId, int questionId)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            var query = "insert into testquestions(testid,questionBankid) values ( " + assessmentId + "," + questionId + ")";
            if (con.Execute(query) > 0)
                status = true;
        }

        return status;
    }


    public async Task<bool> AddQuestions(int assessmentId, List<QuestionBank> questions)
    {
        bool status = true;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            // Open the connection once before the loop
            await connection.OpenAsync();

            foreach (var question in questions)
            {
                string query = "INSERT INTO testquestions(testid, questionbankid) VALUES (@TestId, @QuestionBankId)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@TestId", assessmentId);
                command.Parameters.AddWithValue("@QuestionBankId", question.QuestionBankId);

                int rowsAffected = await command.ExecuteNonQueryAsync();
                if (rowsAffected == 0)
                {
                    status = false; // If one of the questions fails to insert, set status to false
                    break; // Exit the loop if any insertion fails
                }
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            status = false;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }



    public async Task<bool> RemoveQuestion(int assessmentId, int questionId)
    {
        bool status = false;
        string query = "Delete from testquestions where testid=" + assessmentId + " and questionbankid=" + questionId + "";
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            if (con.Execute(query) > 0)
                status = true;
        }
        return status;
    }

    public async Task<bool> RemoveQuestions(int[] testQuestions)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);

        try
        {
            await connection.OpenAsync(); // Open connection outside the loop

            foreach (var testQuestionId in testQuestions)
            {
                Console.WriteLine("DAl" + testQuestionId);

                string query = "DELETE FROM testquestions WHERE id = @Id";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@Id", testQuestionId);

                int rowsAffected = await command.ExecuteNonQueryAsync();
                if (rowsAffected > 0)
                {
                    status = true;
                }
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

    public async Task<bool> ChangeDuration(int assessmentId, string duration)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "update tests set duration=@Duration where id=@AssessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@AssessmentId", assessmentId);
        command.Parameters.AddWithValue("@Duration", duration);
        try
        {
            await connection.OpenAsync();
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

    public async Task<bool> Reschedule(int assessmentId, DateTime date)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        // string query = "update tests set scheduleddate=@ScheduledDate where id=@AssessmentId";
        string query = "update assessments set scheduledstart=@ScheduledDate where id=@AssessmentId";

        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@AssessmentId", assessmentId);
        command.Parameters.AddWithValue("@ScheduledDate", date);
        try
        {
            await connection.OpenAsync();
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


    public async Task<List<Assessment>> GetAllTests()
    {
        List<Assessment> tests = new List<Assessment>();
        string query = @"select tests.*,subjects.title as skill,employees.firstname,employees.lastname from tests 
                        inner join subjectmatterexperts on subjectmatterexperts.id=tests.smeid
                        inner join subjects on subjects.id=subjectmatterexperts.subjectid
                        inner join employees on  employees.id=subjectmatterexperts.employeeid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string TestName = reader["Name"].ToString();
                // TimeOnly duration=TimeOnly.Parse(reader["duration"]);
                int subjectId = int.Parse(reader["subjectid"].ToString());
                int subjectExpertId = int.Parse(reader["smeid"].ToString());
                DateTime creationDate = DateTime.Parse(reader["creationdate"].ToString());
                DateTime modificationDate = DateTime.Parse(reader["modificationdate"].ToString());
                DateTime scheduledDate = DateTime.Parse(reader["scheduleddate"].ToString());
                string subject = reader["skill"].ToString();
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();
                string status = reader["status"].ToString();

                Assessment test = new Assessment();
                test.Id = id;
                test.TestName = TestName;
                test.SubjectId = subjectId;
                test.SubjectExpertId = subjectExpertId;
                test.CreationDate = creationDate;
                test.ModificationDate = modificationDate;
                test.ScheduledDate = scheduledDate;
                test.Status = status;
                test.Subject = subject;
                test.FirstName = firstName;
                test.LastName = lastName;
                tests.Add(test);
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tests;
    }



    public async Task<List<Employee>> GetAllEmployees()
    {
        await Task.Delay(100);
        List<Employee> employees = new List<Employee>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var emp = con.Query<Employee>("SELECT * FROM employees");

            employees = emp as List<Employee>;

        }
        return employees;
    }

    public async Task<Employee> GetEmployeeById(int userId)
    {
        await Task.Delay(100); // Optional delay; you can remove this if not needed.
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            string query = "SELECT * FROM employees WHERE userId=@userId";
            var employee = await con.QueryFirstOrDefaultAsync<Employee>(query, new { userId });
            return employee;
        }
    }

    public async Task<List<Subject>> GetAllSubjects()
    {
        await Task.Delay(100);
        List<Subject> subjects = new List<Subject>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var sub = con.Query<Subject>("select * from subjects");

            subjects = sub as List<Subject>;

        }

        return subjects;
    }

    public async Task<List<Concepts>> GetConcepts()
    {
        await Task.Delay(100);
        List<Concepts> concepts = new List<Concepts>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var conceptList = con.Query<Concepts>("select * from concepts");

            concepts = conceptList as List<Concepts>;

        }

        return concepts;
    }

    public async Task<List<Concepts>> GetConceptsBySubject(int subjectId)
    {
        await Task.Delay(100);
        List<Concepts> concepts = new List<Concepts>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var conceptList = con.Query<Concepts>("select * from concepts WHERE subjectid=@SubjectId", new { subjectId });

            concepts = conceptList as List<Concepts>;

        }

        return concepts;
    }

    public async Task<int> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions)
    {
        await Task.Delay(100);
        int testId = 0;
        string query = @"
        INSERT INTO tests 
        (Name, subjectid, duration, smeid, creationdate, modificationdate, scheduleddate, passinglevel)
        VALUES 
        (@Name, @SubjectId, @Duration, @SmeId, @CreationDate, @ModificationDate, @ScheduledDate, @PassingLevel);
        SELECT LAST_INSERT_ID();"; // Get the last inserted ID

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            try
            {
                // Execute the query with the parameters mapped from the request DTO
                testId = con.QuerySingle<int>(query, new
                {
                    Name = createTestWithQuestions.Name,
                    SubjectId = createTestWithQuestions.SubjectId,
                    Duration = createTestWithQuestions.Duration,
                    SmeId = createTestWithQuestions.SmeId,
                    CreationDate = DateTime.UtcNow,
                    ModificationDate = DateTime.UtcNow,
                    ScheduledDate = createTestWithQuestions.ScheduledDate,
                    PassingLevel = createTestWithQuestions.PassingLevel
                });

                // Now add questions to the test
                foreach (var questionId in createTestWithQuestions.QuestionIds)
                {
                    await AddQuestion(testId, questionId);
                }
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine($"Error while creating test with questions: {ex.Message}");
            }
        }

        return testId;
    }

    public async Task<List<SubjectQuestions>> GetAllQuestionsBySubject(int subjectId)
    {
        await Task.Delay(100);
        List<SubjectQuestions> questions = new List<SubjectQuestions>();
        // string query = "SELECT * FROM questionbank WHERE subjectid=@SubjectId";

        string query = @"
            SELECT 
                id AS QuestionBankId,
                title,
                a,
                b,
                c,
                d
            FROM questionbank
            WHERE subjectid = @subjectId";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            questions = con.Query<SubjectQuestions>(query, new { SubjectId = subjectId }).AsList();
            // criterias = criteriaList as List<EvaluationCriteria>;
        }
        if (questions == null || questions.Count == 0)
        {
            return new List<SubjectQuestions>();
            // return new NotFoundObjectResult("No questions found for the specified subject.");
        }
        return questions as List<SubjectQuestions>;
    }

    public async Task<List<Employee>> GetSmeBySubject(int subjectId)
    {
        await Task.Delay(100);
        List<Employee> smeList = new List<Employee>();
        string query = @"
            SELECT sme.id, e.userId, e.firstName, e.lastName, e.email, e.contact
            FROM employees e
            INNER JOIN subjectmatterexperts sme ON e.id = sme.employeeid
            WHERE sme.subjectid = @SubjectId";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            smeList = con.Query<Employee>(query, new { SubjectId = subjectId }).AsList();
        }

        return smeList;
    }
    public async Task<List<Test>> GetAllTests(DateTime fromDate, DateTime toDate)
    {
        await Task.Delay(100);
        List<Test> tests = new List<Test>();
        string query = @"SELECT * FROM tests WHERE scheduleddate BETWEEN @FromDate AND @ToDate";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            tests = con.Query<Test>(query, new { FromDate = fromDate, ToDate = toDate }).AsList();
        }

        return tests;
    }
    public async Task<TestWithQuestions> GetTestDetails(int testId)
    {
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var test = await con.QuerySingleOrDefaultAsync<TestWithQuestions>(

                @"
                SELECT *
                FROM tests
                WHERE id = @TestId",
                new { TestId = testId });

            if (test != null)
            {
                var questions = await con.QueryAsync<Question>(
                    @"SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.conceptid
                      FROM questionbank q
                      INNER JOIN testquestions tq ON q.id = tq.questionbankid
                      WHERE tq.testid = @TestId", new { TestId = testId });

                test.Questions = questions.ToList();
            }

            return test;
        }
    }
    public async Task<List<Question>> GetQuestionsByConceptId(int evaluationConceptId)
    {
        await Task.Delay(100);
        List<Question> questions = new List<Question>();
        string query = @"
            SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.conceptid
            FROM questionbank q
            WHERE q.conceptid = @conceptid";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            questions = con.Query<Question>(query, new { conceptid = evaluationConceptId }).AsList();
        }

        return questions;
    }
    public async Task<bool> UpdateQuestion(Question question)
    {
        await Task.Delay(100);
        bool status = false;
        Console.WriteLine("Update Question: " + question.Id);
        string query = @"
            UPDATE questionbank 
            SET title = @Title, a = @A, b = @B, c = @C, d = @D, answerkey = @AnswerKey 
            WHERE id = @Id";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            try
            {
                int rowsAffected = con.Execute(query, new
                {
                    Id = question.Id,
                    Title = question.Title,
                    A = question.A,
                    B = question.B,
                    C = question.C,
                    D = question.D,
                    AnswerKey = question.AnswerKey,
                    // EvaluationCriteriaId = question.EvaluationCriteriaId
                });

                status = rowsAffected > 0; // Determine success based on rows affected
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine($"Error while updating question: {ex.Message}");
            }
        }

        return status;
    }

    public Task<bool> UpdateTestStatus(int Id, TestStatusUpdate status)
    {
        Task.Delay(100);
        bool updateStatus = false;
        // string query = "UPDATE tests SET status = @Status WHERE id = @TestId";
        string query = "UPDATE assessments SET status = @Status WHERE id = @AssessmentId";


        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            try
            {
                int rowsAffected = con.Execute(query, new { Status = status.Status, AssessmentId = Id });
                updateStatus = rowsAffected > 0; // Determine success based on rows affected
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine($"Error while updating test status: {ex.Message}");
            }
        }

        return Task.FromResult(updateStatus);
    }

    // public async Task<bool> AddEmployeesToTest(TestAssignmentRequest request)
    // {
    //     await Task.Delay(100);
    //     bool status = false;
    //     using (IDbConnection con = new MySqlConnection(_connectionString))
    //     {
    //         foreach (var employeeId in request.EmployeeIds)
    //         {
    //             var query = "INSERT INTO testschedules (testid, candidateid, scheduledstart, scheduledend, status, rescheduledon, remarks) " +
    //                         "VALUES (@TestId, @EmployeeId, @ScheduledStart, @ScheduledEnd, @Status, @RescheduledOn, @Remarks)";


    //             var parameters = new
    //             {
    //                 TestId = request.TestId,
    //                 EmployeeId = employeeId,
    //                 ScheduledStart = request.ScheduledStart,
    //                 ScheduledEnd = request.ScheduledEnd,
    //                 Status = request.Status,
    //                 RescheduledOn = request.RescheduledOn,
    //                 Remarks = request.Remarks
    //             };
    //             if (con.Execute(query, parameters) > 0)
    //             {
    //                 status = true;
    //             }
    //         }
    //     }
    //     return status;
    // }

    public async Task<bool> AddEmployeesToTest(TestAssignmentRequest request)
    {

        await Task.Delay(100);
        bool status = false;

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {

            foreach (var candidateId in request.CandidateIds)
            {

                var query =
                "INSERT INTO assessments (test_id, candidate_id, status,createdOn, createdby, scheduledstart, scheduledend) " +
                "VALUES (@test_id, @candidate_id, @status,@createdOn, @createdBy, @scheduledstart, @scheduledend)";
                var parameters = new
                {
                    test_id = request.TestId,
                    candidate_id = candidateId,
                    status = request.Status,
                    createdOn = DateTime.Now,
                    createdBy = request.CreatedBy,
                    scheduledstart = request.ScheduledStart,
                    scheduledend = request.ScheduledEnd
                };

                if (con.Execute(query, parameters) > 0)
                    status = true;
            }
        }
        return status;
    }


    public async Task<List<TestEmployeeDetails>> GetAllTestByEmpId(int empId)
    {
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var result = await con.QueryAsync<TestEmployeeDetails>(
                "GetTestEmployeeDetailsByCandidate",
                new { candidate = empId },
                commandType: CommandType.StoredProcedure
            );

            return result.ToList();
        }
    }


    public async Task<int> GetTestCountByStatus(string status)
    {

        int count = 0;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        string query = "select count(id) as testcount from tests where status=@status;";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@status", status);
        try
        {

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            reader.Read();
            count = int.Parse(reader["testcount"].ToString());
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return count;
    }

    public async Task<List<TestDetails>> GetAllTestByStatus(string status)
    {
        List<TestDetails> tests = new List<TestDetails>();
        string query = @"select 
                    t.id,
                    t.name,
                    s.title,
                    t.duration,
                    MAX(ts.scheduledstart) as scheduledstart,
                    MAX(ts.scheduledend) as scheduledend
                from tests t
                left join assessments ts on t.id = ts.test_id
                left join subjects s on s.id = t.subjectid
                where t.status = @status
                group by t.id, t.name, s.title, t.duration;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@status", status);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string TestName = reader["Name"].ToString();
                string subjectName = reader["title"].ToString();
                TimeSpan duration = TimeSpan.Parse(reader["duration"].ToString());
                DateTime? scheduledStart = reader.IsDBNull("scheduledstart")
               ? (DateTime?)null
               : reader.GetDateTime("scheduledstart");

                DateTime? scheduledEnd = reader.IsDBNull("scheduledend")
                    ? (DateTime?)null
                    : reader.GetDateTime("scheduledend");

                TestDetails test = new TestDetails();
                test.Id = id;
                test.TestName = TestName;
                test.Subjectname = subjectName;
                test.Duration = duration;
                test.ScheduledStart = scheduledStart;
                test.ScheduledEnd = scheduledEnd;
                tests.Add(test);
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tests;
    }




    public async Task<List<Subject>> GetSubjectBySME(int smeid)
    {
        List<Subject> subjects = new List<Subject>();
        const string query = @"
        SELECT s.id, s.title
        FROM subjectmatterexperts sme
        JOIN subjects s ON sme.subjectId = s.id
        WHERE sme.employeeId = @smeid";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@smeid", smeid);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["Title"].ToString();

                Subject subject = new Subject();
                subject.Id = id;
                subject.Title = title;
                subjects.Add(subject);
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return subjects;
    }

    public async Task<List<TestDetails>> GetSmeTestList(int smeId)
    {
        Console.WriteLine("DAL SmeId: " + smeId);
        List<TestDetails> tests = new List<TestDetails>();
        string query = @"SELECT 
                        Name AS test_name,
                        duration
                        FROM tests
                        WHERE smeid = @SmeId"; 
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@smeid", smeId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                string TestName = reader["test_name"].ToString();
                TimeSpan duration = TimeSpan.Parse(reader["duration"].ToString());

                TestDetails test = new TestDetails();
                test.TestName = TestName;
                test.Duration = duration;
                tests.Add(test);
            }
        }
        catch(Exception e)
        {
          throw e;  
        }
        finally
        {
            await connection.CloseAsync();
        }
        return tests;
    }


}
