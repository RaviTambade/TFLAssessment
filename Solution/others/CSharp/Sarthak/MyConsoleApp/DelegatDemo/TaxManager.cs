
namespace MYCONSOLEAPP
{
    public delegate decimal TaxCalculationDelegate(decimal amount);
    // delegate he task assign karyla use kela ahe jasa ki apan calculateIncomeTax, 
    // he function delegate karun task dila ahe 
    public static class TaxManager

    {
        public static decimal CalculateIncomeTax(decimal income)
        {
            decimal taxRate = 0.2m;
            return income * taxRate;
        }
        public static decimal CalculateSalesTax(decimal amount)
        {
            decimal salesTaxRate = 0.07m;
            return amount * salesTaxRate;
        }
        public static decimal CalculatePropertyTax(decimal propertyValue)
        {
            decimal propertyTaxRate = 0.01m;
            return propertyValue * propertyTaxRate;
        }
    }

}