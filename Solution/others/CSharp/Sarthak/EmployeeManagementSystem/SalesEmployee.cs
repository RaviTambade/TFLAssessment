using System;
namespace HR
{
    public class SalesEmployee: Employee
        {
       private double commission;
     
        public double Commission
        {
            get { return commission; }
            set { commission = value; }
        }

    public SalesEmployee(int id, string name, double salary, double commission,Address address): base(id,name,salary,address)
    {
     this.Commission = commission;
    }
    
  }
    
}