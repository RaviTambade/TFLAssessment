package com.tap.nirjala.demo;

public class App {
    public static void main(String[] args) {
        LinkedList l1 = new LinkedList();
        l1.insert(1);
        l1.insert(2);
        l1.insert(3);
        l1.insert(45);
        l1.insert(67);

        l1.display();
        l1.delete(2);
        l1.display();
        l1.search(45);
    }
}
