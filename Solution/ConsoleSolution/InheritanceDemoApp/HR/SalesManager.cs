namespace HR;

//Non-inheritable class
//java: final class
public sealed class SalesManager: Manager
{ 
    //Auto property
    public double Bonus{get;set;};

    //Member initialized list
     public SalesManager():base(){
        Bonus=12000;
     }

    public SalesManager(double bsal, double hra, double da, double incentive,double bonus):
                  base(bsal, hra, da,incentive)  //Member Initialized List
    {
        //this keyword is always used to access intance variables
        //and instance functions
        this.Bonus=bonus;
    }

    //override method CalculateSalary of Employee class here
    public override double CalculateSalary(){
        //base keyword is always used to access parent variables 
        //and parent functions
        return base.CalculateSalary()+ Bonus;
    }


    //Any function which is overriable in parent class
    //it is also overridable in their respective derived (child) classes
    public override string ToString(){
        return base.ToString() + " Bonus="+Bonus;
    }
}
