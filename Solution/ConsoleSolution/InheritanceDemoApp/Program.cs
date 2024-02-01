using HR;
Employee e=new Employee();
e.basic_sal=15000;
e.hra=5000;
e.da=800;

Console.WriteLine(e);


Manager mgr=new Manager();
Manager mgr2=new Manager(15000,7000,1000,1000);
double salary=mgr2.CalculateSalary();
Console.WriteLine(mgr2);
Console.WriteLine("Manager Salary="+ salary);
