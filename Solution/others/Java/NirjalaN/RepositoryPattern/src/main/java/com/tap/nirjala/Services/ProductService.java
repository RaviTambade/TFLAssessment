package com.tap.nirjala.Services;
import java.util.*;
import com.tap.nirjala.Entity.Product;
import com.tap.nirjala.Repository.ProductRepository;
import com.tap.nirjala.Repository.ProductRepositoryImpl;

public class ProductService {
    private ProductRepository repo=new ProductRepositoryImpl();

    public void registerProduct(Product p)
    {
        repo.save(p);
    }
    public void showAllProducts()
    {
        List<Product>products=repo.findAll();
        products.forEach(p-> System.out.println(p.getName()));
    }
}
