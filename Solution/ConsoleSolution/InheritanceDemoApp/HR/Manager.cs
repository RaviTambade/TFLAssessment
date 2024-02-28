namespace HR;
public class Manager: Employee
{ 
    //Auto property
    public double Incentive{get;set;};
     public Manager():base(){
        Incentive=34;
     }

    public Manager(double bsal, double hra, double da, double incentive):
                  base(bsal, hra, da)  //Member Initialized List
    {
      this.Incentive=incentive;
    }

    //override method CalculateSalary of Employee class here
    public override double CalculateSalary(){
        return base.CalculateSalary()+ Incentive;
    }


    //Any function which is overriable in parent class
    //it is also overridable in their respective derived (child) classes
    public override string ToString(){
        return base.ToString() + " Incentive="+Incentive;
    }
}
