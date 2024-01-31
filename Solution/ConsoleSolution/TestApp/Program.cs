
//Entry Point function

// See https://aka.ms/new-console-template for more information
//Import 

using Assessment;

Console.WriteLine("Hello, World!");


Console.WriteLine("Test App");
int A = 5;
Console.WriteLine(A);

// Yash
int x = 5;
int y = 10;
int sum = x + y;
Console.WriteLine("Addition of X and Y ="+ sum);  
//pramod
int c = 10;
int b = 15;
int sub = b - c;
Console.WriteLine("subtraction from b and c ="+ sub);

//Object created
//emp1 and emp2 are references which points to objects created on heap
//emp1 and emp2 are refences stored on Stack

//Object is getting created using Default Constructor
Employee emp1 = new Employee();
Employee emp2 = new Employee();

string fName="Rajiv";
string fName2="Manisha";

//setting FirstName using Setter function
emp1.SetFname(fName);
emp2.SetFname(fName2);

//getting FirstName using Getter function

string Name1 = emp1.GetFname();
string Name2 =emp2.GetFname();

Console.WriteLine("First object Name="+ Name1);
Console.WriteLine("First object Name="+ Name2);

//Property assignment
emp1.FirstName="Chandrakant";   //this will invoke set block of FirstName Property
emp1.LastName="Shinde";         //this will invoke set block of LastName Property


Console.WriteLine("First   Name="+ emp1.FirstName);  // this weill automatically call get block
Console.WriteLine("Last   Name="+ emp1.LastName);  // this weill automatically call get block


emp2.FirstName="Chiranjivi";   //this will invoke set block of FirstName Property
emp2.LastName="Reddy";         //this will invoke set block of LastName Property


Console.WriteLine("First   Name="+ emp2.FirstName);  // this weill automatically call get block
Console.WriteLine("Last   Name="+ emp2.LastName);  // this weill automatically call get block

string n3=emp2.FirstName;

//Object is getting created using parameterized constructor
Employee e5=new Employee(45, "Rajan",
                         "More", "9881734895",
                         "rajan.more@gmail.com");
