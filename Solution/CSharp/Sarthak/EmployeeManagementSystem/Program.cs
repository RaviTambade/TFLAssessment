// See https://aka.ms/new-console-template for more information
using System;
using HR;

Address addr = new Address("Pune", "Maharashtra", "411001");

SalesEmployee salesEmp = new SalesEmployee(101, "sarthak kadam", 50000, 8000,addr);

Console.WriteLine("Commision =" + salesEmp.Commission);
salesEmp.Display();

    
