package com.example.catalog.service;

import java.util.List;

import com.example.catalog.model.Product;

public interface ProductService {

  public List<Product> getAllList();
  public Product getProductById(int id);
  public Product createProduct(Product product);
  public Product updateProduct(Product product);
  public String deleteProduct(int id);
    
} 