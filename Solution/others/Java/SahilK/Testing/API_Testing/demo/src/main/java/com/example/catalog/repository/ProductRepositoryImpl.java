package com.example.catalog.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.catalog.model.Product;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private final List<Product> products = new ArrayList<>(Arrays.asList(
            new Product(1, "Dell", 14000),
            new Product(2, "HP", 340000),
            new Product(3, "Acer", 45000)));

    @Override
    public List<Product> getAllList() {
        return products;
    }

    @Override
    public Product getProductById(int id) {
        return products.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @Override
    public Product createProduct(Product product) {
        System.out.println("Creating product: " + product.getName());
        int newId = products.stream().mapToInt(Product::getId).max().orElse(0) + 1;
        product.setId(newId);
        products.add(product);
        return product;
    }

    @Override
    public Product updateProduct(Product product) {
        System.out.println("Updating product: " + product.getName());
        for (int i = 0; i < products.size(); i++) {
            Product p = products.get(i);
            if (p.getId() == product.getId()) {
                p.setName(product.getName());
                p.setPrice(product.getPrice());
                // update other fields if needed
                return p;
            }
        }
        throw new RuntimeException("Product with ID " + product.getId() + " not found");
    }

    @Override
    public String deleteProduct(int id) {
        System.out.println("Deleting product with ID: " + id);
        boolean removed = products.removeIf(p -> p.getId() == id);
        return removed ? "Product deleted successfully" : "Product not found";

    }
}
