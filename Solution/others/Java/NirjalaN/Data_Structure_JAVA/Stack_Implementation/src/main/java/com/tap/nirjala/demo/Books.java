package com.tap.nirjala.demo;

public class Books {

    private String author;
    private String name;

    public Books(){
        author=" ";
        name=" ";
    }

    public Books(String author,String name){
        this.author=author;
        this.name=name;
    }

    public void setAuthor(String author){
        this.author=author;
    }

    public String getAuthor(){
        return author;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getName(){
        return name;
    }

    @Override
    public String toString(){
        return ("Name : "+name+"  "+"Author : "+author);
    }

}