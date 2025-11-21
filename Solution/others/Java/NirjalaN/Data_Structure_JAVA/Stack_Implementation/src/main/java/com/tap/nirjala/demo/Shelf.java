package com.tap.nirjala.demo;


public class Shelf 
{
    Books [] books=new Books[5];
    int top=-1;
    

    public Shelf(){
      for(int i=0;i<5;i++){
        books[i]=new Books();
      }
    }

    public Shelf(Books[] book){
        for(int i=0;i<5;i++){
            books[i]=book[i];
        }
    }

    public void push(Books book){
        top++;
        books[top]=book;
    }

    public void pop(){
        top=4;
        top--;
        for(int i=top;i>=0;i--){
            System.out.println(books[i]);
        }
    }

    public void peek(int index){
        System.out.println(books[index]);
    }

    public void display(){
        for(int i=top;i>=0;i--){
            System.out.println(books[i]);
        }
    }

}