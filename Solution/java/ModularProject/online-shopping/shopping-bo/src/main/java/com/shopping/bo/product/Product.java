package com.shopping.bo.product;

import com.shopping.bo.enums.Category;
import java.math.BigDecimal;

public class Product {

    private int productId;
    private String name;
    private String description;
    private BigDecimal price;
    private int stockQuantity;
    private Category category;
    private String imageUrl;

    public Product() {}

    public Product(int productId, String name, String description,
                   BigDecimal price, int stockQuantity,
                   Category category, String imageUrl) {
        this.productId     = productId;
        this.name          = name;
        this.description   = description;
        this.price         = price;
        this.stockQuantity = stockQuantity;
        this.category      = category;
        this.imageUrl      = imageUrl;
    }

    public int getProductId()      { return productId; }
    public String getName()        { return name; }
    public String getDescription() { return description; }
    public BigDecimal getPrice()   { return price; }        // ← this fixes the error
    public int getStockQuantity()  { return stockQuantity; }
    public Category getCategory()  { return category; }
    public String getImageUrl()    { return imageUrl; }

    public void setProductId(int productId)        { this.productId = productId; }
    public void setName(String name)               { this.name = name; }
    public void setDescription(String desc)        { this.description = desc; }
    public void setPrice(BigDecimal price)         { this.price = price; }
    public void setStockQuantity(int qty)          { this.stockQuantity = qty; }
    public void setCategory(Category category)     { this.category = category; }
    public void setImageUrl(String imageUrl)       { this.imageUrl = imageUrl; }

    @Override
    public String toString() {
        return "Product{id=" + productId + ", name='" + name +
               "', price=" + price + ", stock=" + stockQuantity +
               ", category=" + category + "}";
    }
}