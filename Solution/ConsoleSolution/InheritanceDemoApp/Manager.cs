namespace HR;
public class Manager: Employee
{ 
     private double incentive;
     public Manager():base(){
        incentive=34;
     }

    public Manager(double bsal, double hra, double da, double incentive):
                  base(bsal, hra, da)  //Member Initialized List
    {
      this.incentive=incentive;
    }

    //override method CalculateSalary of Employee class here
    public override double CalculateSalary(){
        return base.CalculateSalary()+ incentive;
    }git ag

    public override string ToString(){
        return base.ToString() + " Incentive="+incentive;
    }
}
