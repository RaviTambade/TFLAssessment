// See https://aka.ms/new-console-template for more information
// See https://aka.ms/new-console-template for more information

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.PortableExecutable;
using MYCONSOLEAPP;
TaxCalculationDelegate taxCalculation = new TaxCalculationDelegate(TaxManager.CalculateIncomeTax);
TaxCalculationDelegate salesTaxCalculation = new TaxCalculationDelegate(TaxManager.CalculateSalesTax);
TaxCalculationDelegate propertyTaxCalcution = new TaxCalculationDelegate(TaxManager.CalculatePropertyTax);
// direct invoke kela ahe 

//  decimal IncomeTax=TaxManager.CalculateIncomeTax(150000);
// decimal salesTax=TaxManager.CalculateSalesTax(2000);
// decimal propertyTAX = TaxManager.CalculatePropertyTax(300000);

// Console.WriteLine($"Income Tax: {IncomeTax}");
// Console.WriteLine($"Sales Tax: {salesTax}");
// Console.WriteLine($"Property Tax: {propertyTAX}");
decimal income1 = 150000;
decimal income2 = 20000;

decimal sales = 2000;
decimal property = 300000;

decimal incomeTax1 = taxCalculation(income1);
decimal incomeTax2 = taxCalculation(income2);

decimal salesTax = salesTaxCalculation(sales);

decimal propertyTax = propertyTaxCalcution(property);


Console.WriteLine($"Income Tax: {incomeTax1}");
Console.WriteLine($"Income Tax: {incomeTax2}");

 Console.WriteLine($"Sales Tax: {salesTax}");
Console.WriteLine($"Property Tax: {propertyTax}");
