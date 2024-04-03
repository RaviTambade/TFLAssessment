using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Assessment.Models;

namespace Assessment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet("")]
    public ActionResult<IEnumerable<Product>> GetProducts()
    {
         List<Product> products=new List<Product>();
          products.Add(new Product { Id = 1, Title = "Gerbera", Description = "Wedding Flower", UnitPrice = 6, Balance = 5000 });
          products.Add(new Product { Id = 2, Title = "Rose", Description = "Valentine Flower", UnitPrice = 15, Balance = 7000 });
          products.Add(new Product { Id = 3, Title = "Lotus", Description = "Worship Flower", UnitPrice = 26, Balance = 3400 });
          products.Add(new Product { Id = 4, Title = "Carnation", Description = "Pink carnations signify a mother's love, red is for admiration and white for good luck", UnitPrice = 16, Balance = 27000 });
          products.Add(new Product { Id = 5, Title = "Lily", Description = "Lilies are among the most popular flowers in the U.S.", UnitPrice = 6,  Balance = 1000 });
          products.Add(new Product { Id = 6, Title = "Jasmine", Description = "Jasmine is a genus of shrubs and vines in the olive family", UnitPrice = 26,  Balance = 2000 });
          products.Add(new Product { Id = 7, Title = "Daisy", Description = "Give a gift of these cheerful flowers as a symbol of your loyalty and pure intentions.", UnitPrice = 36, Balance = 159 });
          products.Add(new Product { Id = 8, Title = "Aster", Description = "Asters are the September birth flower and the the 20th wedding anniversary flower.", UnitPrice = 16,Balance = 67 });
          products.Add(new Product { Id = 9, Title = "Daffodil", Description = "Wedding Flower", UnitPrice = 6,  Balance = 5000 });
          products.Add(new Product { Id = 10, Title = "Dahlia", Description = "Dahlias are a popular and glamorous summer flower.", UnitPrice = 7,  Balance = 0 });
          products.Add(new Product { Id = 11, Title = "Hydrangea", Description = "Hydrangea is the fourth wedding anniversary flower", UnitPrice = 12, Balance = 0 });
          products.Add(new Product { Id = 12, Title = "Orchid", Description = "Orchids are exotic and beautiful, making a perfect bouquet for anyone in your life.", UnitPrice = 10,Balance = 700 });
          products.Add(new Product { Id = 13, Title = "Statice", Description = "Surprise them with this fresh, fabulous array of Statice flowers", UnitPrice = 16,  Balance = 1500 });
          products.Add(new Product { Id = 14, Title = "Sunflower", Description = "Sunflowers express your pure love.", UnitPrice = 8, Balance = 2300 });
          products.Add(new Product { Id = 15, Title = "Tulip", Description = "Tulips are the quintessential spring flower and available from January to June.", UnitPrice = 17,  Balance = 10000 });
        return products;
    }
}