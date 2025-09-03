package com.tap.nirjala.Repository;
import java.util.List;

import com.tap.nirjala.Entity.Product;
public interface  ProductRepository
{
    void save(Product product);
    Product findById(int id);
    List<Product>findAll();
    void deleteById(int id);
}

