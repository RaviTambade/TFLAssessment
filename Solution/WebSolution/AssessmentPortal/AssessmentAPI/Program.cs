//Minimal Code Strategy


//Entry Point file
//Main function
//Application Type:Web application
//Web Applications are always hosted on Web Server
//Web application always running 
//to handle incomming requests from remote enduser
//process incomming request with some logic
//and sends response to remote user who sent request from remote machine
using MySql.Data.MySqlClient;
using System.Data;
using Entities;


var builder = WebApplication.CreateBuilder(args);
//Add Cors services
builder.Services.AddCors();

var app = builder.Build();




//register callback function for responding incomming HTTP Requests
//lambda function
//arrow function
//httprequest handler
//callback function
//http rquest listener

//()=>""
//()=>{}

//HTTP Request: types
//GET Request
//POST Request
//PUT Request
//DELETE Request

//Set up Cors Middleware

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
  

app.MapGet("/dbemployees",()=>{
    List<Employee> employees=new List<Employee>();
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
        string query = "select * from employee";
        MySqlCommand command = new MySqlCommand(query,connection);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while(reader.Read()){
              int id=int.Parse(reader["id"].ToString());
              string fname = reader["fname"].ToString();
              string lname = reader["lname"].ToString();
              string contactno = reader["contactno"].ToString();
              string email = reader["email"].ToString();
              Employee emp = new Employee();
              emp.Id=id;
              emp.FName=fname;
              emp.LName=lname;
              emp.ContactNo=contactno;
              emp.Email=email;
              employees.Add(emp);
        }
        reader.Close();
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return employees;
});


app.MapGet("/subjects",()=>{
    List<Subject> subjects=new List<Subject>();
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
        string query = @"select * from technicalskills";
        MySqlCommand command = new MySqlCommand(query,connection);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while(reader.Read()){
              int id=int.Parse(reader["techskid"].ToString());
              string title=reader["title"].ToString();
              Subject subject = new Subject();
              subject.Id=id;
              subject.Title=title;
              subjects.Add(subject);
        }
        reader.Close();
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return subjects;
});


var testAPIUrl="/answersheet/candidates/{candidateId}/tests/{testId}";
app.MapPost(testAPIUrl,(CandidateAnswer[] answers,int candidateId)=>{
    bool status=false;
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
       connection.Open();

            foreach (var answer in answers)
            {
                string query = "INSERT INTO candidateanswers (employeeid, testquestionid, answerkey) VALUES (@employeeId, @testQuestionId, @answerKey)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", candidateId);
                command.Parameters.AddWithValue("@testQuestionId", answer.TestQuestionId);
                command.Parameters.AddWithValue("@answerKey", answer.Answer);

                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    status = true;
                }
            }  
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
});

//get all questions of the test mentioned

app.MapGet("/tests/{testId}",(int testId)=>{
    List<Question> questions=new List<Question>();
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
        string query = @"select * from questions inner join testquestions on testquestions.questionid = questions.qid where testquestions.testid= @testId";
        MySqlCommand command = new MySqlCommand(query,connection);
        command.Parameters.AddWithValue("@testId",testId);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while(reader.Read()){
              int id=int.Parse(reader["qid"].ToString());
            int tId=int.Parse(reader["testid"].ToString());
              string question=reader["question"].ToString();
              string a = reader["a"].ToString();
              string b = reader["b"].ToString();
              string c = reader["c"].ToString();
              string d = reader["d"].ToString();
              Question ques = new Question();
              ques.Id=id;
              ques.Title=question;
              ques.A=a;
              ques.B=b;
              ques.C=c;
              ques.D=d;
              ques.TestId= tId;
              questions.Add(ques);
        }
        reader.Close();
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return questions;
});

string candidateTestResultUrl=@"/result/candidates/{candidateId}/test/{testId}/";
///employee/{candidateId}/test/{testid}

app.MapGet("candidateTestResultUrl",(int candidateId,int testId )=>{
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
    int score=0;
    try{
        connection.Open();
        MySqlCommand command = new MySqlCommand("spcandidatetestresult",connection);
        command.CommandType=CommandType.StoredProcedure;
        command.Parameters.AddWithValue("@pcandidateId",candidateId);
        command.Parameters.AddWithValue("@ptestId",testId);
        command.Parameters.AddWithValue("@pscore", MySqlDbType.Int32);

        command.Parameters["@pscore"].Direction = ParameterDirection.Output;
        int rowsAffected=command.ExecuteNonQuery();
        score = Convert.ToInt32(command.Parameters["@pscore"].Value);
        Console.WriteLine(score);
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return score;
});

var testAnsAPIUrl="/test/setstarttime";
app.MapPost(testAnsAPIUrl,(CandidateTestDetails testDetails)=>{
    bool status=false;
    var time = testDetails.Time.year +"-"+testDetails.Time.month+"-"+testDetails.Time.day+"T"+testDetails.Time.hour+":"+testDetails.Time.minutes+":"+testDetails.Time.seconds;
    Console.WriteLine("starttime"+time);
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
                string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@testid,@teststarttime,@candidateid)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@testid", testDetails.TestId);
                command.Parameters.AddWithValue("@candidateid", testDetails.CandidateId);
                command.Parameters.AddWithValue("@teststarttime", time);
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    status = true;
                }
            
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
});


string setendtimeUrl="/test/setendtime";   //modify as per req

app.MapPut(setendtimeUrl,( CandidateTestDetails testT)=>{
    bool status=false;
    var time = testT.Time.year +"-"+testT.Time.month+"-"+testT.Time.day+"T"+testT.Time.hour+":"+testT.Time.minutes+":"+testT.Time.seconds;
    Console.WriteLine("endtime"+time);
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
                string query = "update candidatetestresults set testendtime =@testendtime where candidateid=@candidateid and testid=@testid";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@candidateid", testT.CandidateId);
                command.Parameters.AddWithValue("@testid", testT.TestId);
                command.Parameters.AddWithValue("@testendtime", time);
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    status = true;
                }
            
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
});


//Now all of you need to work on this 

app.Run();