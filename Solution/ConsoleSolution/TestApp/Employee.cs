namespace Assessment;

public class Employee{
    
    //data members
    private int empId;
    private string firstName;
    private string lastName;
    private string contactNumber;
    private string email;

    //Constructor
    public Employee(){
     //object initialization
    }

    public Employee(int empId,string firstName,string lastName,string contactNumber,string email){
        this.empId=empId;
        this.firstName="Bhupendra";
        this.lastName=lastName;
        this.contactNumber=contactNumber;
        this.email=email;

    }

    public int GetEmployeeId(){
        return empId;
    }

     public void SetEmployeeId(int value){
        empId=value;
    }

    public string GetFname(){
        return firstName;
    }

     public void SetFname(string value){
        firstName=value;
    }

   public string FirstName
    {
        get { return firstName; }
        set { firstName= value; }
    }


}
