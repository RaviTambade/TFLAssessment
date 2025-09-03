package com.tap.nirjala.Entity;
public class Product {
    private int id;
    private String name;
    private double price;

 Product()
 {
    id=0;
    name="";
    price=0.0;
 }
 public Product(int id,String name,double price)
 {
    this.id=id;
    this.name=name;
    this.price=price;
 }
 public double getPrice()
 {
    return price;
 }

 public void setPrice(double price)
 {
 this.price= price;
 }
 public void setId()
 {
    this.id= id;
 }
 public String getName()
 {
    return name;
 }
 public String setName()
 {
    return name;
 }
public void setName(String name)
{
    this.name=name;
}

}