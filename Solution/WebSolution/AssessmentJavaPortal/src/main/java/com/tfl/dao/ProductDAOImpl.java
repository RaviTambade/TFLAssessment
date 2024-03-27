package com.tfl.dao;

import java.util.ArrayList;
import java.util.List;
import com.tfl.models.Product;

public class ProductDAOImpl implements ProductDAO {

	@Override
    public List<Product> getAll(){
        List<Product> products=new ArrayList<>();
        // For demonstration purposes, adding some sample products
        products.add(new Product(1, "Gerbera","Wedding Flower",10,2000));
        products.add(new Product(2, "Rose","Valentine Flower",19,6000));
        products.add(new Product(3, "Lotus","Worship Flower",25,8000));
        products.add(new Product(4, "Jasmine","Smelling Flower",2,54600));
        return products;
    }

	@Override
	public int insert(Product p){
        return 1;
    }

	@Override
	public Product getById(int pid){
        Product product=new Product(1, "Gerbera","Wedding Flower",10,2000);
        return product;

    }

	@Override
	public int update(Product p){
        return 1;

    }

    @Override
	public int remove(int pid){
        return 1;
    }   
}