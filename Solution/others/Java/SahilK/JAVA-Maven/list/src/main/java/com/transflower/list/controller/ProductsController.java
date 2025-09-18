package com.transflower.list.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.list.service.ProductsService;
import com.transflower.list.entities.Product;

@RestController
public class ProductsController {

   private final ProductsService productsService;
   
   public ProductsController(ProductsService service){
    this.productsService=service;
   }
   @GetMapping("/products")
   private List<Product> getAllProducts()
   {
    List<Product> fruits=this.productsService.getAll();
    return fruits;

   }
}
