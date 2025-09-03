package com.tap.repository.demo;

import java.util.Scanner;

public class Product {
    private int id;
    private String name;
    private double price;
    Scanner sc=new Scanner(System.in);

    Product(){
         {
        id=0;
        name="";
        price=0.0;

     }
    }
   public Product(int id,String name,double price)
    {
        this.id=id;
        this.name=name;
        this.price=price;
     }
     public int getId()
     {
          return id;
     }
     public void  setId(int id)
     {
          this.id=id;
     }
     public String getName()
     {
        return name;
     }
     public void  setName(String name)
     {
        this.name=name;
     }
     public double getPrice()
     {
        return price;
     }
     public void setPrice(double price)
     {
        this.price=price;
     }
    
}
