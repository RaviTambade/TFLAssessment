package com.tap.nirjala.Repository;
import java.util.*;
import com.tap.nirjala.Entity.Product;
import com.tap.nirjala.Repository.*;
public class ProductRepositoryImpl implements ProductRepository{

    @Override
    public void save(Product product)
    {
        System.out.println("The product saved to DB");
    }
    @Override
    public Product findById(int id)
    {
       return new Product(id,"sample",80.00);
    }
    @Override
    public List<Product>findAll(){
        List<Product>products=new ArrayList<Product>();
            products.add(new Product(1, "Pen", 10.0));
            products.add(new Product(2, "notebook", 50.0));
            return products;
    }
    @Override
    public void deleteById()
    {
        System.out.println("product deleted from db");
    }
    
}
