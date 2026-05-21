package com.shopping.console;

import com.shopping.bll.cart.CartService;
import com.shopping.bll.product.IProductService;
import com.shopping.bll.product.ProductService;
import com.shopping.bo.product.Product;
import java.util.List;
import java.util.Scanner;

public class ConsoleApp {

    private static final IProductService productService = new ProductService();
    private static final CartService cartService = new CartService();
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("=== Welcome to Online Shopping ===");
        boolean running = true;

        while (running) {
            printMenu();
            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1 -> listAllProducts();
                case 2 -> searchProducts();
                case 3 -> addToCart();
                case 4 -> viewCart();
                case 0 -> running = false;
                default -> System.out.println("Invalid option");
            }
        }
        System.out.println("Thank you for shopping!");
    }

    private static void printMenu() {
        System.out.println("\n1. View All Products");
        System.out.println("2. Search Products");
        System.out.println("3. Add to Cart");
        System.out.println("4. View Cart");
        System.out.println("0. Exit");
        System.out.print("Choice: ");
    }

    private static void listAllProducts() {
        List<Product> products = productService.getAllProducts();
        products.forEach(p -> System.out.printf(
                "[%d] %-20s ₹%-10.2f Stock: %d%n",
                p.getProductId(), p.getName(),
                p.getPrice(), p.getStockQuantity()));
    }

    private static void searchProducts() {
        System.out.print("Enter keyword: ");
        String keyword = scanner.nextLine();
        productService.searchProducts(keyword)
                      .forEach(p -> System.out.println(p.getName()
                               + " - ₹" + p.getPrice()));
    }

    private static void addToCart() {
        System.out.print("Enter Product ID: ");
        int id = Integer.parseInt(scanner.nextLine());
        System.out.print("Quantity: ");
        int qty = Integer.parseInt(scanner.nextLine());
        cartService.addToCart(id, qty);
        System.out.println("Added to cart! Total: ₹" + cartService.getCartTotal());
    }

    private static void viewCart() {
        System.out.println("\n--- Your Cart ---");
        cartService.getCartItems().forEach(item ->
                System.out.printf("%s x%d = ₹%.2f%n",
                        item.getProduct().getName(),
                        item.getQuantity(),
                        item.getSubtotal()));
        System.out.println("TOTAL: ₹" + cartService.getCartTotal());
    }
}