package com.tap.nirjala.demo;
import com.tap.nirjala.Entity.Product;
import com.tap.nirjala.Services.ProductService;
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        Product product=new Product(3,"pencil",5.0);
        ProductService srv=new ProductService();
        srv.registerProduct(product);
        srv.showAllProducts();
        
    }
}
