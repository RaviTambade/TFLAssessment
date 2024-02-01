namespace HR{
    public class Employee
    { 
        //Data Members  
        public  double basic_sal;
        public  double hra;
        public  double da;

        public Employee()
        {

        }
        public Employee(double sal, double hra, double da){
            this.basic_sal=sal;
            this.hra=hra;
            this.da=da;
        }
        //Method overrding: Change behaviour of Parent virtual method
        public override string ToString(){
            string str=" basic Salary="+ basic_sal+ ", HRA="+hra+ " Daily Allowance="+da;
            return base.ToString() + str;
        }

        public virtual double CalculateSalary ()
        {
            return basic_sal + hra+ da;
        }

    }
}


//Each class in .net is inherited from Object Class
//Object class has some methods
//GetType()---------------reflection
//GetHashCode()-----------getting hash code
//Equals()----------------to check equality of two objects of same class
// virtual ToString()--------------converts objects state data into string format

