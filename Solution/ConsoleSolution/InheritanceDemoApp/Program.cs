using HR;
using Drawing;
using Printing;
Employee e=new Employee();
//setting values through Properties
//set block
e.BasicSalary=15000;
e.HRA=5000;
e.DA=800;

Console.WriteLine(e);


Manager mgr=new Manager();
Manager mgr2=new Manager(15000,7000,1000,1000);

//getting data through Property
//get block
double amount=mgr2.HRA;
double salary=mgr2.CalculateSalary();
Console.WriteLine(mgr2);
Console.WriteLine("Manager Salary="+ salary);



//Polymorpshism

Shape myShape=new Shape();

Shape theShape=new Line();

theShape.color="green";
theShape.Draw();
Console.WriteLine(" Color ="+ theShape.color);

Shape theShape2=new Rectangle();
theShape2.Draw();

List<IPrintable> printers=new List<IPrintable>();

IPrintable printer1=new InkJetPrinter();
IPrintable printer2=new LaserPrinter();
IPrintable printer3=new DeskJetPrinter();
IPrintable printer4=new HPPriter();

printers.Add(printer1);
printers.Add(printer2);
printers.Add(printer3);
printers.Add(printer4);

foreach( IPrintable printer in priters){
    printer.Print();
}

