package com.tap.repository.demo;
import java.util.*;

public interface ProductRepository{
    void save(Product product);
    Product findById(int id);
    List<Product>findAll();
    void deleteById(int id);

    
}
