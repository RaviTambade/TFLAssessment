using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
using Assessment.Repositories.Interfaces;
namespace Assessment.Repositories.Implementations;

 
public class TestManager :ITestManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    public Test GetTestDetails(int testId) //*******
    {
            Test test=new Test();



            return  test;

    }
    public List<Test> GetAllTests(DateTime fromDate, DateTime toDate)  //******
    {
        List<Test> tests=new List<Test>();
        return tests;

    }
    public List<Test> GetAllTestsDesignedBy(int smeId)   //********
    {
        List<Test> tests=new List<Test>();
        return tests;

    }
    public bool AddQuestionToTest(int testId, int questionId)  //*******
    {
            bool status =false;
        return status;
    }
    public bool AddQuestionsToTest(int testId, List<int> questions) //****
    {
        return false;
        

    }
    public bool RemoveQuestionFromTest(int testid, int questionId){

            bool status =false;
        return status;

    }
    public bool ChangeTestDuration(int testId, int duration){
            bool status =false;
        return status;

    } //******
    public bool RescheduleTest(int testId, DateTime date){

        bool status =false;
        return status;


    }  //********
    public  List<CandidateResultDetails>  GetTestResult(int testId){
        List<CandidateResultDetails>   results=new List<CandidateResultDetails>();
        return results;
    } 

    public CandidateResultDetails  GetCandidateTestResult(int testId, int candidateId){
            CandidateResultDetails result=new CandidateResultDetails();


            return result;

    }
   public List<CandidateResultDetails> GetAllCandidatesScore( int testId){
        List<CandidateResultDetails>  allCandidatesScore=new List<CandidateResultDetails>();
        return allCandidatesScore;

    }
   public  List<Employee>  GetAllEmployees(){
        List<Employee>   employees=new List<Employee>();
        
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

     public  List<Subject>  GetAllSubjects(){
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

}
