package com.tfl.dao;
import java.util.List;
import com.tfl.models.Product;

public interface ProductDAO {
    List<Product> getAll();
	int insert(Product p);
	Product getById(int pid);
	int update(Product p);
	int remove(int pid);    
}
