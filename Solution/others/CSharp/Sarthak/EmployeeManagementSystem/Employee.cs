namespace HR
{
    public class Employee
    {
        private int id;
        private string name;
        private double salary;
        private Address address;

        public int Id
        {
            get { return id; }
            set { id = value; }
        }
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public double Salary
        {
            get { return salary; }
            set { salary = value; }
        }
        public Address Address
        {
            get { return address; }
            set { address = value; }
        }


        public Employee(int id, string name, double salary,Address theAddress)
        {
            this.id = id;
            this.name = name;
            this.salary = salary;
            this.address = theAddress;
        }

        public void Display()
        {
            Console.WriteLine("ID: " + id + ", Name: " + name + ", Salary: " + salary);
            if (address != null)
            {
                address.Display();
            }
        }
        

    }
   
 }
