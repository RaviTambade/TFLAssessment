package com.transflower.tflassessment.demo.entities;

public class Person {

    private String firstName;
    private String lastName;

    public Person(){
        this.firstName="Ravi";
        this.lastName="Tambade";
    }
    
    @Override  
    public String toString(){
        return this.firstName + " "+ this.lastName;
    }
}
