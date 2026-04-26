.NET Core application that performs CRUD (Create, Read, Update, Delete) operations on Product entity, let's say `Product`.

## NUnit tests for ProductCatalog CRUD operations.

First, let's create a simple `Product` class representing our entity:

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
}
```

Next, let's create a `ProductService` class responsible for performing CRUD operations on products:

```csharp
using System;
using System.Collections.Generic;

public class ProductService
{
    private List<Product> _products = new List<Product>();
    private int _nextId = 1;

    public Product CreateProduct(string name, double price)
    {
        var product = new Product { Id = _nextId++, Name = name, Price = price };
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
```

Now, let's write NUnit tests for this `ProductService`:

```csharp
using NUnit.Framework;
using System;

[TestFixture]
public class ProductServiceTests
{
    private ProductService _productService;

    [SetUp]
    public void Setup()
    {
        _productService = new ProductService();
    }

    [Test]
    public void CreateProduct_ProductCreated_Successfully()
    {
        // Arrange
        string productName = "Test Product";
        double productPrice = 10.0;

        // Act
        Product createdProduct = _productService.CreateProduct(productName, productPrice);

        // Assert
        Assert.NotNull(createdProduct);
        Assert.AreEqual(productName, createdProduct.Name);
        Assert.AreEqual(productPrice, createdProduct.Price);
    }

    [Test]
    public void UpdateProduct_ProductUpdated_Successfully()
    {
        // Arrange
        Product product = _productService.CreateProduct("Test Product", 10.0);
        string newName = "Updated Test Product";
        double newPrice = 20.0;

        // Act
        _productService.UpdateProduct(product.Id, newName, newPrice);
        Product updatedProduct = _productService.GetProductById(product.Id);

        // Assert
        Assert.AreEqual(newName, updatedProduct.Name);
        Assert.AreEqual(newPrice, updatedProduct.Price);
    }

    [Test]
    public void DeleteProduct_ProductDeleted_Successfully()
    {
        // Arrange
        Product product = _productService.CreateProduct("Test Product", 10.0);

        // Act
        _productService.DeleteProduct(product.Id);

        // Assert
        Assert.IsNull(_productService.GetProductById(product.Id));
    }

    [Test]
    public void GetProductById_ProductExists_ReturnsProduct()
    {
        // Arrange
        Product product = _productService.CreateProduct("Test Product", 10.0);

        // Act
        Product retrievedProduct = _productService.GetProductById(product.Id);

        // Assert
        Assert.NotNull(retrievedProduct);
        Assert.AreEqual(product, retrievedProduct);
    }

    [Test]
    public void GetAllProducts_ReturnsAllProducts()
    {
        // Arrange
        _productService.CreateProduct("Product 1", 10.0);
        _productService.CreateProduct("Product 2", 20.0);

        // Act
        var allProducts = _productService.GetAllProducts();

        // Assert
        Assert.AreEqual(2, allProducts.Count);
    }
}
```

These tests cover the basic CRUD operations (Create, Read, Update, Delete) for the `ProductService` class. You can run these tests using NUnit test runner or via the dotnet CLI. Make sure to add references to NUnit and NUnit3TestAdapter NuGet packages in your project to execute these tests.