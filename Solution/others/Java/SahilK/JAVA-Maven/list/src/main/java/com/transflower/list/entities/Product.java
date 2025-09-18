package com.transflower.list.entities;

public class Product
{
    private int id;   
    private String title;  
    private String description;   
    private float unitPrice; 

    public Product( int id, String title, String desciption, int price){
        this.id=id;
        this.title=title;
        this.description=desciption;
        this.unitPrice=price;
    }

    public int getId()   
    {  
        return id;  
    }  
    public void setId(int id)   
    {  
        this.id = id;  
    }  
    public String getTitle()  
    {  
        return title;  
    }  
    public void setTitle(String title)   
    {  
        this.title = title;  
    }  
    public String getDescription()   
    {  
        return description;  
    }  
    public void setDescription(String description)   
    {  
        this.description = description;  
    }  
    public float getUnitPrice()   
    {  
        return unitPrice;  
    }  
    public void setPrice(float price)   
    {  
        this.unitPrice = price;  
    }
}