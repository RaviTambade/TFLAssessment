
using AssessmentEntities; //------------------dll
using AssessmentInterfaces;//-------------dll
namespace AssessmentServices;

using MySql.Data.MySqlClient;
using System.Data;

public class AssessmentService :IAssessmentService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    public Assessment GetDetails(int AssessmentId) //*******
    {
            Assessment assessment=new Assessment();

           
            string query = @"select * from tests where id="+AssessmentId;

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    assessment.Id = id;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
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
        List<Assessment> Assessments=new List<Assessment>();
        return Assessments;
    }
    public List<Assessment> GetAllBySubjectMatterExpert(int smeId)   //********
    {
        List<Assessment> Assessments=new List<Assessment>();
        return Assessments;
    }
    public bool AddQuestion(int AssessmentId, int questionId)  //*******
    {
         bool status =false;
        return status;
    }
    public bool AddQuestions(int AssessmentId, List<int> questions) //****
    {

        return false;
    }
    public bool RemoveQuestion(int Assessmentid, int questionId){

        bool status =false;
        return status;
    }
    public bool ChangeDuration(int AssessmentId, int duration){
        bool status =false;
        return status;
    } //******
    public bool Reschedule(int AssessmentId, DateTime date){
        bool status =false;
        return status;
    }  //********

 
}
