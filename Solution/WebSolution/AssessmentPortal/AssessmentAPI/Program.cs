//Entry Point file
//Main function
//Application Type:Web application
//Web Applications are always hosted on Web Server
//Web application always running 
//to handle incomming requests from remote enduser
//process incomming request with some logic
//and sends response to remote user who sent request from remote machine
using MySql.Data.MySqlClient;
using Entities;
var builder = WebApplication.CreateBuilder(args);
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
app.MapGet("/", () => "Hello World!");
app.MapGet("/welcome",()=>"Welcome");
app.MapGet("/aboutus", ()=>"Transflower Learning Pvt. Ltd.");
app.MapGet("/contact", ()=>"<ol>"
                                +"<li>9881735801</li>"
                                 +"<li>9881735802</li>"
                                +"</ol>");
app.MapGet("/services",()=>"Mentoring, Training,Consultancy");
app.MapGet("/number",()=>{
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

app.Run();