package com.shopping.bll.cart;

import com.shopping.bo.cart.CartItem;
import com.shopping.bo.product.Product;
import com.shopping.bll.product.IProductService;
import com.shopping.bll.product.ProductService;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class CartService {

    private final List<CartItem> cartItems = new ArrayList<>();
    private final IProductService productService;

    public CartService() {
        this.productService = new ProductService();
    }

    public void addToCart(int productId, int quantity) {
        if (!productService.isInStock(productId, quantity))
            throw new RuntimeException("Insufficient stock for product: " + productId);

        // If already in cart, increase quantity
        Optional<CartItem> existing = cartItems.stream()
                .filter(i -> i.getProduct().getProductId() == productId)
                .findFirst();

        if (existing.isPresent()) {
            existing.get().setQuantity(existing.get().getQuantity() + quantity);
        } else {
            Product product = productService.getProductById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            cartItems.add(new CartItem(product, quantity));
        }
    }

    public void removeFromCart(int productId) {
        cartItems.removeIf(i -> i.getProduct().getProductId() == productId);
    }

    public List<CartItem> getCartItems() {
        return new ArrayList<>(cartItems);  // return copy, not reference
    }

    public BigDecimal getCartTotal() {
        return cartItems.stream()
                        .map(CartItem::getSubtotal)
                        .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public void clearCart() {
        cartItems.clear();
    }

    public int getItemCount() {
        return cartItems.stream().mapToInt(CartItem::getQuantity).sum();
    }
}