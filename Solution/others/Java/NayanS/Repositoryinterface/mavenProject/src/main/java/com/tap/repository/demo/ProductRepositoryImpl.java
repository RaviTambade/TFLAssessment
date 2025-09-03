package com.tap.repository.demo;

import java.util.List;

public class ProductRepositoryImpl implements ProductRepository {

    @Override
    public void save(Product product)
    {
        System.out.println("Product is saved");
    }

    public Product findById(int id)
    {
        return new Product(id,"Sample",100.00);
    }
    public List<Product> findAll()
    {
        return List.of(
        new Product(1,"Pen",10.0),
        new Product(2,"NoteBook",30.00)

        );
    }

    
}
