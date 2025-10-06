package com.example.catalog.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.catalog.model.Product;
import com.example.catalog.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService _service;

    @Autowored
    public ProductController(ProductService service){
        _service=service;
    }

    @GetMapping
    public List<Product> getAllList(){
        return _service.getAllList();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id){
        return _service.getProductById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return _service.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product updateProduct){
        return _service.updateProduct(updateProduct);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id){
        _service.deleteProduct(id);
        return "product deleted successfully";
    }
}
