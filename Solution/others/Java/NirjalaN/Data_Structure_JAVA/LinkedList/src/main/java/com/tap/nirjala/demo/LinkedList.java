package com.tap.nirjala.demo;

public class LinkedList {
    Node startNode;

    public LinkedList() {
        startNode = null;
    }

    public LinkedList(int data) 
    {
        startNode = new Node(data);
    }

    public void insert(int data) 
    {
        Node newNode = new Node(data);

        if (startNode == null) {
            startNode = newNode;
            return;
        }

        Node current = startNode;
        while (current.next != null) 
        {
            current = current.next;
        }
        current.next = newNode;
    }

    public void delete(int data) 
    {
        if (startNode == null) return;

        if (startNode.data == data) 
        {
            startNode = startNode.next;
            return;
        }

        Node current = startNode;
        while (current.next != null) 
        {
            if (current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    public void search(int data) 
    {
        Node current = startNode;
        int position = 1;
        while (current != null) {
            if (current.data == data) {
                System.out.println("Your data is: " + data + " at position: " + position);
                return;
            }
            current = current.next;
            position++;
        }
        System.out.println("Data " + data + " not found in the list.");
    }

    public void display() 
    {
        System.out.println("------------------------------------------------");
        Node current = startNode;
        while (current != null) {
            System.out.println(current.data);
            current = current.next;
        }
        System.out.println("-------------------------------------------------");
    }
}
