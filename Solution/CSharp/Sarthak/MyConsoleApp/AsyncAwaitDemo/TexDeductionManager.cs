
namespace MYCONSOLEAPP
{
    public delegate decimal TaxCalculationDelegate(decimal amount);
    // delegate he task assign karyla use kela ahe jasa ki apan calculateIncomeTax, 
    // he function delegate karun task dila ahe 
    public static class TaxManager

    {
        public async static Task<List<Product>> GetAllAvailableProducts()
        {
            await Task.Delay(10000);
            List<Product> products = new List<Product>
            {

                {
                     Id = 1, Name = "Laptop",Price = 50000
                },
                {
                     Id = 2, Name = "Smartphone", Price = 30000
                }
                ,
                {
                     Id = 3, Name = "Tablet", Price = 20000
                }
                ,
                {
                     Id = 4, Name = "Smartwatch", Price = 15000
                }
                ,
                {
                     Id = 5, Name = "Headphones", Price = 5000
                }
            };
           return products;
        }
        
        public async static Task<decimal> CalculateIncomeTax(decimal income)
        {
            await Task.Delay(10000);
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