package com.tap.nirjala.demo;
public class App 
{
    public static void main( String[] args )
    {
        Shelf shelf1=new Shelf();

        Books book1 = new Books("Yuval Noah Harari", "Sapiens: A Brief History of Humankind");
        Books book2 = new Books("James Clear", "Atomic Habits");
        Books book3 = new Books("George Orwell", "1984");
        Books book4 = new Books("Robin Sharma", "The Monk Who Sold His Ferrari");
        Books book5 = new Books("Walter Isaacson", "Steve Jobs");


        shelf1.push(book1);
        shelf1.push(book2);
        shelf1.push(book3);
        shelf1.push(book4);
        shelf1.push(book5);

        System.out.println("********************************************");
        shelf1.display();
        System.out.println("********************************************");
        shelf1.pop();
        System.out.println("********************************************");
        shelf1.display();
        System.out.println("********************************************");
        shelf1.peek(4);
        
    }
}