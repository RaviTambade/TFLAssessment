using System;
using System.Collections.Generic;
namespace ProductCatalog;
public class ProductService
{
    private List<Product> _products = new List<Product>();
    private int _nextId = 1;

    public Product CreateProduct(string name, double price)
    {
        var product = new Product { 
            Id = _nextId++,
            Name = name, 
            Price = price 
        };
        
        _products.Add(product);
        
        return product;
    }

    public Product GetProductById(int id)
    {
        return _products.Find(p => p.Id == id);
    }

    public void UpdateProduct(int id, string newName, double newPrice)
    {
        var product = GetProductById(id);
        if (product != null)
        {
            product.Name = newName;
            product.Price = newPrice;
        }
        else
        {
            throw new ArgumentException("Product not found");
        }
    }

    public void DeleteProduct(int id)
    {
        var product = GetProductById(id);
        if (product != null)
        {
            _products.Remove(product);
        }
        else
        {
            throw new ArgumentException("Product not found");
        }
    }

    public List<Product> GetAllProducts()
    {
        return _products;
    }
}
