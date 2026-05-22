package com.shopping.bll.product;

import com.shopping.bo.enums.Category;
import com.shopping.bo.product.Product;
import com.shopping.dal.product.IProductDAO;
import com.shopping.dal.product.ProductDAO;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public class ProductService implements IProductService {

    // DAL injected — BLL never creates DB connections directly
    private final IProductDAO productDAO;

    public ProductService() {
        this.productDAO = new ProductDAO();          // simple DI
    }

    public ProductService(IProductDAO productDAO) {  // constructor DI for testing
        this.productDAO = productDAO;
    }

    @Override
    public List<Product> getAllProducts() {
        return productDAO.findAll();
    }

    @Override
    public Optional<Product> getProductById(int id) {
        if (id <= 0) throw new IllegalArgumentException("Invalid product ID");
        return productDAO.findById(id);
    }

    @Override
    public List<Product> getProductsByCategory(Category category) {
        if (category == null) throw new IllegalArgumentException("Category required");
        return productDAO.findByCategory(category);
    }

    @Override
    public List<Product> searchProducts(String keyword) {
        if (keyword == null || keyword.trim().isEmpty())
            throw new IllegalArgumentException("Search keyword cannot be empty");
        return productDAO.searchByName(keyword.trim());
    }

    @Override
    public boolean addProduct(Product product) {
        // ← Business Rules live here, NOT in DAL or Controller
        validateProduct(product);
        return productDAO.save(product);
    }

    @Override
    public boolean updateProduct(Product product) {
        validateProduct(product);
        productDAO.findById(product.getProductId())
                  .orElseThrow(() -> new RuntimeException("Product not found"));
        return productDAO.update(product);
    }

    @Override
    public boolean removeProduct(int productId) {
        return productDAO.delete(productId);
    }

    @Override
    public boolean isInStock(int productId, int requiredQty) {
        return productDAO.findById(productId)
                         .map(p -> p.getStockQuantity() >= requiredQty)
                         .orElse(false);
    }

    // ---- Private Business Rules ----
    private void validateProduct(Product p) {
        if (p.getName() == null || p.getName().isBlank())
            throw new IllegalArgumentException("Product name is required");
        if (p.getPrice() == null || p.getPrice().compareTo(BigDecimal.ZERO) <= 0)
            throw new IllegalArgumentException("Price must be greater than zero");
        if (p.getStockQuantity() < 0)
            throw new IllegalArgumentException("Stock cannot be negative");
        if (p.getCategory() == null)
            throw new IllegalArgumentException("Category is required");
    }
}