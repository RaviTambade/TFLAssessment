package com.transflower.list.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.list.entities.Product;

@Service
public class ProductsService {

    public List<Product> getAll(){
        List<Product> fruits=new ArrayList<>();
        fruits.add(new Product(1, "Mango", "Alphanso Mango", 100));
        fruits.add(new Product(2, "Apple", "Kashmiri Apple", 150));
        fruits.add(new Product(3, "Banana", "Organic Banana", 40));
        fruits.add(new Product(4, "Orange", "Nagpur Orange", 120));
        fruits.add(new Product(5, "Grapes", "Seedless Green Grapes", 90));
        fruits.add(new Product(6, "Pineapple", "Fresh Pineapple", 80));
        return fruits;
    }

    public Product getById(int id){
        return new Product(1, "Mango", "Alphanso Mango", 100);
    }

    
    
    
}
