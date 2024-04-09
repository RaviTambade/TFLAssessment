
using AssessmentEntities; //------------------dll
using AssessmentInterfaces;//-------------dll
namespace AssessmentServices;

using Google.Protobuf.WellKnownTypes;
using MySql.Data.MySqlClient;
using System.Data;

public class AssessmentService :IAssessmentService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    public Assessment GetDetails(int assessmentId) //*******
    {
            Assessment assessment=new Assessment();   
            string query = @"select * from tests where id=@assessmentId";

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@assessmentId",assessmentId);
            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString(); 
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    
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
            return assessment;
    }
    public List<Assessment> GetAll(DateTime fromDate, DateTime toDate)  //******
    {
        List<Assessment> assessments=new List<Assessment>();
         string query = @"select * from tests where creationDate  between @fromDate and @toDate";

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromDate",fromDate);
            command.Parameters.AddWithValue("@toDate",toDate);
            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString();
                    Assessment assessment=new Assessment();
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    assessments.Add(assessment);
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
            return assessments;
    }
    public List<Assessment> GetAllBySubjectMatterExpert(int smeId)   //********
    {
        List<Assessment> assessments=new List<Assessment>();   
            string query = @"select * from tests where smeid=@smeId";

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@smeId",smeId);

            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    TimeOnly duration =TimeOnly.Parse(reader["duration"].ToString());
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString();
                    Assessment assessment=new Assessment();
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    assessments.Add(assessment);
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
            return assessments;
    }
    public bool AddQuestion(int assessmentId, int questionId)  //*******
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "insert into testquestions(testid,questionBankid) values ( @testId, @questionBankId)";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", assessmentId);
        command.Parameters.AddWithValue("@questionBankId", questionId);
        try
        {
            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            connection.Close();
        }
        return status;
    }
    public bool AddQuestions(int assessmentId, List<TestQuestion> questions) //****
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString); 
        try
        {
            foreach(var question in questions){
                string query = "insert into testquestions(testid,questionbankid) values (@testId, @questionBankId)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@testId", assessmentId);
                command.Parameters.AddWithValue("@questionBankId", question.QuestionBankId);
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
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
            connection.Close();
        }
        return status;
    }
    public bool RemoveQuestion(int assessmentId, int questionId)
    {
            bool status =false;  
            string query = @"Delete from testquestions where testid=@testId and questionbankid=@questionBankId";
            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@testId", assessmentId);
            command.Parameters.AddWithValue("@questionBankId", questionId);
            try
            {
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected>0)
                {
                    status=true;
                    
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                connection.Close();
            }
        return status;
    }

    public bool DeleteQuestions(int[] testQuestions)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);

        try
        {
            connection.Open(); // Open connection outside the loop

            foreach (var testQuestionId in testQuestions)
            {
                Console.WriteLine("DAl" + testQuestionId);

                string query = "DELETE FROM testquestions WHERE id = @id";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@id", testQuestionId);

                int rowsAffected = command.ExecuteNonQuery();
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
                connection.Close();
        }
        return status;
    }
    
    public bool ChangeDuration(int assessmentId, string duration){
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update tests set duration=@duration where id=@assessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentId", assessmentId);
        command.Parameters.AddWithValue("@duration", duration);
        try
        {
            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            connection.Close();
        }
        return status;
    } 
    public bool Reschedule(int assessmentId, DateTime date){
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update tests set scheduleddate=@scheduledDate where id=@assessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentId", assessmentId);
        command.Parameters.AddWithValue("@scheduledDate", date);
        try
        {
            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            connection.Close();
        }
        return status;
    }  


     public List<Assessment> GetAllTests()
    {
        List<Assessment> tests = new List<Assessment>();
        string query = @"select tests.*,subjects.title as skill,employees.firstname,employees.lastname from tests 
                        inner join subjectmatterexperts on subjectmatterexperts.id=tests.smeid
                        inner join subjects on subjects.id=subjectmatterexperts.subjectid
                        inner join employees on  employees.id=subjectmatterexperts.employeeid";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                // TimeOnly duration=TimeOnly.Parse(reader["duration"]);
                int subjectId = int.Parse(reader["subjectid"].ToString());
                int subjectExpertId = int.Parse(reader["smeid"].ToString());
                DateTime creationDate = DateTime.Parse(reader["creationdate"].ToString());
                DateTime modificationDate = DateTime.Parse(reader["modificationdate"].ToString());
                DateTime scheduledDate = DateTime.Parse(reader["scheduleddate"].ToString());
                string subject = reader["skill"].ToString();
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();

                Assessment test = new Assessment();
                test.Id = id;
                test.SubjectId = subjectId;
                test.SubjectExpertId = subjectExpertId;
                test.CreationDate = creationDate;
                test.ModificationDate = modificationDate;
                test.ScheduledDate = scheduledDate;
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
        return tests;
    }



      public List<Employee> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
        string query = "select * from employees";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);

        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();
                string contact = reader["contact"].ToString();
                string email = reader["email"].ToString();
                Employee employee = new Employee();
                employee.Id = id;
                employee.FirstName = firstName;
                employee.LastName = lastName;
                employee.Contact = contact;
                employee.Email = email;
                employees.Add(employee);
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
        return employees;
    }
    public List<Subject> GetAllSubjects()
    {
        List<Subject> subjects = new List<Subject>();
        string query = @"select * from subjects";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                Subject subject = new Subject();
                subject.Id = id;
                subject.Title = title;
                subjects.Add(subject);
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
        return subjects;
    }



    public List<EvaluationCriteria> GetEvalutionCriterias()
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                EvaluationCriteria criteria = new EvaluationCriteria();
                criteria.Id = id;
                criteria.Title = title;
                criterias.Add(criteria);
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
        return criterias;
    }



    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId)
    {
        List<EvaluationCriteria> criterias = new List<EvaluationCriteria>();
        string query = @"select * from evaluationcriterias WHERE subjectid=@subjectId";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@subjectId", subjectId);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();

                EvaluationCriteria criteria = new EvaluationCriteria();
                criteria.Id = id;
                criteria.Title = title;

                Console.WriteLine(criteria.Id + "  " + criteria.Title);

                criterias.Add(criteria);
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
        return criterias;
    }

}
