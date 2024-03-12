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

app.MapGet("/", () => "Hello World!");
app.MapGet("/welcome",()=>"Welcome");
app.MapGet("/aboutus", ()=>"Transflower Learning Pvt. Ltd.");
app.MapGet("/contact", ()=>"<ol>"
                                +"<li>9881735801</li>"
                                 +"<li>9881735802</li>"
                                +"</ol>");


app.MapGet("/services",()=>"Mentoring, Training,Consultancy");
app.MapGet("/Aboutyou",()=>"Name : Bhupendra Walhekar\nAddress : Pune\nContact : 9175116616\nEmail : bhupendraw@transflowerlearning.com");
app.MapGet("/number",()=>{
                            //Request Processing
                            int count=90;
                            string result="";
                            count ++;
                            if(count <500){
                                result=count.ToString();
                            }
                            return result;
                        });

app.MapGet("/products/12",()=>{
                            Product p1=new Product { Id = 12, 
                                                    Title = "Gerbera", 
                                                    Description = "Wedding Flower", 
                                                    UnitPrice = 6, 
                                                    Category = "Flower", 
                                                    Balance = 5000,
                                                    PaymentTerm="Cash on Delivery",
                                                    Delivery="24 hours shipment delay" };
                            return p1;
                        });

app.MapGet("/employees",()=>{
    List<Employee> allEmployees=new List<Employee>();
    allEmployees.Add(new Employee{ Id=12, FName="Bhupendra", LName="Patil"});
    allEmployees.Add(new Employee{ Id=13, FName="Akash", LName="Jadhav"});
    allEmployees.Add(new Employee{ Id=14, FName="Vaibhav", LName="Sane"});
    return allEmployees;
});



//Changes added by Ravi Sir

app.MapGet("/javaquestions",()=>{
    List<Question> allQuestions=new List<Question>();
    allQuestions.Add(new Question{ Id=12, Title="What is the main purpose of Java programming language?", A="Web Development", B="Mobile Development",C="General-purpose programming",D="Game Development"});
    allQuestions.Add(new Question{ Id=13, Title="Which keyword is used to define a constant in Java?", A="var", B="final",C="const",D="static"});
    allQuestions.Add(new Question{ Id=14, Title="Which of the following data types is used to store a single character in Java?", A="char", B="string",C="int",D="float"});
    allQuestions.Add(new Question{ Id=15, Title="What does JVM stand for?", A="Java Virtual Machine", B="Java Visual Model",C="Java Virtual Model",D="Java Visual Machine"});
    return allQuestions;
});

app.MapGet("/dotnetquestions",()=>{
    List<Question> allQuestions=new List<Question>();
    allQuestions.Add(new Question{ Id=16, Title="What is the main purpose of Java programming language?", A="Web Development", B="Mobile Development",C="General-purpose programming",D="Game Development"});
    allQuestions.Add(new Question{ Id=17, Title="Which keyword is used to define a constant in Java?", A="var", B="final",C="const",D="static"});
    allQuestions.Add(new Question{ Id=18, Title="Which of the following data types is used to store a single character in Java?", A="char", B="string",C="int",D="float"});
    allQuestions.Add(new Question{ Id=19, Title="What does JVM stand for?", A="Java Virtual Machine", B="Java Visual Model",C="Java Virtual Model",D="Java Visual Machine"});
    return allQuestions;
});

app.MapGet("/angularquestions",()=>{
    List<Question> allQuestions=new List<Question>();
    allQuestions.Add(new Question{ Id=20, Title="What is the main purpose of Java programming language?", A="Web Development", B="Mobile Development",C="General-purpose programming",D="Game Development"});
    allQuestions.Add(new Question{ Id=21, Title="Which keyword is used to define a constant in Java?", A="var", B="final",C="const",D="static"});
    allQuestions.Add(new Question{ Id=22, Title="Which of the following data types is used to store a single character in Java?", A="char", B="string",C="int",D="float"});
    allQuestions.Add(new Question{ Id=23, Title="What does JVM stand for?", A="Java Virtual Machine", B="Java Visual Model",C="Java Virtual Model",D="Java Visual Machine"});
    return allQuestions;
});

app.MapGet("/reactquestions",()=>{
    List<Question> allQuestions=new List<Question>();
    allQuestions.Add(new Question{ Id=24, Title="What is the main purpose of Java programming language?", A="Web Development", B="Mobile Development",C="General-purpose programming",D="Game Development"});
    allQuestions.Add(new Question{ Id=25, Title="Which keyword is used to define a constant in Java?", A="var", B="final",C="const",D="static"});
    allQuestions.Add(new Question{ Id=26, Title="Which of the following data types is used to store a single character in Java?", A="char", B="string",C="int",D="float"});
    allQuestions.Add(new Question{ Id=27, Title="What does JVM stand for?", A="Java Virtual Machine", B="Java Visual Model",C="Java Virtual Model",D="Java Visual Machine"});
    return allQuestions;
});




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


var testAPIUrl="/answers/candidates/{candidateId}";
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


app.MapGet("/questions/tests/{testId}",(int testId)=>{
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

app.MapGet("/employee/{employeeId}/test/{testid}",(int employeeId,int testId)=>{
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
    int score=0;
    try{
        connection.Open();
        MySqlCommand command = new MySqlCommand("spcandidatetestresult",connection);
        command.CommandType=CommandType.StoredProcedure;
        command.Parameters.AddWithValue("@pcandidateId",employeeId);
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




var testAnsAPIUrl="/candidatetestresult";
app.MapPost(testAnsAPIUrl,(CandidateTestResult testresult)=>{
    bool status=false;
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
                string query = "insert into candidatetestresults(testid,marks,teststarttime,testendtime,candidateid) values (@testid,@marks,@teststarttime,@testendtime,@candidateid)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@testid", testresult.TestId);
                command.Parameters.AddWithValue("@marks", testresult.Marks);
                command.Parameters.AddWithValue("@teststarttime", testresult.TestStartTime);
                command.Parameters.AddWithValue("@testendtime", testresult.TestEndTime);
                command.Parameters.AddWithValue("@candidateid", testresult.CandidateId);
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