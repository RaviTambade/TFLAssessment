package com.example.catalog.controller;

import com.example.catalog.model.Product;
import com.example.catalog.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    // private final List<Product> products = new ArrayList<>(Arrays.asList(
    // new Product(1, "Laptop", 75000),
    // new Product(2, "Phone", 35000),
    // new Product(3, "Headphones", 2000)
    // ));

    private ProductService _service;

    @Autowired
    public ProductController(ProductService service) {
        _service = service;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return _service.getAllList();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return _service.getProductById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return _service.createProduct(product);
        // Product createdProduct = _service.createProduct(product);
        // return ResponseEntity
        //         .status(201) // HTTP 201 Created
        //         .body(createdProduct);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product updatedProduct) {
        return _service.updateProduct(updatedProduct);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        _service.deleteProduct(id);
        return "Product deleted successfully";
    }
}