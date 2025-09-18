package com.tap.nirjala.demo;
import java.util.Collection;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.Collectors;

import com.tap.nirjala.*;

public class InMemoryProductRepository implements IProductRepository  {
    private final List<Product> products=Collection.synchronizedList(new ArrayList<>());
    
    @Override
    public CompletableFuture<Void>addProduct(Product product){
        return CompletableFuture.runAsync(()->{
            simulateDelay();
            products.add(product);
    });
}

    @Override
    public CompletableFuture<Optional<Product>> getProductById(int id)
    {
        return CompletableFuture.supplyAsync(()->{
            simultrDelay();
            return products.stream().filter(p-> p.getId()==id).findFirst();
            });
    }
    @

    @Override
    public CompletableFuture<Void> updateProduct(Product updateProduct )
    {

    }
}

