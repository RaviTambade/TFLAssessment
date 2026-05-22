package com.shopping.dal.product;

import com.shopping.bo.enums.Category;
import com.shopping.bo.product.Product;
import java.util.List;
import java.util.Optional;

public interface IProductDAO {
    List<Product> findAll();
    Optional<Product> findById(int productId);
    List<Product> findByCategory(Category category);
    List<Product> searchByName(String keyword);
    boolean save(Product product);
    boolean update(Product product);
    boolean delete(int productId);
}