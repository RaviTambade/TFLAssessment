using NUnit.Framework;
using System;
using ProductCatalog;

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
