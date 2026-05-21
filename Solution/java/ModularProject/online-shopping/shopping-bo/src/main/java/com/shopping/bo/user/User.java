package com.shopping.bo.user;

public class User {

    private int userId;
    private String username;
    private String email;
    private String passwordHash;
    private String phone;
    private String address;

    public User() {}

    public User(int userId, String username, String email,
                String passwordHash, String phone, String address) {
        this.userId       = userId;
        this.username     = username;
        this.email        = email;
        this.passwordHash = passwordHash;
        this.phone        = phone;
        this.address      = address;
    }

    public int getUserId()         { return userId; }
    public String getUsername()    { return username; }
    public String getEmail()       { return email; }
    public String getPasswordHash(){ return passwordHash; }
    public String getPhone()       { return phone; }
    public String getAddress()     { return address; }

    public void setUserId(int userId)            { this.userId = userId; }
    public void setUsername(String username)     { this.username = username; }
    public void setEmail(String email)           { this.email = email; }
    public void setPasswordHash(String hash)     { this.passwordHash = hash; }
    public void setPhone(String phone)           { this.phone = phone; }
    public void setAddress(String address)       { this.address = address; }

    @Override
    public String toString() {
        return "User{id=" + userId + ", username='" + username +
               "', email='" + email + "'}";
    }
}