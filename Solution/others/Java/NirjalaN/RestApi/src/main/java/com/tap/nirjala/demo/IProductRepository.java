package com.tap.nirjala.demo;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

public interface IProductRepository {
    CompletableFuture<Void>addProduct(Product product);
    CompletableFuture<Optional<Product>>getProductById(int id);
    CompletableFuture<List<Product>> getAllProducts();
    CompletableFuture<Void>updateProduct(Product product);
    CompletableFuture<Boolean> deleteProduct(int id);
}
