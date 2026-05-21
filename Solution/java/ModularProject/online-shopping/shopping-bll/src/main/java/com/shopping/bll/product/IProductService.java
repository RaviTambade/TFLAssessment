package com.shopping.bll.product;

import com.shopping.bo.enums.Category;
import com.shopping.bo.product.Product;
import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(int id);
    List<Product> getProductsByCategory(Category category);
    List<Product> searchProducts(String keyword);
    boolean addProduct(Product product);
    boolean updateProduct(Product product);
    boolean removeProduct(int productId);
    boolean isInStock(int productId, int requiredQty);
}