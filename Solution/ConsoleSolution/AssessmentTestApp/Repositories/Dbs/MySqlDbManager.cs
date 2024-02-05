using System.Security.Cryptography.X509Certificates;
using HR.Entities;
using HR.Repositories.Interfaces;
using MySql.Data.MySqlClient;
namespace HR.Repositories.Managers.Dbs;
public class MySqlDbManager:IManager{
public string connectionString="server=localhost;port=3306;user=root;password=root;database=assesmentdb";

public List<Employee> GetAll(){
//data base code for fetching all Employees

List<Employee> employees=new List<Employee>();
      /* Employee emp=new Employee();
        emp.id=45;
        emp.fname="Ravi";
        emp.lname="Tambade";
        emp.contactno="9881735801";
        emp.email="ravi.tambade@gmail.com";
        employees.Add(emp);

        Employee emp2=new Employee();
        emp2.id=48;
        emp2.fname="Shreedhar";
        emp2.lname="Patil";
        emp2.contactno="98834876";
        emp2.email="shreedhar.patil@gmail.com";
        employees.Add(emp2);
        //Data Access code 
        //Get all employees from table
        //Create list of employees from fetched data
        //send list of employees.

  */
     MySqlConnection connection = new MySqlConnection(connectionString);
     //connection.ConnectionString=connectionString;
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
              emp.Fname=fname;
              emp.Lname=lname;
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
}

public bool Insert(Employee emp){

//data base code for inserting new employee oject
    return false;
}

public bool Update(Employee emp){

   string updateSql = "update employee set fname = @newname where id=1";
   bool status = false;
   MySqlConnection connection = new MySqlConnection(connectionString);
   MySqlCommand updateCommand = new MySqlCommand(updateSql, connection);
   updateCommand.Parameters.AddWithValue("@newname", emp.Fname);
   //updateCommand.Parameters.AddWithValue("@id", emp.Id);
   
   /* string updateSql = "UPDATE users SET email = @newEmail WHERE name = @name";
    MySqlCommand updateCommand = new MySqlCommand(updateSql, connection);

    // Parameters
    updateCommand.Parameters.AddWithValue("@newEmail", "updated@tfl.com");
    updateCommand.Parameters.AddWithValue("@name", "Shital Patil");*/

    try
    {
        connection.Open();
        int rowsAffected = updateCommand.ExecuteNonQuery();
        if (rowsAffected > 0 ){
         status= true;
        }
        Console.WriteLine($"Updated {rowsAffected} row(s)!");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
    }
    finally
    {
        connection.Close();
    } 
    return status;
}

public bool Delete(int id){

//data base code for deleting  existing employee oject

        return false;
}

}