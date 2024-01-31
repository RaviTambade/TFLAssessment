namespace Assessment;

public class Employee{
    //data members
    //Encapsulation: Data Hiding
    private int empId;
    private string firstName;
    private string lastName;
    private string contactNumber;
    private string email;

    //Constructor Overloading
    public Employee(){
     //object initialization
         this.empId=67;
        this.firstName="Bhupendra";
        this.lastName="Joshi";
        this.contactNumber="99999999";
        this.email="bhupendera.joshi@transflower.in";
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

    //Basic syntax for getter and setter 
    public string GetFname(){
        return firstName;
    }

     public void SetFname(string fName){
        this.firstName=fName;
    }

    //Property Syntax
   public string FirstName
    {
        get { return firstName; }  //get Block
        set { firstName= value; }  //set Block
    }

    public string LastName
    {
        get { return lastName; }  //get Block
        set { lastName= value; }  //set Block
    }


    public string Email{
        get { return this.email;}
        set {this.email=value;}
    }


    public string ContactNumber{
        get { return this.contactNumber;}
        set {this.contactNumber=value;}
    }
}
