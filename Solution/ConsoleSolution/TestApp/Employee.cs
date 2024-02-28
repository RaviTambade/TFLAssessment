namespace Assessment;

public class Employee{
    //data members
    //Encapsulation: Data Hiding

    
    private int empId;

    private string lastName;
 
    private string email;

    //Constructor Overloading
    public Employee(){
     //object initialization
         this.empId=67;
        this.firstName="Bhupendra";
        this.lastName="Joshi";
        this.contactNumber="99999999";
        this.email="bhupendera.joshi@transflower.in";
        count++;

    }

    public Employee(int empId,string firstName,string lastName,string contactNumber,string email){
        this.empId=empId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.contactNumber=contactNumber;
        this.email=email;

        count++;

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
    private string firstName;
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
 
   
    //member variable
    //instance varialble
    private string contactNumber;
    
    //instance property
    public string ContactNumber{
        get { return this.contactNumber;}
        set {this.contactNumber=value;}
    }

    //default value of integer variable which is static always zero
    //shared variable
    //static variable
    //class variable
    public static int count;
 
    public static  int GetCount(){
        //static functions can access only static variables
        return count;
    }

    //class property
    public static int Count{
        get{return count;}
        set{count=value;}
    }

}
