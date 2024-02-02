using HR;
using Drawing;
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



//Polymorpshism
Shape theShape=new Line();

theShape.color="green";
theShape.Draw();
Console.WriteLine(" Color ="+ theShape.color);


Shape theShape2=new Rectangle();
theShape2.Draw();