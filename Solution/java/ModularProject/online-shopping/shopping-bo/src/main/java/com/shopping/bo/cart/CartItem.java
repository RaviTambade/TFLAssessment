package com.shopping.bo.cart;

import com.shopping.bo.product.Product;
import java.math.BigDecimal;

public class CartItem {

    private Product product;
    private int quantity;

    public CartItem() {}

    public CartItem(Product product, int quantity) {
        this.product  = product;
        this.quantity = quantity;
    }

    public Product getProduct()  { return product; }
    public int getQuantity()     { return quantity; }

    public void setProduct(Product product)  { this.product = product; }
    public void setQuantity(int quantity)    { this.quantity = quantity; }

    public BigDecimal getSubtotal() {
        return product.getPrice()
                      .multiply(BigDecimal.valueOf(quantity));
    }

    @Override
    public String toString() {
        return "CartItem{product=" + product.getName() +
               ", qty=" + quantity +
               ", subtotal=" + getSubtotal() + "}";
    }
}