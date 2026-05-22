package com.shopping.bo.order;

import com.shopping.bo.cart.CartItem;
import com.shopping.bo.enums.OrderStatus;
import com.shopping.bo.user.User;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class Order {

    private int orderId;
    private User user;
    private List<CartItem> items;
    private OrderStatus status;
    private LocalDateTime orderDate;
    private String shippingAddress;

    public Order() {}

    public Order(int orderId, User user, List<CartItem> items,
                 OrderStatus status, LocalDateTime orderDate,
                 String shippingAddress) {
        this.orderId         = orderId;
        this.user            = user;
        this.items           = items;
        this.status          = status;
        this.orderDate       = orderDate;
        this.shippingAddress = shippingAddress;
    }

    public int getOrderId()               { return orderId; }
    public User getUser()                 { return user; }
    public List<CartItem> getItems()      { return items; }
    public OrderStatus getStatus()        { return status; }
    public LocalDateTime getOrderDate()   { return orderDate; }
    public String getShippingAddress()    { return shippingAddress; }

    public void setOrderId(int orderId)              { this.orderId = orderId; }
    public void setUser(User user)                   { this.user = user; }
    public void setItems(List<CartItem> items)       { this.items = items; }
    public void setStatus(OrderStatus status)        { this.status = status; }
    public void setOrderDate(LocalDateTime date)     { this.orderDate = date; }
    public void setShippingAddress(String address)   { this.shippingAddress = address; }

    public BigDecimal getTotalAmount() {
        return items.stream()
                    .map(CartItem::getSubtotal)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}